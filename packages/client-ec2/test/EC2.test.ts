import {
  type DescribeInstancesCommandInput,
  DescribeInstancesCommand,
  EC2Client,
} from "@aws-sdk/client-ec2";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseEC2ServiceLayer,
  DefaultEC2ClientConfigLayer,
  DefaultEC2ServiceLayer,
  EC2ClientInstance,
  EC2ClientInstanceConfig,
  EC2Service,
  EC2ServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(EC2Client);

describe("EC2ClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(DescribeInstancesCommand).resolves({});

    const args: DescribeInstancesCommandInput = {
      InstanceIds: ["i-1234567890abcdef0"],
    };

    const program = Effect.flatMap(EC2Service, (service) =>
      service.describeInstances(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultEC2ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeInstancesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeInstancesCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeInstancesCommand).resolves({});

    const args: DescribeInstancesCommandInput = {
      InstanceIds: ["i-1234567890abcdef0"],
    };

    const program = Effect.flatMap(EC2Service, (service) =>
      service.describeInstances(args),
    );

    const EC2ClientConfigLayer = Layer.succeed(EC2ClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomEC2ServiceLayer = EC2ServiceLayer.pipe(
      Layer.provide(EC2ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomEC2ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeInstancesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeInstancesCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(DescribeInstancesCommand).resolves({});

    const args: DescribeInstancesCommandInput = {
      InstanceIds: ["i-1234567890abcdef0"],
    };

    const program = Effect.flatMap(EC2Service, (service) =>
      service.describeInstances(args),
    );

    const EC2ClientInstanceLayer = Layer.succeed(
      EC2ClientInstance,
      new EC2Client({ region: "eu-central-1" }),
    );
    const CustomEC2ServiceLayer = BaseEC2ServiceLayer.pipe(
      Layer.provide(EC2ClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomEC2ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeInstancesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeInstancesCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeInstancesCommand).resolves({});

    const args: DescribeInstancesCommandInput = {
      InstanceIds: ["i-1234567890abcdef0"],
    };

    const program = Effect.flatMap(EC2Service, (service) =>
      service.describeInstances(args),
    );

    const EC2ClientInstanceLayer = Layer.effect(
      EC2ClientInstance,
      Effect.map(
        EC2ClientInstanceConfig,
        (config) => new EC2Client({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomEC2ServiceLayer = BaseEC2ServiceLayer.pipe(
      Layer.provide(EC2ClientInstanceLayer),
      Layer.provide(DefaultEC2ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomEC2ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeInstancesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeInstancesCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeInstancesCommand).rejects(new Error("test"));

    const args: DescribeInstancesCommandInput = {
      InstanceIds: ["i-1234567890abcdef0"],
    };

    const program = Effect.flatMap(EC2Service, (service) =>
      service.describeInstances(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultEC2ServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeInstancesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeInstancesCommand,
      args,
    );
  });
});
