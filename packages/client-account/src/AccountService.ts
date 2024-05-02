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
  AccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-account";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import type { CommandImpl } from "@smithy/smithy-client";
import { Context, Data, Effect, Layer } from "effect";
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

export interface DeleteAlternateContactService {
  readonly _: unique symbol;
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
  >;
}

export interface DisableRegionService {
  readonly _: unique symbol;
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
  >;
}

export interface EnableRegionService {
  readonly _: unique symbol;
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
  >;
}

export interface GetAlternateContactService {
  readonly _: unique symbol;
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
  >;
}

export interface GetContactInformationService {
  readonly _: unique symbol;
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
  >;
}

export interface GetRegionOptStatusService {
  readonly _: unique symbol;
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
  >;
}
export interface ListRegionsService {
  readonly _: unique symbol;
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
  >;
}
export interface PutAlternateContactService {
  readonly _: unique symbol;
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
  >;
}
export interface PutContactInformationService {
  readonly _: unique symbol;
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
  >;
}
export const DeleteAlternateContactService =
  Context.GenericTag<DeleteAlternateContactService>(
    "@effect-aws/client-account/DeleteAlternateContactService",
  );
export const DisableRegionService = Context.GenericTag<DisableRegionService>(
  "@effect-aws/client-account/DisableRegionService",
);
export const EnableRegionService = Context.GenericTag<EnableRegionService>(
  "@effect-aws/client-account/EnableRegionService",
);
export const GetAlternateContactService =
  Context.GenericTag<GetAlternateContactService>(
    "@effect-aws/client-account/GetAlternateContactService",
  );
export const GetContactInformationService =
  Context.GenericTag<GetContactInformationService>(
    "@effect-aws/client-account/GetContactInformationService",
  );
export const GetRegionOptStatusService =
  Context.GenericTag<GetRegionOptStatusService>(
    "@effect-aws/client-account/GetRegionOptStatusService",
  );
export const ListRegionsService = Context.GenericTag<ListRegionsService>(
  "@effect-aws/client-account/ListRegionsService",
);
export const PutAlternateContactService =
  Context.GenericTag<PutAlternateContactService>(
    "@effect-aws/client-account/PutAlternateContactService",
  );
export const PutContactInformationService =
  Context.GenericTag<PutContactInformationService>(
    "@effect-aws/client-account/PutContactInformationService",
  );

/**
 * @since 1.0.0
 * @category constructors
 */
const makeService = <
  Input extends ServiceInputTypes,
  Output extends ServiceOutputTypes,
  CommandType extends CommandImpl<
    Input,
    Output,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >,
>(
  Command: new (input: Input) => CommandType,
) =>
  Effect.gen(function* (_) {
    const client = yield* _(AccountClientInstance);

    return (input: Input, options?: __HttpHandlerOptions) =>
      Effect.tryPromise({
        try: () => client.send(new Command(input), options ?? {}),
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
  });

export const BaseDeleteAlternateContactServiceLayer = Layer.effect(
  DeleteAlternateContactService,
  makeService(DeleteAlternateContactCommand).pipe(
    Effect.map(
      (deleteAlternateContact) =>
        ({
          deleteAlternateContact,
        }) as unknown as DeleteAlternateContactService,
    ),
  ),
);
export const BaseDisableRegionServiceLayer = Layer.effect(
  DisableRegionService,
  makeService(DisableRegionCommand).pipe(
    Effect.map(
      (disableRegion) =>
        ({
          disableRegion,
        }) as unknown as DisableRegionService,
    ),
  ),
);
export const BaseEnableRegionServiceLayer = Layer.effect(
  EnableRegionService,
  makeService(EnableRegionCommand).pipe(
    Effect.map(
      (enableRegion) =>
        ({
          enableRegion,
        }) as unknown as EnableRegionService,
    ),
  ),
);
export const BaseGetAlternateContactServiceLayer = Layer.effect(
  GetAlternateContactService,
  makeService(GetAlternateContactCommand).pipe(
    Effect.map(
      (getAlternateContact) =>
        ({
          getAlternateContact,
        }) as unknown as GetAlternateContactService,
    ),
  ),
);
export const BaseGetContactInformationServiceLayer = Layer.effect(
  GetContactInformationService,
  makeService(GetContactInformationCommand).pipe(
    Effect.map(
      (getContactInformation) =>
        ({
          getContactInformation,
        }) as unknown as GetContactInformationService,
    ),
  ),
);
export const BaseGetRegionOptStatusServiceLayer = Layer.effect(
  GetRegionOptStatusService,
  makeService(GetRegionOptStatusCommand).pipe(
    Effect.map(
      (getRegionOptStatus) =>
        ({
          getRegionOptStatus,
        }) as unknown as GetRegionOptStatusService,
    ),
  ),
);
export const BaseListRegionsServiceLayer = Layer.effect(
  ListRegionsService,
  makeService(ListRegionsCommand).pipe(
    Effect.map(
      (listRegions) =>
        ({
          listRegions,
        }) as unknown as ListRegionsService,
    ),
  ),
);
export const BasePutAlternateContactServiceLayer = Layer.effect(
  PutAlternateContactService,
  makeService(PutAlternateContactCommand).pipe(
    Effect.map(
      (putAlternateContact) =>
        ({
          putAlternateContact,
        }) as unknown as PutAlternateContactService,
    ),
  ),
);
export const BasePutContactInformationServiceLayer = Layer.effect(
  PutContactInformationService,
  makeService(PutContactInformationCommand).pipe(
    Effect.map(
      (putContactInformation) =>
        ({
          putContactInformation,
        }) as unknown as PutContactInformationService,
    ),
  ),
);

/**
 * @since 1.0.0
 * @category layers
 */
// export const BaseAccountServiceLayer = Layer.effect(
//   AccountService,
//   makeAccountService,
// );

/**
 * @since 1.0.0
 * @category layers
 */

export const DeleteAlternateContactServiceLayer =
  BaseDeleteAlternateContactServiceLayer.pipe(
    Layer.provide(AccountClientInstanceLayer),
  );
export const DisableRegionServiceLayer = BaseDisableRegionServiceLayer.pipe(
  Layer.provide(AccountClientInstanceLayer),
);
export const EnableRegionServiceLayer = BaseEnableRegionServiceLayer.pipe(
  Layer.provide(AccountClientInstanceLayer),
);
export const GetAlternateContactServiceLayer =
  BaseGetAlternateContactServiceLayer.pipe(
    Layer.provide(AccountClientInstanceLayer),
  );
export const GetContactInformationServiceLayer =
  BaseGetContactInformationServiceLayer.pipe(
    Layer.provide(AccountClientInstanceLayer),
  );
export const GetRegionOptStatusServiceLayer =
  BaseGetRegionOptStatusServiceLayer.pipe(
    Layer.provide(AccountClientInstanceLayer),
  );
export const ListRegionsServiceLayer = BaseListRegionsServiceLayer.pipe(
  Layer.provide(AccountClientInstanceLayer),
);
export const PutAlternateContactServiceLayer =
  BasePutAlternateContactServiceLayer.pipe(
    Layer.provide(AccountClientInstanceLayer),
  );
export const PutContactInformationServiceLayer =
  BasePutContactInformationServiceLayer.pipe(
    Layer.provide(AccountClientInstanceLayer),
  );
export const AccountServiceLayer = Layer.mergeAll(
  DeleteAlternateContactServiceLayer,
  DisableRegionServiceLayer,
  EnableRegionServiceLayer,
  GetAlternateContactServiceLayer,
  GetContactInformationServiceLayer,
  GetRegionOptStatusServiceLayer,
  ListRegionsServiceLayer,
  PutAlternateContactServiceLayer,
  PutContactInformationServiceLayer,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDeleteAlternateContactServiceLayer =
  DeleteAlternateContactServiceLayer.pipe(
    Layer.provide(DefaultAccountClientConfigLayer),
  );
export const DefaultDisableRegionServiceLayer = DisableRegionServiceLayer.pipe(
  Layer.provide(DefaultAccountClientConfigLayer),
);
export const DefaultEnableRegionServiceLayer = EnableRegionServiceLayer.pipe(
  Layer.provide(DefaultAccountClientConfigLayer),
);
export const DefaultGetAlternateContactServiceLayer =
  GetAlternateContactServiceLayer.pipe(
    Layer.provide(DefaultAccountClientConfigLayer),
  );
export const DefaultGetContactInformationServiceLayer =
  GetContactInformationServiceLayer.pipe(
    Layer.provide(DefaultAccountClientConfigLayer),
  );
export const DefaultGetRegionOptStatusServiceLayer =
  GetRegionOptStatusServiceLayer.pipe(
    Layer.provide(DefaultAccountClientConfigLayer),
  );
export const DefaultListRegionsServiceLayer = ListRegionsServiceLayer.pipe(
  Layer.provide(DefaultAccountClientConfigLayer),
);
export const DefaultPutAlternateContactServiceLayer =
  PutAlternateContactServiceLayer.pipe(
    Layer.provide(DefaultAccountClientConfigLayer),
  );
export const DefaultPutContactInformationServiceLayer =
  PutContactInformationServiceLayer.pipe(
    Layer.provide(DefaultAccountClientConfigLayer),
  );
export const DefaultAccountServiceLayer = Layer.mergeAll(
  DefaultDeleteAlternateContactServiceLayer,
  DefaultDisableRegionServiceLayer,
  DefaultEnableRegionServiceLayer,
  DefaultGetAlternateContactServiceLayer,
  DefaultGetContactInformationServiceLayer,
  DefaultGetRegionOptStatusServiceLayer,
  DefaultListRegionsServiceLayer,
  DefaultPutAlternateContactServiceLayer,
  DefaultPutContactInformationServiceLayer,
);
