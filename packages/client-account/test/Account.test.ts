import {
  type ListRegionsCommandInput,
  ListRegionsCommand,
  AccountClient,
} from "@aws-sdk/client-account";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseAccountServiceLayer,
  DefaultAccountClientConfigLayer,
  DefaultAccountServiceLayer,
  AccountClientInstance,
  AccountClientInstanceConfig,
  AccountService,
  AccountServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(AccountClient);

describe("AccountClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args : ListRegionsCommandInput = {"AccountId": "000000000000"};

    const program = Effect.flatMap(AccountService, (service) => service.listRegions(args));

    const result = await pipe(
      program,
      Effect.provide(DefaultAccountServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args : ListRegionsCommandInput = {"AccountId": "000000000000"};

    const program = Effect.flatMap(AccountService, (service) => service.listRegions(args));

    const AccountClientConfigLayer = Layer.succeed(AccountClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomAccountServiceLayer = AccountServiceLayer.pipe(
      Layer.provide(AccountClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomAccountServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args : ListRegionsCommandInput = {"AccountId": "000000000000"};

    const program = Effect.flatMap(AccountService, (service) => service.listRegions(args));

    const AccountClientInstanceLayer = Layer.succeed(
      AccountClientInstance,
      new AccountClient({ region: "eu-central-1" }),
    );
    const CustomAccountServiceLayer = BaseAccountServiceLayer.pipe(
      Layer.provide(AccountClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomAccountServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args : ListRegionsCommandInput = {"AccountId": "000000000000"};

    const program = Effect.flatMap(AccountService, (service) => service.listRegions(args));

    const AccountClientInstanceLayer = Layer.effect(
      AccountClientInstance,
      Effect.map(
        AccountClientInstanceConfig,
        (config) => new AccountClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomAccountServiceLayer = BaseAccountServiceLayer.pipe(
      Layer.provide(AccountClientInstanceLayer),
      Layer.provide(DefaultAccountClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomAccountServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListRegionsCommand).rejects(new Error("test"));

    const args : ListRegionsCommandInput = {"AccountId": "000000000000"};

    const program = Effect.flatMap(AccountService, (service) => service.listRegions(args));

    const result = await pipe(
      program,
      Effect.provide(DefaultAccountServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });
});
