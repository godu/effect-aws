/**
 * How to use:
 *
 * 1. Define a new package in `.projenrc.ts` (the package must have the same name as the AWS client) and run `pnpm run synth-workspace`.
 * 2. Run `pnpm run codegen-client`, select the package to generate.
 * 3. Run `Run pnpm run eslint --fix` to fix the formatting.
 * 4. Commit the changes and enjoy.
 */
import { exec } from "node:child_process";
import { mkdir, readdir, writeFile } from "node:fs/promises";

import { Array, Effect, Exit, Option, Predicate, Record, String, Struct, Tuple } from "effect";
import { constVoid, flow, pipe } from "effect/Function";
import Enquirer from "enquirer";
import singularities from "./client-singularities.json";

type Shape =
  | { type: "boolean" }
  | { type: "integer" }
  | { type: "double" }
  | { type: "string" }
  | { type: "timestamp" }
  | { type: "enum" }
  | { type: "list" }
  | {
    type: "operation";
    input: { target: string };
    errors: Array<{ target: string }>;
  }
  | {
    type: "service";
    operations: Array<{ target: string }>;
    traits: {
      "aws.api#service": {
        sdkId: string;
        cloudFormationName: string;
      };
    };
  }
  | { type: "structure" };

interface Manifest {
  shapes: Record<string, Shape>;
}

main().catch(console.error);

function normalizeServiceName(serviceName: string) {
  let originalServiceName = serviceName;
  if (serviceName === "api-gateway-management-api") {
    originalServiceName = "apigatewaymanagementapi";
  }
  if (serviceName === "opensearch-serverless") {
    originalServiceName = "opensearchserverless";
  }
  return originalServiceName;
}

async function main() {
  const enquirer = new Enquirer<{
    services: Array<string>;
    commandToTest: string;
    inputToTest: string;
  }>();

  const { services } = await enquirer.prompt({
    type: "autocomplete",
    name: "services",
    message: "Which clients do you want to generate ?",
    multiple: true,
    choices: (await readdir("./packages")).filter((s) => s.startsWith("client-")),
  });

  const each = services.map((packageName) =>
    Effect.promise(async () => {
      const serviceName = pipe(packageName, String.replace(/^client-/, ""));

      const originalServiceName = normalizeServiceName(serviceName);

      const manifest = (await (
        await fetch(
          `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${originalServiceName}.json`,
        )
      ).json()) as Manifest;

      const operationTargets = pipe(
        manifest.shapes,
        Record.filter(
          (shape): shape is Extract<Shape, { type: "operation" }> => shape.type === "operation",
        ),
        Record.keys,
      );

      const operationNames = pipe(
        operationTargets,
        Array.map(getNameFromTarget),
      );

      const { commandToTest } = (singularities as any)[packageName] ??
        (await enquirer.prompt({
          type: "autocomplete",
          name: "commandToTest",
          message: `Which command do you want to test in ${packageName} ?`,
          multiple: false,
          choices: operationNames,
        }));

      const { inputToTest } = (singularities as any)[packageName]?.inputToTest !== undefined
        ? {
          inputToTest: (singularities as any)[packageName].inputToTest
            ? JSON.stringify(
              (singularities as any)[packageName].inputToTest,
            )
            : "",
        }
        : await enquirer.prompt({
          type: "input",
          name: "inputToTest",
          message: `Which input do you want to test of ${commandToTest} ? (optional)`,
          validate: Predicate.or(String.isEmpty)(
            flow(
              Effect.succeed,
              Effect.tryMap({
                try: JSON.parse,
                catch: constVoid,
              }),
              Effect.runSyncExit,
              Exit.isSuccess,
            ),
          ),
        });

      return [packageName, commandToTest, inputToTest] as const;
    })
  );

  const results = await Effect.runPromise(Effect.all(each, { concurrency: 1 }));

  return Promise.all(results.map(generateClient));
}

const getNameFromTarget = flow(
  String.split("#"),
  Array.get(1),
  Option.getOrThrow,
);

const lowerFirst = flow(Array.modify(0, String.toLowerCase), Array.join(""));

const upperFirst = flow(Array.modify(0, String.toUpperCase), Array.join(""));

async function generateClient([
  packageName,
  commandToTest,
  inputToTest,
]: readonly [string, string, string]) {
  const serviceName = pipe(packageName, String.replace(/^client-/, ""));

  const originalServiceName = normalizeServiceName(serviceName);

  const manifest = (await (
    await fetch(
      `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${originalServiceName}.json`,
    )
  ).json()) as Manifest;

  const serviceShape = pipe(
    manifest.shapes,
    Record.values,
    Array.findFirst(
      (shape): shape is Extract<Shape, { type: "service" }> => shape.type === "service",
    ),
    Option.getOrThrowWith(() => new TypeError("ServiceShape is not found")),
  );

  const { sdkId } = serviceShape.traits["aws.api#service"];
  const sdkName = upperFirst(String.replaceAll(" ", "")(sdkId));

  const awsClient = await import(
    `../packages/client-${serviceName}/node_modules/@aws-sdk/client-${originalServiceName}/dist-cjs/index.js`
  );

  const serviceException = `${sdkName}ServiceException`;

  const exportedErrors = pipe(
    awsClient,
    Record.filter(
      (value) =>
        typeof value === "function" &&
        value.prototype &&
        value.prototype instanceof awsClient[serviceException],
    ),
    Record.keys,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/Errors.ts`,
    `import type { ${
      exportedErrors.map((e) => (e.endsWith("Error") ? `${e} as ${String.replace(/Error$/, "")(e)}Exception` : e)).join(
        ", ",
      )
    } } from "@aws-sdk/client-${originalServiceName}";
import { Data } from "effect";

export const AllServiceErrors = [${exportedErrors.map((e) => `"${e}"`).join(", ")}];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

${
      pipe(
        exportedErrors,
        Array.map(
          (taggedError) =>
            `export type ${
              pipe(taggedError, String.replace(/(Failure|Exception|Error|ErrorException)$/, ""))
            }Error = TaggedException<${
              taggedError.endsWith("Error") ? `${String.replace(/Error$/, "")(taggedError)}Exception` : taggedError
            }>;`,
        ),
        Array.join("\n"),
      )
    }

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkName}ClientInstance.ts`,
    `/**
 * @since 1.0.0
 */
import { ${sdkName}Client } from "@aws-sdk/client-${originalServiceName}";
import { Context, Effect, Layer } from "effect";
import {
  Default${sdkName}ClientConfigLayer,
  ${sdkName}ClientInstanceConfig,
} from "./${sdkName}ClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ${sdkName}ClientInstance extends Context.Tag(
  "@effect-aws/client-${serviceName}/${sdkName}ClientInstance",
)<${sdkName}ClientInstance, ${sdkName}Client>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make${sdkName}ClientInstance = Effect.flatMap(
	${sdkName}ClientInstanceConfig,
	(config) =>
		Effect.acquireRelease(
			Effect.sync(() => new ${sdkName}Client(config)),
			(client) => Effect.sync(() => client.destroy()),
		),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ${sdkName}ClientInstanceLayer = Layer.scoped(
  ${sdkName}ClientInstance,
  make${sdkName}ClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const Default${sdkName}ClientInstanceLayer = ${sdkName}ClientInstanceLayer.pipe(
  Layer.provide(Default${sdkName}ClientConfigLayer),
);
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkName}ClientInstanceConfig.ts`,
    `/**
 * @since 1.0.0
 */
import type { ${sdkName}ClientConfig } from "@aws-sdk/client-${originalServiceName}";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class ${sdkName}ClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-${serviceName}/${sdkName}ClientInstanceConfig",
)<${sdkName}ClientInstanceConfig, ${sdkName}ClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefault${sdkName}ClientInstanceConfig: Effect.Effect<${sdkName}ClientConfig> =
  Effect.gen(function* (_) {
    const runtime = yield* _(Effect.runtime<never>());
    const runSync = Runtime.runSync(runtime);

    return {
      logger: {
        info(m) {
          Effect.logInfo(m).pipe(runSync);
        },
        warn(m) {
          Effect.logWarning(m).pipe(runSync);
        },
        error(m) {
          Effect.logError(m).pipe(runSync);
        },
        debug(m) {
          Effect.logDebug(m).pipe(runSync);
        },
        trace(m) {
          Effect.logTrace(m).pipe(runSync);
        },
      },
    };
  });

/**
 * @since 1.0.0
 * @category layers
 */
export const Default${sdkName}ClientConfigLayer = Layer.effect(
  ${sdkName}ClientInstanceConfig,
  makeDefault${sdkName}ClientInstanceConfig,
);
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/src/index.ts`,
    `export * from "./Errors.js";
export * from "./${sdkName}ClientInstance.js";
export * from "./${sdkName}ClientInstanceConfig.js";
export * from "./${sdkName}Service.js";
`,
  );

  const operationTargets = pipe(
    manifest.shapes,
    Record.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> => shape.type === "operation",
    ),
    Record.keys,
  );
  const operationShapes = pipe(
    manifest.shapes,
    Record.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> => shape.type === "operation",
    ),
    Struct.pick(...operationTargets),
    Record.filter(Predicate.isNotUndefined),
    Record.mapKeys(getNameFromTarget),
    Record.toEntries,
  ) as Array<[
    string,
    {
      type: "operation";
      errors: Array<{ target: string }>;
    },
  ]>;

  const operationNames = pipe(operationTargets, Array.map(getNameFromTarget));

  const importedErrors = pipe(
    operationShapes,
    Array.map(Tuple.getSecond),
    Array.filter(
      (shape): shape is Extract<Shape, { type: "operation" }> => shape.type === "operation",
    ),
    Array.flatMap(({ errors }) => errors ?? []),
    Array.map(flow(({ target }) => target, getNameFromTarget)),
    Array.dedupe,
    Array.sort(String.Order),
    Array.intersection(exportedErrors),
  );

  await writeFile(
    `./packages/client-${serviceName}/src/${sdkName}Service.ts`,
    `/**
 * @since 1.0.0
 */
import {
  ${sdkName}ServiceException,
  type ${sdkName}Client,
  type ${sdkName}ClientConfig,
  ${
      pipe(
        operationNames,
        Array.map(
          (name) =>
            `${name}Command,
  type ${name}CommandInput,
  type ${name}CommandOutput,`,
        ),
        Array.join("\n  "),
      )
    }
} from "@aws-sdk/client-${originalServiceName}";
import { Data, Effect, Layer, Record } from "effect";
import {
  ${sdkName}ClientInstance,
  ${sdkName}ClientInstanceLayer,
} from "./${sdkName}ClientInstance.js";
import {
  Default${sdkName}ClientConfigLayer,
  makeDefault${sdkName}ClientInstanceConfig,
  ${sdkName}ClientInstanceConfig,
} from "./${sdkName}ClientInstanceConfig.js";
import {
  AllServiceErrors,
  ${
      pipe(
        importedErrors.map(
          String.replace(/(Failure|Exception|Error|ErrorException)$/, ""),
        ),
        Array.map((error) => `${error}Error`),
        Array.join(","),
      )
    },
  SdkError,
  TaggedException,
} from "./Errors.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  ${
      pipe(
        operationNames,
        Array.map((name) => `${name}Command`),
      )
    }
};

interface ${sdkName}Service$ {
  readonly _: unique symbol;

${
      pipe(
        operationShapes,
        Array.map(([operationName, operationShape]) => {
          const errors = pipe(
            operationShape.errors || [],
            Array.map(flow(Struct.get("target"), getNameFromTarget)),
            Array.intersection(importedErrors),
            Array.map(
              String.replace(/(Failure|Exception|Error|ErrorException)$/, ""),
            ),
            Array.map((error) => `${error}Error`),
          );
          return `  /**
   * @see {@link ${operationName}Command}
   */
  ${pipe(operationName, lowerFirst)}(
    args: ${operationName}CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ${operationName}CommandOutput,
    ${pipe(["SdkError", ...errors], Array.join(" | "))}
  >`;
        }),
        Array.join("\n\n"),
      )
    }
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make${sdkName}Service = Effect.gen(function* (_) {
  const client = yield* _(${sdkName}ClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (e instanceof ${sdkName}ServiceException && AllServiceErrors.includes(e.name)) {
            const ServiceException = Data.tagged<
              TaggedException<${sdkName}ServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as ${sdkName}Service$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class ${sdkName}Service extends Effect.Tag("@effect-aws/client-${serviceName}/${sdkName}Service")<
  ${sdkName}Service,
  ${sdkName}Service$
>() {
  static readonly defaultLayer = Layer.effect(this, make${sdkName}Service).pipe(
    Layer.provide(${sdkName}ClientInstanceLayer),
    Layer.provide(Default${sdkName}ClientConfigLayer),
  );
  static readonly layer = (config: ${sdkName}ClientConfig) =>
    Layer.effect(this, make${sdkName}Service).pipe(
      Layer.provide(${sdkName}ClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          ${sdkName}ClientInstanceConfig,
          makeDefault${sdkName}ClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ${sdkName}ClientConfig) => ${sdkName}Client,
  ) =>
    Layer.effect(this, make${sdkName}Service).pipe(
      Layer.provide(
        Layer.effect(
          ${sdkName}ClientInstance,
          Effect.map(makeDefault${sdkName}ClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias ${sdkName}Service
 */
export const ${sdkName} = ${sdkName}Service;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ${sdkName}.baseLayer instead
 */
export const Base${sdkName}ServiceLayer = Layer.effect(
  ${sdkName}Service,
  make${sdkName}Service,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ${sdkName}.layer instead
 */
export const ${sdkName}ServiceLayer = Base${sdkName}ServiceLayer.pipe(
  Layer.provide(${sdkName}ClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ${sdkName}.defaultLayer instead
 */
export const Default${sdkName}ServiceLayer = ${sdkName}Service.defaultLayer;
`,
  );

  await mkdir(`./packages/client-${serviceName}/test`, { recursive: true });
  await writeFile(
    `./packages/client-${serviceName}/test/${sdkName}.test.ts`,
    `import {
  type ${commandToTest}CommandInput,
  ${commandToTest}Command,
  ${sdkName}Client,
  ${sdkName}ServiceException,
} from "@aws-sdk/client-${originalServiceName}";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-${originalServiceName}/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ${sdkName}, SdkError } from "@effect-aws/client-${serviceName}";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(${sdkName}Client);

describe("${sdkName}ClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("base", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(
        ${sdkName}.baseLayer(() => new ${sdkName}Client({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("extended", async () => {
    clientMock.reset().on(${commandToTest}Command).resolves({});

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(
        ${sdkName}.baseLayer(
          (config) => new ${sdkName}Client({ ...config, region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("fail", async () => {
    clientMock.reset().on(${commandToTest}Command).rejects(new Error("test"));

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(${commandToTest}Command)
      .rejects(
        new ${sdkName}ServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    ${
      inputToTest
        ? `const args : ${commandToTest}CommandInput = ${inputToTest};`
        : `const args = {} as unknown as ${commandToTest}CommandInput`
    }

    const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(${sdkName}.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(${commandToTest}Command, 1);
    expect(clientMock).toHaveReceivedCommandWith(${commandToTest}Command, args);
  });
});
`,
  );

  await writeFile(
    `./packages/client-${serviceName}/README.md`,
    `# @effect-aws/client-${serviceName}

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-${serviceName}?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-${serviceName})
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-${serviceName})](https://www.npmjs.com/package/@effect-aws/client-${serviceName})

## Installation

\`\`\`bash
npm install --save @effect-aws/client-${serviceName}
\`\`\`

## Usage

With default ${sdkName}Client instance:

\`\`\`typescript
import { ${sdkName} } from "@effect-aws/client-${serviceName}";

const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

const result = pipe(
  program,
  Effect.provide(${sdkName}.defaultLayer),
  Effect.runPromise,
);
\`\`\`

With custom ${sdkName}Client instance:

\`\`\`typescript
import { ${sdkName} } from "@effect-aws/client-${serviceName}";

const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

const result = await pipe(
  program,
  Effect.provide(
    ${sdkName}.baseLayer(() => new ${sdkName}Client({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
\`\`\`

With custom ${sdkName}Client configuration:

\`\`\`typescript
import { ${sdkName} } from "@effect-aws/client-${serviceName}";

const program = ${sdkName}.${pipe(commandToTest, lowerFirst)}(args);

const result = await pipe(
  program,
  Effect.provide(${sdkName}.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
\`\`\`

or use \`${sdkName}.baseLayer((default) => new ${sdkName}Client({ ...default, region: "eu-central-1" }))\`
`,
  );

  exec(`pnpm --filter @effect-aws/client-${serviceName} run eslint --fix`);
}
