import {
  type ListShardsCommandInput,
  ListShardsCommand,
  KinesisClient,
} from "@aws-sdk/client-kinesis";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseKinesisServiceLayer,
  DefaultKinesisClientConfigLayer,
  DefaultKinesisServiceLayer,
  KinesisClientInstance,
  KinesisClientInstanceConfig,
  KinesisService,
  KinesisServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(KinesisClient);

describe("KinesisClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListShardsCommand).resolves({});

    const args: ListShardsCommandInput = { StreamName: "my-stream" };

    const program = Effect.flatMap(KinesisService, (service) =>
      service.listShards(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultKinesisServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListShardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListShardsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListShardsCommand).resolves({});

    const args: ListShardsCommandInput = { StreamName: "my-stream" };

    const program = Effect.flatMap(KinesisService, (service) =>
      service.listShards(args),
    );

    const KinesisClientConfigLayer = Layer.succeed(
      KinesisClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomKinesisServiceLayer = KinesisServiceLayer.pipe(
      Layer.provide(KinesisClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomKinesisServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListShardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListShardsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListShardsCommand).resolves({});

    const args: ListShardsCommandInput = { StreamName: "my-stream" };

    const program = Effect.flatMap(KinesisService, (service) =>
      service.listShards(args),
    );

    const KinesisClientInstanceLayer = Layer.succeed(
      KinesisClientInstance,
      new KinesisClient({ region: "eu-central-1" }),
    );
    const CustomKinesisServiceLayer = BaseKinesisServiceLayer.pipe(
      Layer.provide(KinesisClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomKinesisServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListShardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListShardsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListShardsCommand).resolves({});

    const args: ListShardsCommandInput = { StreamName: "my-stream" };

    const program = Effect.flatMap(KinesisService, (service) =>
      service.listShards(args),
    );

    const KinesisClientInstanceLayer = Layer.effect(
      KinesisClientInstance,
      Effect.map(
        KinesisClientInstanceConfig,
        (config) => new KinesisClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomKinesisServiceLayer = BaseKinesisServiceLayer.pipe(
      Layer.provide(KinesisClientInstanceLayer),
      Layer.provide(DefaultKinesisClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomKinesisServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListShardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListShardsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListShardsCommand).rejects(new Error("test"));

    const args: ListShardsCommandInput = { StreamName: "my-stream" };

    const program = Effect.flatMap(KinesisService, (service) =>
      service.listShards(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultKinesisServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListShardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListShardsCommand, args);
  });
});
