import {
  type LookupEventsCommandInput,
  LookupEventsCommand,
  CloudTrailClient,
} from "@aws-sdk/client-cloudtrail";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCloudTrailServiceLayer,
  DefaultCloudTrailClientConfigLayer,
  DefaultCloudTrailServiceLayer,
  CloudTrailClientInstance,
  CloudTrailClientInstanceConfig,
  CloudTrailService,
  CloudTrailServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(CloudTrailClient);

describe("CloudTrailClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(LookupEventsCommand).resolves({});

    const args: LookupEventsCommandInput = {
      LookupAttributes: [
        { AttributeKey: "EventName", AttributeValue: "ConsoleLogin" },
      ],
    };

    const program = Effect.flatMap(CloudTrailService, (service) =>
      service.lookupEvents(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(LookupEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(LookupEventsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(LookupEventsCommand).resolves({});

    const args: LookupEventsCommandInput = {
      LookupAttributes: [
        { AttributeKey: "EventName", AttributeValue: "ConsoleLogin" },
      ],
    };

    const program = Effect.flatMap(CloudTrailService, (service) =>
      service.lookupEvents(args),
    );

    const CloudTrailClientConfigLayer = Layer.succeed(
      CloudTrailClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCloudTrailServiceLayer = CloudTrailServiceLayer.pipe(
      Layer.provide(CloudTrailClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(LookupEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(LookupEventsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(LookupEventsCommand).resolves({});

    const args: LookupEventsCommandInput = {
      LookupAttributes: [
        { AttributeKey: "EventName", AttributeValue: "ConsoleLogin" },
      ],
    };

    const program = Effect.flatMap(CloudTrailService, (service) =>
      service.lookupEvents(args),
    );

    const CloudTrailClientInstanceLayer = Layer.succeed(
      CloudTrailClientInstance,
      new CloudTrailClient({ region: "eu-central-1" }),
    );
    const CustomCloudTrailServiceLayer = BaseCloudTrailServiceLayer.pipe(
      Layer.provide(CloudTrailClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(LookupEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(LookupEventsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(LookupEventsCommand).resolves({});

    const args: LookupEventsCommandInput = {
      LookupAttributes: [
        { AttributeKey: "EventName", AttributeValue: "ConsoleLogin" },
      ],
    };

    const program = Effect.flatMap(CloudTrailService, (service) =>
      service.lookupEvents(args),
    );

    const CloudTrailClientInstanceLayer = Layer.effect(
      CloudTrailClientInstance,
      Effect.map(
        CloudTrailClientInstanceConfig,
        (config) => new CloudTrailClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCloudTrailServiceLayer = BaseCloudTrailServiceLayer.pipe(
      Layer.provide(CloudTrailClientInstanceLayer),
      Layer.provide(DefaultCloudTrailClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(LookupEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(LookupEventsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(LookupEventsCommand).rejects(new Error("test"));

    const args: LookupEventsCommandInput = {
      LookupAttributes: [
        { AttributeKey: "EventName", AttributeValue: "ConsoleLogin" },
      ],
    };

    const program = Effect.flatMap(CloudTrailService, (service) =>
      service.lookupEvents(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudTrailServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(LookupEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(LookupEventsCommand, args);
  });
});
