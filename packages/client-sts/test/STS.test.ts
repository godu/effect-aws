import {
  type AssumeRoleCommandInput,
  AssumeRoleCommand,
  STSClient,
} from "@aws-sdk/client-sts";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSTSServiceLayer,
  DefaultSTSClientConfigLayer,
  DefaultSTSServiceLayer,
  STSClientInstance,
  STSClientInstanceConfig,
  STSService,
  STSServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(STSClient);

describe("STSClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(AssumeRoleCommand).resolves({});

    const args: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:iam::000000000000:role/TestRole",
      RoleSessionName: "test",
    };

    const program = Effect.flatMap(STSService, (service) =>
      service.assumeRole(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AssumeRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(AssumeRoleCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(AssumeRoleCommand).resolves({});

    const args: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:iam::000000000000:role/TestRole",
      RoleSessionName: "test",
    };

    const program = Effect.flatMap(STSService, (service) =>
      service.assumeRole(args),
    );

    const STSClientConfigLayer = Layer.succeed(STSClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomSTSServiceLayer = STSServiceLayer.pipe(
      Layer.provide(STSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AssumeRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(AssumeRoleCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(AssumeRoleCommand).resolves({});

    const args: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:iam::000000000000:role/TestRole",
      RoleSessionName: "test",
    };

    const program = Effect.flatMap(STSService, (service) =>
      service.assumeRole(args),
    );

    const STSClientInstanceLayer = Layer.succeed(
      STSClientInstance,
      new STSClient({ region: "eu-central-1" }),
    );
    const CustomSTSServiceLayer = BaseSTSServiceLayer.pipe(
      Layer.provide(STSClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AssumeRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(AssumeRoleCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(AssumeRoleCommand).resolves({});

    const args: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:iam::000000000000:role/TestRole",
      RoleSessionName: "test",
    };

    const program = Effect.flatMap(STSService, (service) =>
      service.assumeRole(args),
    );

    const STSClientInstanceLayer = Layer.effect(
      STSClientInstance,
      Effect.map(
        STSClientInstanceConfig,
        (config) => new STSClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSTSServiceLayer = BaseSTSServiceLayer.pipe(
      Layer.provide(STSClientInstanceLayer),
      Layer.provide(DefaultSTSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(AssumeRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(AssumeRoleCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(AssumeRoleCommand).rejects(new Error("test"));

    const args: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:iam::000000000000:role/TestRole",
      RoleSessionName: "test",
    };

    const program = Effect.flatMap(STSService, (service) =>
      service.assumeRole(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSTSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(AssumeRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(AssumeRoleCommand, args);
  });
});
