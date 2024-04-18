import {
  type ListDomainNamesCommandInput,
  ListDomainNamesCommand,
  OpenSearchClient,
} from "@aws-sdk/client-opensearch";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseOpenSearchServiceLayer,
  DefaultOpenSearchClientConfigLayer,
  DefaultOpenSearchServiceLayer,
  OpenSearchClientInstance,
  OpenSearchClientInstanceConfig,
  OpenSearchService,
  OpenSearchServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(OpenSearchClient);

describe("OpenSearchClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListDomainNamesCommand).resolves({});

    const args: ListDomainNamesCommandInput = { EngineType: "OpenSearch" };

    const program = Effect.flatMap(OpenSearchService, (service) =>
      service.listDomainNames(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDomainNamesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDomainNamesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListDomainNamesCommand).resolves({});

    const args: ListDomainNamesCommandInput = { EngineType: "OpenSearch" };

    const program = Effect.flatMap(OpenSearchService, (service) =>
      service.listDomainNames(args),
    );

    const OpenSearchClientConfigLayer = Layer.succeed(
      OpenSearchClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomOpenSearchServiceLayer = OpenSearchServiceLayer.pipe(
      Layer.provide(OpenSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDomainNamesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDomainNamesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListDomainNamesCommand).resolves({});

    const args: ListDomainNamesCommandInput = { EngineType: "OpenSearch" };

    const program = Effect.flatMap(OpenSearchService, (service) =>
      service.listDomainNames(args),
    );

    const OpenSearchClientInstanceLayer = Layer.succeed(
      OpenSearchClientInstance,
      new OpenSearchClient({ region: "eu-central-1" }),
    );
    const CustomOpenSearchServiceLayer = BaseOpenSearchServiceLayer.pipe(
      Layer.provide(OpenSearchClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDomainNamesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDomainNamesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListDomainNamesCommand).resolves({});

    const args: ListDomainNamesCommandInput = { EngineType: "OpenSearch" };

    const program = Effect.flatMap(OpenSearchService, (service) =>
      service.listDomainNames(args),
    );

    const OpenSearchClientInstanceLayer = Layer.effect(
      OpenSearchClientInstance,
      Effect.map(
        OpenSearchClientInstanceConfig,
        (config) => new OpenSearchClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomOpenSearchServiceLayer = BaseOpenSearchServiceLayer.pipe(
      Layer.provide(OpenSearchClientInstanceLayer),
      Layer.provide(DefaultOpenSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListDomainNamesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDomainNamesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListDomainNamesCommand).rejects(new Error("test"));

    const args: ListDomainNamesCommandInput = { EngineType: "OpenSearch" };

    const program = Effect.flatMap(OpenSearchService, (service) =>
      service.listDomainNames(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListDomainNamesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDomainNamesCommand, args);
  });
});
