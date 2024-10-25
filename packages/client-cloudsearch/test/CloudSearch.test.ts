import {
  type CreateDomainCommandInput,
  CreateDomainCommand,
  CloudSearchClient,
} from "@aws-sdk/client-cloudsearch";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCloudSearchServiceLayer,
  DefaultCloudSearchClientConfigLayer,
  DefaultCloudSearchServiceLayer,
  CloudSearchClientInstance,
  CloudSearchClientInstanceConfig,
  CloudSearchService,
  CloudSearchServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(CloudSearchClient);

describe("CloudSearchClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(CreateDomainCommand).resolves({});

    const args: CreateDomainCommandInput = { DomainName: "my-search" };

    const program = Effect.flatMap(CloudSearchService, (service) =>
      service.createDomain(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateDomainCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateDomainCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(CreateDomainCommand).resolves({});

    const args: CreateDomainCommandInput = { DomainName: "my-search" };

    const program = Effect.flatMap(CloudSearchService, (service) =>
      service.createDomain(args),
    );

    const CloudSearchClientConfigLayer = Layer.succeed(
      CloudSearchClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCloudSearchServiceLayer = CloudSearchServiceLayer.pipe(
      Layer.provide(CloudSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateDomainCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateDomainCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(CreateDomainCommand).resolves({});

    const args: CreateDomainCommandInput = { DomainName: "my-search" };

    const program = Effect.flatMap(CloudSearchService, (service) =>
      service.createDomain(args),
    );

    const CloudSearchClientInstanceLayer = Layer.succeed(
      CloudSearchClientInstance,
      new CloudSearchClient({ region: "eu-central-1" }),
    );
    const CustomCloudSearchServiceLayer = BaseCloudSearchServiceLayer.pipe(
      Layer.provide(CloudSearchClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateDomainCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateDomainCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(CreateDomainCommand).resolves({});

    const args: CreateDomainCommandInput = { DomainName: "my-search" };

    const program = Effect.flatMap(CloudSearchService, (service) =>
      service.createDomain(args),
    );

    const CloudSearchClientInstanceLayer = Layer.effect(
      CloudSearchClientInstance,
      Effect.map(
        CloudSearchClientInstanceConfig,
        (config) =>
          new CloudSearchClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCloudSearchServiceLayer = BaseCloudSearchServiceLayer.pipe(
      Layer.provide(CloudSearchClientInstanceLayer),
      Layer.provide(DefaultCloudSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateDomainCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateDomainCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(CreateDomainCommand).rejects(new Error("test"));

    const args: CreateDomainCommandInput = { DomainName: "my-search" };

    const program = Effect.flatMap(CloudSearchService, (service) =>
      service.createDomain(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudSearchServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(CreateDomainCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateDomainCommand, args);
  });
});
