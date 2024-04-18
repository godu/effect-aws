import {
  type CreateGroupCommandInput,
  CreateGroupCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCognitoIdentityProviderServiceLayer,
  DefaultCognitoIdentityProviderClientConfigLayer,
  DefaultCognitoIdentityProviderServiceLayer,
  CognitoIdentityProviderClientInstance,
  CognitoIdentityProviderClientInstanceConfig,
  CognitoIdentityProviderService,
  CognitoIdentityProviderServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(CognitoIdentityProviderClient);

describe("CognitoIdentityProviderClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(CreateGroupCommand).resolves({});

    const args: CreateGroupCommandInput = {
      GroupName: "Admin",
      UserPoolId: "us-west-2_0AbCdeFgH",
    };

    const program = Effect.flatMap(CognitoIdentityProviderService, (service) =>
      service.createGroup(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateGroupCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateGroupCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(CreateGroupCommand).resolves({});

    const args: CreateGroupCommandInput = {
      GroupName: "Admin",
      UserPoolId: "us-west-2_0AbCdeFgH",
    };

    const program = Effect.flatMap(CognitoIdentityProviderService, (service) =>
      service.createGroup(args),
    );

    const CognitoIdentityProviderClientConfigLayer = Layer.succeed(
      CognitoIdentityProviderClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCognitoIdentityProviderServiceLayer =
      CognitoIdentityProviderServiceLayer.pipe(
        Layer.provide(CognitoIdentityProviderClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateGroupCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateGroupCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(CreateGroupCommand).resolves({});

    const args: CreateGroupCommandInput = {
      GroupName: "Admin",
      UserPoolId: "us-west-2_0AbCdeFgH",
    };

    const program = Effect.flatMap(CognitoIdentityProviderService, (service) =>
      service.createGroup(args),
    );

    const CognitoIdentityProviderClientInstanceLayer = Layer.succeed(
      CognitoIdentityProviderClientInstance,
      new CognitoIdentityProviderClient({ region: "eu-central-1" }),
    );
    const CustomCognitoIdentityProviderServiceLayer =
      BaseCognitoIdentityProviderServiceLayer.pipe(
        Layer.provide(CognitoIdentityProviderClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateGroupCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateGroupCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(CreateGroupCommand).resolves({});

    const args: CreateGroupCommandInput = {
      GroupName: "Admin",
      UserPoolId: "us-west-2_0AbCdeFgH",
    };

    const program = Effect.flatMap(CognitoIdentityProviderService, (service) =>
      service.createGroup(args),
    );

    const CognitoIdentityProviderClientInstanceLayer = Layer.effect(
      CognitoIdentityProviderClientInstance,
      Effect.map(
        CognitoIdentityProviderClientInstanceConfig,
        (config) =>
          new CognitoIdentityProviderClient({
            ...config,
            region: "eu-central-1",
          }),
      ),
    );
    const CustomCognitoIdentityProviderServiceLayer =
      BaseCognitoIdentityProviderServiceLayer.pipe(
        Layer.provide(CognitoIdentityProviderClientInstanceLayer),
        Layer.provide(DefaultCognitoIdentityProviderClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(CreateGroupCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateGroupCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(CreateGroupCommand).rejects(new Error("test"));

    const args: CreateGroupCommandInput = {
      GroupName: "Admin",
      UserPoolId: "us-west-2_0AbCdeFgH",
    };

    const program = Effect.flatMap(CognitoIdentityProviderService, (service) =>
      service.createGroup(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCognitoIdentityProviderServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(CreateGroupCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateGroupCommand, args);
  });
});
