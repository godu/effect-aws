import {
  type DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommand,
  CloudWatchLogsClient,
} from "@aws-sdk/client-cloudwatch-logs";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCloudWatchLogsServiceLayer,
  DefaultCloudWatchLogsClientConfigLayer,
  DefaultCloudWatchLogsServiceLayer,
  CloudWatchLogsClientInstance,
  CloudWatchLogsClientInstanceConfig,
  CloudWatchLogsService,
  CloudWatchLogsServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(CloudWatchLogsClient);

describe("CloudWatchLogsClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args: DescribeLogGroupsCommandInput = {
      logGroupNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchLogsService, (service) =>
      service.describeLogGroups(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudWatchLogsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args: DescribeLogGroupsCommandInput = {
      logGroupNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchLogsService, (service) =>
      service.describeLogGroups(args),
    );

    const CloudWatchLogsClientConfigLayer = Layer.succeed(
      CloudWatchLogsClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCloudWatchLogsServiceLayer = CloudWatchLogsServiceLayer.pipe(
      Layer.provide(CloudWatchLogsClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchLogsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args: DescribeLogGroupsCommandInput = {
      logGroupNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchLogsService, (service) =>
      service.describeLogGroups(args),
    );

    const CloudWatchLogsClientInstanceLayer = Layer.succeed(
      CloudWatchLogsClientInstance,
      new CloudWatchLogsClient({ region: "eu-central-1" }),
    );
    const CustomCloudWatchLogsServiceLayer =
      BaseCloudWatchLogsServiceLayer.pipe(
        Layer.provide(CloudWatchLogsClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchLogsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args: DescribeLogGroupsCommandInput = {
      logGroupNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchLogsService, (service) =>
      service.describeLogGroups(args),
    );

    const CloudWatchLogsClientInstanceLayer = Layer.effect(
      CloudWatchLogsClientInstance,
      Effect.map(
        CloudWatchLogsClientInstanceConfig,
        (config) =>
          new CloudWatchLogsClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCloudWatchLogsServiceLayer =
      BaseCloudWatchLogsServiceLayer.pipe(
        Layer.provide(CloudWatchLogsClientInstanceLayer),
        Layer.provide(DefaultCloudWatchLogsClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchLogsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).rejects(new Error("test"));

    const args: DescribeLogGroupsCommandInput = {
      logGroupNamePrefix: "production-",
    };

    const program = Effect.flatMap(CloudWatchLogsService, (service) =>
      service.describeLogGroups(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudWatchLogsServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });
});
