/**
 * @since 1.0.0
 */
import {
  AccountServiceException as SdkAccountServiceException,
  DeleteAlternateContactCommand,
  DisableRegionCommand,
  EnableRegionCommand,
  GetAlternateContactCommand,
  GetContactInformationCommand,
  GetRegionOptStatusCommand,
  ListRegionsCommand,
  PutAlternateContactCommand,
  PutContactInformationCommand,
  type DeleteAlternateContactRequest,
  type DisableRegionRequest,
  type EnableRegionRequest,
  type GetAlternateContactRequest,
  type GetAlternateContactResponse,
  type GetContactInformationRequest,
  type GetContactInformationResponse,
  type GetRegionOptStatusRequest,
  type GetRegionOptStatusResponse,
  type ListRegionsRequest,
  type ListRegionsResponse,
  type PutAlternateContactRequest,
  type PutContactInformationRequest,
} from "@aws-sdk/client-account";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  AccountClientInstance,
  AccountClientInstanceLayer,
} from "./AccountClientInstance";
import { DefaultAccountClientConfigLayer } from "./AccountClientInstanceConfig";
import {
  type AccessDeniedException,
 type InternalServerException,
 type ResourceNotFoundException,
 type TooManyRequestsException,
 type ValidationException,
 type ConflictException,
 type TaggedException,
  SdkError,
} from "./Errors";

const commands = {
  DeleteAlternateContactCommand,
 DisableRegionCommand,
 EnableRegionCommand,
 GetAlternateContactCommand,
 GetContactInformationCommand,
 GetRegionOptStatusCommand,
 ListRegionsCommand,
 PutAlternateContactCommand,
 PutContactInformationCommand
};

/**
 * @since 1.0.0
 * @category models
 */
export interface AccountService {
  readonly _: unique symbol;

  /**
   * @see {@link DeleteAlternateContactCommand}
   */
  deleteAlternateContact(
    args: DeleteAlternateContactRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  void,
    | SdkError
| AccessDeniedException
| InternalServerException
| ResourceNotFoundException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link DisableRegionCommand}
   */
  disableRegion(
    args: DisableRegionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  void,
    | SdkError
| AccessDeniedException
| ConflictException
| InternalServerException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link EnableRegionCommand}
   */
  enableRegion(
    args: EnableRegionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  void,
    | SdkError
| AccessDeniedException
| ConflictException
| InternalServerException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link GetAlternateContactCommand}
   */
  getAlternateContact(
    args: GetAlternateContactRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  GetAlternateContactResponse,
    | SdkError
| AccessDeniedException
| InternalServerException
| ResourceNotFoundException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link GetContactInformationCommand}
   */
  getContactInformation(
    args: GetContactInformationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  GetContactInformationResponse,
    | SdkError
| AccessDeniedException
| InternalServerException
| ResourceNotFoundException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link GetRegionOptStatusCommand}
   */
  getRegionOptStatus(
    args: GetRegionOptStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  GetRegionOptStatusResponse,
    | SdkError
| AccessDeniedException
| InternalServerException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link ListRegionsCommand}
   */
  listRegions(
    args: ListRegionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  ListRegionsResponse,
    | SdkError
| AccessDeniedException
| InternalServerException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link PutAlternateContactCommand}
   */
  putAlternateContact(
    args: PutAlternateContactRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  void,
    | SdkError
| AccessDeniedException
| InternalServerException
| TooManyRequestsException
| ValidationException
  >

  /**
   * @see {@link PutContactInformationCommand}
   */
  putContactInformation(
    args: PutContactInformationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
  void,
    | SdkError
| AccessDeniedException
| InternalServerException
| TooManyRequestsException
| ValidationException
  >
}

/**
 * @since 1.0.0
 * @category tags
 */
export const AccountService = Context.GenericTag<AccountService>(
  "@effect-aws/client-account/AccountService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeAccountService = Effect.gen(function* (_) {
  const client = yield* _(AccountClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (input: any, options: Omit<__HttpHandlerOptions, 'abortSignal'> = {}) =>
      Effect.tryPromise({
        try: (abortSignal) => client.send(new CommandCtor(input), {...options, abortSignal}),
        catch: (e) => {
          if (e instanceof SdkAccountServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkAccountServiceException>
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
  }, {}) as AccountService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseAccountServiceLayer = Layer.effect(
  AccountService,
  makeAccountService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const AccountServiceLayer = BaseAccountServiceLayer.pipe(
  Layer.provide(AccountClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultAccountServiceLayer = AccountServiceLayer.pipe(
  Layer.provide(DefaultAccountClientConfigLayer),
);
