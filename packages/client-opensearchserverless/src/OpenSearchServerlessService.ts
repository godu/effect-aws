/**
 * @since 1.0.0
 */
import {
  OpenSearchServerlessServiceException as SdkOpenSearchServerlessServiceException,
  BatchGetCollectionCommand,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommand,
  BatchGetVpcEndpointCommand,
  CreateAccessPolicyCommand,
  CreateCollectionCommand,
  CreateLifecyclePolicyCommand,
  CreateSecurityConfigCommand,
  CreateSecurityPolicyCommand,
  CreateVpcEndpointCommand,
  DeleteAccessPolicyCommand,
  DeleteCollectionCommand,
  DeleteLifecyclePolicyCommand,
  DeleteSecurityConfigCommand,
  DeleteSecurityPolicyCommand,
  DeleteVpcEndpointCommand,
  GetAccessPolicyCommand,
  GetAccountSettingsCommand,
  GetPoliciesStatsCommand,
  GetSecurityConfigCommand,
  GetSecurityPolicyCommand,
  ListAccessPoliciesCommand,
  ListCollectionsCommand,
  ListLifecyclePoliciesCommand,
  ListSecurityConfigsCommand,
  ListSecurityPoliciesCommand,
  ListTagsForResourceCommand,
  ListVpcEndpointsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessPolicyCommand,
  UpdateAccountSettingsCommand,
  UpdateCollectionCommand,
  UpdateLifecyclePolicyCommand,
  UpdateSecurityConfigCommand,
  UpdateSecurityPolicyCommand,
  UpdateVpcEndpointCommand,
  type BatchGetCollectionRequest,
  type BatchGetCollectionResponse,
  type BatchGetEffectiveLifecyclePolicyRequest,
  type BatchGetEffectiveLifecyclePolicyResponse,
  type BatchGetLifecyclePolicyRequest,
  type BatchGetLifecyclePolicyResponse,
  type BatchGetVpcEndpointRequest,
  type BatchGetVpcEndpointResponse,
  type CreateAccessPolicyRequest,
  type CreateAccessPolicyResponse,
  type CreateCollectionRequest,
  type CreateCollectionResponse,
  type CreateLifecyclePolicyRequest,
  type CreateLifecyclePolicyResponse,
  type CreateSecurityConfigRequest,
  type CreateSecurityConfigResponse,
  type CreateSecurityPolicyRequest,
  type CreateSecurityPolicyResponse,
  type CreateVpcEndpointRequest,
  type CreateVpcEndpointResponse,
  type DeleteAccessPolicyRequest,
  type DeleteAccessPolicyResponse,
  type DeleteCollectionRequest,
  type DeleteCollectionResponse,
  type DeleteLifecyclePolicyRequest,
  type DeleteLifecyclePolicyResponse,
  type DeleteSecurityConfigRequest,
  type DeleteSecurityConfigResponse,
  type DeleteSecurityPolicyRequest,
  type DeleteSecurityPolicyResponse,
  type DeleteVpcEndpointRequest,
  type DeleteVpcEndpointResponse,
  type GetAccessPolicyRequest,
  type GetAccessPolicyResponse,
  type GetAccountSettingsRequest,
  type GetAccountSettingsResponse,
  type GetPoliciesStatsRequest,
  type GetPoliciesStatsResponse,
  type GetSecurityConfigRequest,
  type GetSecurityConfigResponse,
  type GetSecurityPolicyRequest,
  type GetSecurityPolicyResponse,
  type ListAccessPoliciesRequest,
  type ListAccessPoliciesResponse,
  type ListCollectionsRequest,
  type ListCollectionsResponse,
  type ListLifecyclePoliciesRequest,
  type ListLifecyclePoliciesResponse,
  type ListSecurityConfigsRequest,
  type ListSecurityConfigsResponse,
  type ListSecurityPoliciesRequest,
  type ListSecurityPoliciesResponse,
  type ListTagsForResourceRequest,
  type ListTagsForResourceResponse,
  type ListVpcEndpointsRequest,
  type ListVpcEndpointsResponse,
  type TagResourceRequest,
  type TagResourceResponse,
  type UntagResourceRequest,
  type UntagResourceResponse,
  type UpdateAccessPolicyRequest,
  type UpdateAccessPolicyResponse,
  type UpdateAccountSettingsRequest,
  type UpdateAccountSettingsResponse,
  type UpdateCollectionRequest,
  type UpdateCollectionResponse,
  type UpdateLifecyclePolicyRequest,
  type UpdateLifecyclePolicyResponse,
  type UpdateSecurityConfigRequest,
  type UpdateSecurityConfigResponse,
  type UpdateSecurityPolicyRequest,
  type UpdateSecurityPolicyResponse,
  type UpdateVpcEndpointRequest,
  type UpdateVpcEndpointResponse,
} from "@aws-sdk/client-opensearchserverless";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type InternalServerException,
  type ValidationException,
  type ConflictException,
  type ServiceQuotaExceededException,
  type OcuLimitExceededException,
  type ResourceNotFoundException,
  type TaggedException,
  SdkError,
} from "./Errors";
import {
  OpenSearchServerlessClientInstance,
  OpenSearchServerlessClientInstanceLayer,
} from "./OpenSearchServerlessClientInstance";
import { DefaultOpenSearchServerlessClientConfigLayer } from "./OpenSearchServerlessClientInstanceConfig";

const commands = {
  BatchGetCollectionCommand,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommand,
  BatchGetVpcEndpointCommand,
  CreateAccessPolicyCommand,
  CreateCollectionCommand,
  CreateLifecyclePolicyCommand,
  CreateSecurityConfigCommand,
  CreateSecurityPolicyCommand,
  CreateVpcEndpointCommand,
  DeleteAccessPolicyCommand,
  DeleteCollectionCommand,
  DeleteLifecyclePolicyCommand,
  DeleteSecurityConfigCommand,
  DeleteSecurityPolicyCommand,
  DeleteVpcEndpointCommand,
  GetAccessPolicyCommand,
  GetAccountSettingsCommand,
  GetPoliciesStatsCommand,
  GetSecurityConfigCommand,
  GetSecurityPolicyCommand,
  ListAccessPoliciesCommand,
  ListCollectionsCommand,
  ListLifecyclePoliciesCommand,
  ListSecurityConfigsCommand,
  ListSecurityPoliciesCommand,
  ListTagsForResourceCommand,
  ListVpcEndpointsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessPolicyCommand,
  UpdateAccountSettingsCommand,
  UpdateCollectionCommand,
  UpdateLifecyclePolicyCommand,
  UpdateSecurityConfigCommand,
  UpdateSecurityPolicyCommand,
  UpdateVpcEndpointCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface OpenSearchServerlessService {
  readonly _: unique symbol;

  /**
   * @see {@link BatchGetCollectionCommand}
   */
  batchGetCollection(
    args: BatchGetCollectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetCollectionResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link BatchGetEffectiveLifecyclePolicyCommand}
   */
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetEffectiveLifecyclePolicyResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link BatchGetLifecyclePolicyCommand}
   */
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetLifecyclePolicyResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link BatchGetVpcEndpointCommand}
   */
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetVpcEndpointResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link CreateAccessPolicyCommand}
   */
  createAccessPolicy(
    args: CreateAccessPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccessPolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link CreateCollectionCommand}
   */
  createCollection(
    args: CreateCollectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCollectionResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | OcuLimitExceededException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link CreateLifecyclePolicyCommand}
   */
  createLifecyclePolicy(
    args: CreateLifecyclePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateLifecyclePolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link CreateSecurityConfigCommand}
   */
  createSecurityConfig(
    args: CreateSecurityConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityConfigResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link CreateSecurityPolicyCommand}
   */
  createSecurityPolicy(
    args: CreateSecurityPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityPolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcEndpointResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link DeleteAccessPolicyCommand}
   */
  deleteAccessPolicy(
    args: DeleteAccessPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccessPolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteCollectionCommand}
   */
  deleteCollection(
    args: DeleteCollectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCollectionResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLifecyclePolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteSecurityConfigCommand}
   */
  deleteSecurityConfig(
    args: DeleteSecurityConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityConfigResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteSecurityPolicyCommand}
   */
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityPolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcEndpointResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetAccessPolicyCommand}
   */
  getAccessPolicy(
    args: GetAccessPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetAccessPolicyResponse,
    | SdkError
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSettingsResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link GetPoliciesStatsCommand}
   */
  getPoliciesStats(
    args: GetPoliciesStatsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPoliciesStatsResponse,
    SdkError | InternalServerException
  >;

  /**
   * @see {@link GetSecurityConfigCommand}
   */
  getSecurityConfig(
    args: GetSecurityConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityConfigResponse,
    | SdkError
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetSecurityPolicyCommand}
   */
  getSecurityPolicy(
    args: GetSecurityPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityPolicyResponse,
    | SdkError
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(
    args: ListAccessPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAccessPoliciesResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link ListCollectionsCommand}
   */
  listCollections(
    args: ListCollectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListCollectionsResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link ListLifecyclePoliciesCommand}
   */
  listLifecyclePolicies(
    args: ListLifecyclePoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListLifecyclePoliciesResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link ListSecurityConfigsCommand}
   */
  listSecurityConfigs(
    args: ListSecurityConfigsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityConfigsResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   */
  listSecurityPolicies(
    args: ListSecurityPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityPoliciesResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | SdkError
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(
    args: ListVpcEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateAccessPolicyCommand}
   */
  updateAccessPolicy(
    args: UpdateAccessPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccessPolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountSettingsResponse,
    SdkError | InternalServerException | ValidationException
  >;

  /**
   * @see {@link UpdateCollectionCommand}
   */
  updateCollection(
    args: UpdateCollectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCollectionResponse,
    SdkError | ConflictException | InternalServerException | ValidationException
  >;

  /**
   * @see {@link UpdateLifecyclePolicyCommand}
   */
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateLifecyclePolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link UpdateSecurityConfigCommand}
   */
  updateSecurityConfig(
    args: UpdateSecurityConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityConfigResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateSecurityPolicyCommand}
   */
  updateSecurityPolicy(
    args: UpdateSecurityPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityPolicyResponse,
    | SdkError
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
  >;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateVpcEndpointResponse,
    SdkError | ConflictException | InternalServerException | ValidationException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const OpenSearchServerlessService =
  Context.GenericTag<OpenSearchServerlessService>(
    "@effect-aws/client-opensearchserverless/OpenSearchServerlessService",
  );

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOpenSearchServerlessService = Effect.gen(function* (_) {
  const client = yield* _(OpenSearchServerlessClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkOpenSearchServerlessServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkOpenSearchServerlessServiceException>
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
  }, {}) as OpenSearchServerlessService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseOpenSearchServerlessServiceLayer = Layer.effect(
  OpenSearchServerlessService,
  makeOpenSearchServerlessService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const OpenSearchServerlessServiceLayer =
  BaseOpenSearchServerlessServiceLayer.pipe(
    Layer.provide(OpenSearchServerlessClientInstanceLayer),
  );

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultOpenSearchServerlessServiceLayer =
  OpenSearchServerlessServiceLayer.pipe(
    Layer.provide(DefaultOpenSearchServerlessClientConfigLayer),
  );
