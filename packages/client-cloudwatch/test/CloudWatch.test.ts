import {
  type ListDashboardsCommandInput,
  ListDashboardsCommand,
  CloudWatchClient,
} from "@aws-sdk/client-cloudwatch";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCloudWatchServiceLayer,
  DefaultCloudWatchClientConfigLayer,
  DefaultCloudWatchServiceLayer,
  CloudWatchClientInstance,
  CloudWatchClientInstanceConfig,
  CloudWatchService,
  CloudWatchServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(CloudWatchClient);

describe("CloudWatchClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListDashboardsCommand).resolves({});

    const args: ListDashboardsCommandInput = {
      DashboardNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchService, (service) =>
      service.listDashboards(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudWatchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDashboardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDashboardsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListDashboardsCommand).resolves({});

    const args: ListDashboardsCommandInput = {
      DashboardNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchService, (service) =>
      service.listDashboards(args),
    );

    const CloudWatchClientConfigLayer = Layer.succeed(
      CloudWatchClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCloudWatchServiceLayer = CloudWatchServiceLayer.pipe(
      Layer.provide(CloudWatchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDashboardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDashboardsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListDashboardsCommand).resolves({});

    const args: ListDashboardsCommandInput = {
      DashboardNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchService, (service) =>
      service.listDashboards(args),
    );

    const CloudWatchClientInstanceLayer = Layer.succeed(
      CloudWatchClientInstance,
      new CloudWatchClient({ region: "eu-central-1" }),
    );
    const CustomCloudWatchServiceLayer = BaseCloudWatchServiceLayer.pipe(
      Layer.provide(CloudWatchClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDashboardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDashboardsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListDashboardsCommand).resolves({});

    const args: ListDashboardsCommandInput = {
      DashboardNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchService, (service) =>
      service.listDashboards(args),
    );

    const CloudWatchClientInstanceLayer = Layer.effect(
      CloudWatchClientInstance,
      Effect.map(
        CloudWatchClientInstanceConfig,
        (config) => new CloudWatchClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCloudWatchServiceLayer = BaseCloudWatchServiceLayer.pipe(
      Layer.provide(CloudWatchClientInstanceLayer),
      Layer.provide(DefaultCloudWatchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDashboardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDashboardsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListDashboardsCommand).rejects(new Error("test"));

    const args: ListDashboardsCommandInput = {
      DashboardNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchService, (service) =>
      service.listDashboards(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudWatchServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListDashboardsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDashboardsCommand, args);
  });
});
