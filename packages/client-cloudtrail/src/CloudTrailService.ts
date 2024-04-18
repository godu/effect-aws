/**
 * @since 1.0.0
 */
import {
  CloudTrailServiceException as SdkCloudTrailServiceException,
  AddTagsCommand,
  CancelQueryCommand,
  CreateChannelCommand,
  CreateEventDataStoreCommand,
  CreateTrailCommand,
  DeleteChannelCommand,
  DeleteEventDataStoreCommand,
  DeleteResourcePolicyCommand,
  DeleteTrailCommand,
  DeregisterOrganizationDelegatedAdminCommand,
  DescribeQueryCommand,
  DescribeTrailsCommand,
  DisableFederationCommand,
  EnableFederationCommand,
  GetChannelCommand,
  GetEventDataStoreCommand,
  GetEventSelectorsCommand,
  GetImportCommand,
  GetInsightSelectorsCommand,
  GetQueryResultsCommand,
  GetResourcePolicyCommand,
  GetTrailCommand,
  GetTrailStatusCommand,
  ListChannelsCommand,
  ListEventDataStoresCommand,
  ListImportFailuresCommand,
  ListImportsCommand,
  ListInsightsMetricDataCommand,
  ListPublicKeysCommand,
  ListQueriesCommand,
  ListTagsCommand,
  ListTrailsCommand,
  LookupEventsCommand,
  PutEventSelectorsCommand,
  PutInsightSelectorsCommand,
  PutResourcePolicyCommand,
  RegisterOrganizationDelegatedAdminCommand,
  RemoveTagsCommand,
  RestoreEventDataStoreCommand,
  StartEventDataStoreIngestionCommand,
  StartImportCommand,
  StartLoggingCommand,
  StartQueryCommand,
  StopEventDataStoreIngestionCommand,
  StopImportCommand,
  StopLoggingCommand,
  UpdateChannelCommand,
  UpdateEventDataStoreCommand,
  UpdateTrailCommand,
  type AddTagsRequest,
  type AddTagsResponse,
  type CancelQueryRequest,
  type CancelQueryResponse,
  type CreateChannelRequest,
  type CreateChannelResponse,
  type CreateEventDataStoreRequest,
  type CreateEventDataStoreResponse,
  type CreateTrailRequest,
  type CreateTrailResponse,
  type DeleteChannelRequest,
  type DeleteChannelResponse,
  type DeleteEventDataStoreRequest,
  type DeleteEventDataStoreResponse,
  type DeleteResourcePolicyRequest,
  type DeleteResourcePolicyResponse,
  type DeleteTrailRequest,
  type DeleteTrailResponse,
  type DeregisterOrganizationDelegatedAdminRequest,
  type DeregisterOrganizationDelegatedAdminResponse,
  type DescribeQueryRequest,
  type DescribeQueryResponse,
  type DescribeTrailsRequest,
  type DescribeTrailsResponse,
  type DisableFederationRequest,
  type DisableFederationResponse,
  type EnableFederationRequest,
  type EnableFederationResponse,
  type GetChannelRequest,
  type GetChannelResponse,
  type GetEventDataStoreRequest,
  type GetEventDataStoreResponse,
  type GetEventSelectorsRequest,
  type GetEventSelectorsResponse,
  type GetImportRequest,
  type GetImportResponse,
  type GetInsightSelectorsRequest,
  type GetInsightSelectorsResponse,
  type GetQueryResultsRequest,
  type GetQueryResultsResponse,
  type GetResourcePolicyRequest,
  type GetResourcePolicyResponse,
  type GetTrailRequest,
  type GetTrailResponse,
  type GetTrailStatusRequest,
  type GetTrailStatusResponse,
  type ListChannelsRequest,
  type ListChannelsResponse,
  type ListEventDataStoresRequest,
  type ListEventDataStoresResponse,
  type ListImportFailuresRequest,
  type ListImportFailuresResponse,
  type ListImportsRequest,
  type ListImportsResponse,
  type ListInsightsMetricDataRequest,
  type ListInsightsMetricDataResponse,
  type ListPublicKeysRequest,
  type ListPublicKeysResponse,
  type ListQueriesRequest,
  type ListQueriesResponse,
  type ListTagsRequest,
  type ListTagsResponse,
  type ListTrailsRequest,
  type ListTrailsResponse,
  type LookupEventsRequest,
  type LookupEventsResponse,
  type PutEventSelectorsRequest,
  type PutEventSelectorsResponse,
  type PutInsightSelectorsRequest,
  type PutInsightSelectorsResponse,
  type PutResourcePolicyRequest,
  type PutResourcePolicyResponse,
  type RegisterOrganizationDelegatedAdminRequest,
  type RegisterOrganizationDelegatedAdminResponse,
  type RemoveTagsRequest,
  type RemoveTagsResponse,
  type RestoreEventDataStoreRequest,
  type RestoreEventDataStoreResponse,
  type StartEventDataStoreIngestionRequest,
  type StartEventDataStoreIngestionResponse,
  type StartImportRequest,
  type StartImportResponse,
  type StartLoggingRequest,
  type StartLoggingResponse,
  type StartQueryRequest,
  type StartQueryResponse,
  type StopEventDataStoreIngestionRequest,
  type StopEventDataStoreIngestionResponse,
  type StopImportRequest,
  type StopImportResponse,
  type StopLoggingRequest,
  type StopLoggingResponse,
  type UpdateChannelRequest,
  type UpdateChannelResponse,
  type UpdateEventDataStoreRequest,
  type UpdateEventDataStoreResponse,
  type UpdateTrailRequest,
  type UpdateTrailResponse,
} from "@aws-sdk/client-cloudtrail";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  CloudTrailClientInstance,
  CloudTrailClientInstanceLayer,
} from "./CloudTrailClientInstance";
import { DefaultCloudTrailClientConfigLayer } from "./CloudTrailClientInstanceConfig";
import {
  type ChannelARNInvalidException,
  type ChannelNotFoundException,
  type CloudTrailARNInvalidException,
  type ConflictException,
  type EventDataStoreARNInvalidException,
  type EventDataStoreNotFoundException,
  type InactiveEventDataStoreException,
  type InvalidTagParameterException,
  type InvalidTrailNameException,
  type NoManagementAccountSLRExistsException,
  type NotOrganizationMasterAccountException,
  type OperationNotPermittedException,
  type ResourceNotFoundException,
  type ResourceTypeNotSupportedException,
  type TagsLimitExceededException,
  type UnsupportedOperationException,
  type InactiveQueryException,
  type InvalidParameterException,
  type QueryIdNotFoundException,
  type ChannelAlreadyExistsException,
  type ChannelMaxLimitExceededException,
  type InvalidEventDataStoreCategoryException,
  type InvalidSourceException,
  type CloudTrailAccessNotEnabledException,
  type EventDataStoreAlreadyExistsException,
  type EventDataStoreMaxLimitExceededException,
  type InsufficientDependencyServiceAccessPermissionException,
  type InsufficientEncryptionPolicyException,
  type InvalidEventSelectorsException,
  type InvalidKmsKeyIdException,
  type KmsException,
  type KmsKeyNotFoundException,
  type OrganizationNotInAllFeaturesModeException,
  type OrganizationsNotInUseException,
  type CloudTrailInvalidClientTokenIdException,
  type CloudWatchLogsDeliveryUnavailableException,
  type InsufficientS3BucketPolicyException,
  type InsufficientSnsTopicPolicyException,
  type InvalidCloudWatchLogsLogGroupArnException,
  type InvalidCloudWatchLogsRoleArnException,
  type InvalidParameterCombinationException,
  type InvalidS3BucketNameException,
  type InvalidS3PrefixException,
  type InvalidSnsTopicNameException,
  type KmsKeyDisabledException,
  type MaximumNumberOfTrailsExceededException,
  type S3BucketDoesNotExistException,
  type ThrottlingException,
  type TrailAlreadyExistsException,
  type TrailNotProvidedException,
  type ChannelExistsForEDSException,
  type EventDataStoreFederationEnabledException,
  type EventDataStoreHasOngoingImportException,
  type EventDataStoreTerminationProtectedException,
  type ResourceARNNotValidException,
  type ResourcePolicyNotFoundException,
  type InvalidHomeRegionException,
  type TrailNotFoundException,
  type AccountNotFoundException,
  type AccountNotRegisteredException,
  type NotOrganizationManagementAccountException,
  type AccessDeniedException,
  type ConcurrentModificationException,
  type ImportNotFoundException,
  type InsightNotEnabledException,
  type InvalidMaxResultsException,
  type InvalidNextTokenException,
  type InvalidTimeRangeException,
  type InvalidTokenException,
  type InvalidDateRangeException,
  type InvalidQueryStatusException,
  type InvalidEventCategoryException,
  type InvalidLookupAttributesException,
  type InvalidInsightSelectorsException,
  type ResourcePolicyNotValidException,
  type AccountRegisteredException,
  type CannotDelegateManagementAccountException,
  type DelegatedAdminAccountLimitExceededException,
  type InvalidEventDataStoreStatusException,
  type AccountHasOngoingImportException,
  type InvalidImportSourceException,
  type InvalidQueryStatementException,
  type MaxConcurrentQueriesException,
  type TaggedException,
  SdkError,
} from "./Errors";

const commands = {
  AddTagsCommand,
  CancelQueryCommand,
  CreateChannelCommand,
  CreateEventDataStoreCommand,
  CreateTrailCommand,
  DeleteChannelCommand,
  DeleteEventDataStoreCommand,
  DeleteResourcePolicyCommand,
  DeleteTrailCommand,
  DeregisterOrganizationDelegatedAdminCommand,
  DescribeQueryCommand,
  DescribeTrailsCommand,
  DisableFederationCommand,
  EnableFederationCommand,
  GetChannelCommand,
  GetEventDataStoreCommand,
  GetEventSelectorsCommand,
  GetImportCommand,
  GetInsightSelectorsCommand,
  GetQueryResultsCommand,
  GetResourcePolicyCommand,
  GetTrailCommand,
  GetTrailStatusCommand,
  ListChannelsCommand,
  ListEventDataStoresCommand,
  ListImportFailuresCommand,
  ListImportsCommand,
  ListInsightsMetricDataCommand,
  ListPublicKeysCommand,
  ListQueriesCommand,
  ListTagsCommand,
  ListTrailsCommand,
  LookupEventsCommand,
  PutEventSelectorsCommand,
  PutInsightSelectorsCommand,
  PutResourcePolicyCommand,
  RegisterOrganizationDelegatedAdminCommand,
  RemoveTagsCommand,
  RestoreEventDataStoreCommand,
  StartEventDataStoreIngestionCommand,
  StartImportCommand,
  StartLoggingCommand,
  StartQueryCommand,
  StopEventDataStoreIngestionCommand,
  StopImportCommand,
  StopLoggingCommand,
  UpdateChannelCommand,
  UpdateEventDataStoreCommand,
  UpdateTrailCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface CloudTrailService {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsResponse,
    | SdkError
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | CloudTrailARNInvalidException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | TagsLimitExceededException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(
    args: CancelQueryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelQueryResponse,
    | SdkError
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InactiveQueryException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateChannelResponse,
    | SdkError
    | ChannelAlreadyExistsException
    | ChannelMaxLimitExceededException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidEventDataStoreCategoryException
    | InvalidParameterException
    | InvalidSourceException
    | InvalidTagParameterException
    | OperationNotPermittedException
    | TagsLimitExceededException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link CreateEventDataStoreCommand}
   */
  createEventDataStore(
    args: CreateEventDataStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventDataStoreResponse,
    | SdkError
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | EventDataStoreAlreadyExistsException
    | EventDataStoreMaxLimitExceededException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InvalidEventSelectorsException
    | InvalidKmsKeyIdException
    | InvalidParameterException
    | InvalidTagParameterException
    | KmsException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link CreateTrailCommand}
   */
  createTrail(
    args: CreateTrailRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateTrailResponse,
    | SdkError
    | CloudTrailAccessNotEnabledException
    | CloudTrailInvalidClientTokenIdException
    | CloudWatchLogsDeliveryUnavailableException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InsufficientSnsTopicPolicyException
    | InvalidCloudWatchLogsLogGroupArnException
    | InvalidCloudWatchLogsRoleArnException
    | InvalidKmsKeyIdException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | InvalidSnsTopicNameException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | KmsException
    | KmsKeyDisabledException
    | KmsKeyNotFoundException
    | MaximumNumberOfTrailsExceededException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | S3BucketDoesNotExistException
    | TagsLimitExceededException
    | ThrottlingException
    | TrailAlreadyExistsException
    | TrailNotProvidedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteChannelResponse,
    | SdkError
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DeleteEventDataStoreCommand}
   */
  deleteEventDataStore(
    args: DeleteEventDataStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventDataStoreResponse,
    | SdkError
    | ChannelExistsForEDSException
    | ConflictException
    | EventDataStoreARNInvalidException
    | EventDataStoreFederationEnabledException
    | EventDataStoreHasOngoingImportException
    | EventDataStoreNotFoundException
    | EventDataStoreTerminationProtectedException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | SdkError
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DeleteTrailCommand}
   */
  deleteTrail(
    args: DeleteTrailRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrailResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DeregisterOrganizationDelegatedAdminCommand}
   */
  deregisterOrganizationDelegatedAdmin(
    args: DeregisterOrganizationDelegatedAdminRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterOrganizationDelegatedAdminResponse,
    | SdkError
    | AccountNotFoundException
    | AccountNotRegisteredException
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NotOrganizationManagementAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DescribeQueryCommand}
   */
  describeQuery(
    args: DescribeQueryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueryResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DescribeTrailsCommand}
   */
  describeTrails(
    args: DescribeTrailsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrailsResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DisableFederationCommand}
   */
  disableFederation(
    args: DisableFederationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisableFederationResponse,
    | SdkError
    | AccessDeniedException
    | CloudTrailAccessNotEnabledException
    | ConcurrentModificationException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link EnableFederationCommand}
   */
  enableFederation(
    args: EnableFederationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnableFederationResponse,
    | SdkError
    | AccessDeniedException
    | CloudTrailAccessNotEnabledException
    | ConcurrentModificationException
    | EventDataStoreARNInvalidException
    | EventDataStoreFederationEnabledException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(
    args: GetChannelRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetChannelResponse,
    | SdkError
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetEventDataStoreCommand}
   */
  getEventDataStore(
    args: GetEventDataStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetEventDataStoreResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetEventSelectorsCommand}
   */
  getEventSelectors(
    args: GetEventSelectorsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetEventSelectorsResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetImportCommand}
   */
  getImport(
    args: GetImportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetImportResponse,
    | SdkError
    | ImportNotFoundException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetInsightSelectorsCommand}
   */
  getInsightSelectors(
    args: GetInsightSelectorsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetInsightSelectorsResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | InsightNotEnabledException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetQueryResultsResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | QueryIdNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | SdkError
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetTrailCommand}
   */
  getTrail(
    args: GetTrailRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetTrailResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetTrailStatusCommand}
   */
  getTrailStatus(
    args: GetTrailStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetTrailStatusResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | InvalidTrailNameException
    | OperationNotPermittedException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(
    args: ListChannelsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListChannelsResponse,
    | SdkError
    | InvalidNextTokenException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListEventDataStoresCommand}
   */
  listEventDataStores(
    args: ListEventDataStoresRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListEventDataStoresResponse,
    | SdkError
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListImportFailuresCommand}
   */
  listImportFailures(
    args: ListImportFailuresRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListImportFailuresResponse,
    | SdkError
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(
    args: ListImportsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListImportsResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListInsightsMetricDataCommand}
   */
  listInsightsMetricData(
    args: ListInsightsMetricDataRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListInsightsMetricDataResponse,
    | SdkError
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(
    args: ListPublicKeysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPublicKeysResponse,
    | SdkError
    | InvalidTimeRangeException
    | InvalidTokenException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListQueriesCommand}
   */
  listQueries(
    args: ListQueriesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListQueriesResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidDateRangeException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidQueryStatusException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsResponse,
    | SdkError
    | ChannelARNInvalidException
    | CloudTrailARNInvalidException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTokenException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListTrailsCommand}
   */
  listTrails(
    args: ListTrailsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTrailsResponse,
    SdkError | OperationNotPermittedException | UnsupportedOperationException
  >;

  /**
   * @see {@link LookupEventsCommand}
   */
  lookupEvents(
    args: LookupEventsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    LookupEventsResponse,
    | SdkError
    | InvalidEventCategoryException
    | InvalidLookupAttributesException
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidTimeRangeException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link PutEventSelectorsCommand}
   */
  putEventSelectors(
    args: PutEventSelectorsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutEventSelectorsResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventSelectorsException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link PutInsightSelectorsCommand}
   */
  putInsightSelectors(
    args: PutInsightSelectorsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutInsightSelectorsResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InvalidHomeRegionException
    | InvalidInsightSelectorsException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidTrailNameException
    | KmsException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | S3BucketDoesNotExistException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | SdkError
    | OperationNotPermittedException
    | ResourceARNNotValidException
    | ResourceNotFoundException
    | ResourcePolicyNotValidException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link RegisterOrganizationDelegatedAdminCommand}
   */
  registerOrganizationDelegatedAdmin(
    args: RegisterOrganizationDelegatedAdminRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterOrganizationDelegatedAdminResponse,
    | SdkError
    | AccountNotFoundException
    | AccountRegisteredException
    | CannotDelegateManagementAccountException
    | CloudTrailAccessNotEnabledException
    | ConflictException
    | DelegatedAdminAccountLimitExceededException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidParameterException
    | NotOrganizationManagementAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsResponse,
    | SdkError
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | CloudTrailARNInvalidException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidTagParameterException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link RestoreEventDataStoreCommand}
   */
  restoreEventDataStore(
    args: RestoreEventDataStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreEventDataStoreResponse,
    | SdkError
    | CloudTrailAccessNotEnabledException
    | EventDataStoreARNInvalidException
    | EventDataStoreMaxLimitExceededException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link StartEventDataStoreIngestionCommand}
   */
  startEventDataStoreIngestion(
    args: StartEventDataStoreIngestionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartEventDataStoreIngestionResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(
    args: StartImportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartImportResponse,
    | SdkError
    | AccountHasOngoingImportException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | ImportNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidImportSourceException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link StartLoggingCommand}
   */
  startLogging(
    args: StartLoggingRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartLoggingResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link StartQueryCommand}
   */
  startQuery(
    args: StartQueryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartQueryResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InvalidParameterException
    | InvalidQueryStatementException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | MaxConcurrentQueriesException
    | NoManagementAccountSLRExistsException
    | OperationNotPermittedException
    | S3BucketDoesNotExistException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link StopEventDataStoreIngestionCommand}
   */
  stopEventDataStoreIngestion(
    args: StopEventDataStoreIngestionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopEventDataStoreIngestionResponse,
    | SdkError
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidEventDataStoreCategoryException
    | InvalidEventDataStoreStatusException
    | InvalidParameterException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link StopImportCommand}
   */
  stopImport(
    args: StopImportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopImportResponse,
    | SdkError
    | ImportNotFoundException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link StopLoggingCommand}
   */
  stopLogging(
    args: StopLoggingRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopLoggingResponse,
    | SdkError
    | CloudTrailARNInvalidException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InvalidHomeRegionException
    | InvalidTrailNameException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | ThrottlingException
    | TrailNotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateChannelResponse,
    | SdkError
    | ChannelAlreadyExistsException
    | ChannelARNInvalidException
    | ChannelNotFoundException
    | EventDataStoreARNInvalidException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InvalidEventDataStoreCategoryException
    | InvalidParameterException
    | OperationNotPermittedException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link UpdateEventDataStoreCommand}
   */
  updateEventDataStore(
    args: UpdateEventDataStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventDataStoreResponse,
    | SdkError
    | CloudTrailAccessNotEnabledException
    | EventDataStoreAlreadyExistsException
    | EventDataStoreARNInvalidException
    | EventDataStoreHasOngoingImportException
    | EventDataStoreNotFoundException
    | InactiveEventDataStoreException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InvalidEventSelectorsException
    | InvalidInsightSelectorsException
    | InvalidKmsKeyIdException
    | InvalidParameterException
    | KmsException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link UpdateTrailCommand}
   */
  updateTrail(
    args: UpdateTrailRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTrailResponse,
    | SdkError
    | CloudTrailAccessNotEnabledException
    | CloudTrailARNInvalidException
    | CloudTrailInvalidClientTokenIdException
    | CloudWatchLogsDeliveryUnavailableException
    | ConflictException
    | InsufficientDependencyServiceAccessPermissionException
    | InsufficientEncryptionPolicyException
    | InsufficientS3BucketPolicyException
    | InsufficientSnsTopicPolicyException
    | InvalidCloudWatchLogsLogGroupArnException
    | InvalidCloudWatchLogsRoleArnException
    | InvalidEventSelectorsException
    | InvalidHomeRegionException
    | InvalidKmsKeyIdException
    | InvalidParameterCombinationException
    | InvalidParameterException
    | InvalidS3BucketNameException
    | InvalidS3PrefixException
    | InvalidSnsTopicNameException
    | InvalidTrailNameException
    | KmsException
    | KmsKeyDisabledException
    | KmsKeyNotFoundException
    | NoManagementAccountSLRExistsException
    | NotOrganizationMasterAccountException
    | OperationNotPermittedException
    | OrganizationNotInAllFeaturesModeException
    | OrganizationsNotInUseException
    | S3BucketDoesNotExistException
    | ThrottlingException
    | TrailNotFoundException
    | TrailNotProvidedException
    | UnsupportedOperationException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const CloudTrailService = Context.GenericTag<CloudTrailService>(
  "@effect-aws/client-cloudtrail/CloudTrailService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudTrailService = Effect.gen(function* (_) {
  const client = yield* _(CloudTrailClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkCloudTrailServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkCloudTrailServiceException>
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
  }, {}) as CloudTrailService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseCloudTrailServiceLayer = Layer.effect(
  CloudTrailService,
  makeCloudTrailService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudTrailServiceLayer = BaseCloudTrailServiceLayer.pipe(
  Layer.provide(CloudTrailClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudTrailServiceLayer = CloudTrailServiceLayer.pipe(
  Layer.provide(DefaultCloudTrailClientConfigLayer),
);
