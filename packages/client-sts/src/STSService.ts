/**
 * @since 1.0.0
 */
import {
  STSServiceException as SdkSTSServiceException,
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
  type AssumeRoleRequest,
  type AssumeRoleResponse,
  type AssumeRoleWithSAMLRequest,
  type AssumeRoleWithSAMLResponse,
  type AssumeRoleWithWebIdentityRequest,
  type AssumeRoleWithWebIdentityResponse,
  type DecodeAuthorizationMessageRequest,
  type DecodeAuthorizationMessageResponse,
  type GetAccessKeyInfoRequest,
  type GetAccessKeyInfoResponse,
  type GetCallerIdentityRequest,
  type GetCallerIdentityResponse,
  type GetFederationTokenRequest,
  type GetFederationTokenResponse,
  type GetSessionTokenRequest,
  type GetSessionTokenResponse,
} from "@aws-sdk/client-sts";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type ExpiredTokenException,
  type MalformedPolicyDocumentException,
  type PackedPolicyTooLargeException,
  type RegionDisabledException,
  type IDPRejectedClaimException,
  type InvalidIdentityTokenException,
  type IDPCommunicationErrorException,
  type InvalidAuthorizationMessageException,
  type TaggedException,
  SdkError,
} from "./Errors";
import { STSClientInstance, STSClientInstanceLayer } from "./STSClientInstance";
import { DefaultSTSClientConfigLayer } from "./STSClientInstanceConfig";

const commands = {
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface STSService {
  readonly _: unique symbol;

  /**
   * @see {@link AssumeRoleCommand}
   */
  assumeRole(
    args: AssumeRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AssumeRoleResponse,
    | SdkError
    | ExpiredTokenException
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
  >;

  /**
   * @see {@link AssumeRoleWithSAMLCommand}
   */
  assumeRoleWithSAML(
    args: AssumeRoleWithSAMLRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AssumeRoleWithSAMLResponse,
    | SdkError
    | ExpiredTokenException
    | IDPRejectedClaimException
    | InvalidIdentityTokenException
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
  >;

  /**
   * @see {@link AssumeRoleWithWebIdentityCommand}
   */
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AssumeRoleWithWebIdentityResponse,
    | SdkError
    | ExpiredTokenException
    | IDPCommunicationErrorException
    | IDPRejectedClaimException
    | InvalidIdentityTokenException
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
  >;

  /**
   * @see {@link DecodeAuthorizationMessageCommand}
   */
  decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DecodeAuthorizationMessageResponse,
    SdkError | InvalidAuthorizationMessageException
  >;

  /**
   * @see {@link GetAccessKeyInfoCommand}
   */
  getAccessKeyInfo(
    args: GetAccessKeyInfoRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetAccessKeyInfoResponse, SdkError>;

  /**
   * @see {@link GetCallerIdentityCommand}
   */
  getCallerIdentity(
    args: GetCallerIdentityRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetCallerIdentityResponse, SdkError>;

  /**
   * @see {@link GetFederationTokenCommand}
   */
  getFederationToken(
    args: GetFederationTokenRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetFederationTokenResponse,
    | SdkError
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
  >;

  /**
   * @see {@link GetSessionTokenCommand}
   */
  getSessionToken(
    args: GetSessionTokenRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetSessionTokenResponse, SdkError | RegionDisabledException>;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const STSService = Context.GenericTag<STSService>(
  "@effect-aws/client-sts/STSService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSTSService = Effect.gen(function* (_) {
  const client = yield* _(STSClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkSTSServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkSTSServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as STSService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseSTSServiceLayer = Layer.effect(STSService, makeSTSService);

/**
 * @since 1.0.0
 * @category layers
 */
export const STSServiceLayer = BaseSTSServiceLayer.pipe(
  Layer.provide(STSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSTSServiceLayer = STSServiceLayer.pipe(
  Layer.provide(DefaultSTSClientConfigLayer),
);
