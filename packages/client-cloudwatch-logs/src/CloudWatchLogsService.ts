/**
 * @since 1.0.0
 */
import {
  CloudWatchLogsServiceException as SdkCloudWatchLogsServiceException,
  AssociateKmsKeyCommand,
  CancelExportTaskCommand,
  CreateDeliveryCommand,
  CreateExportTaskCommand,
  CreateLogAnomalyDetectorCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
  DeleteAccountPolicyCommand,
  DeleteDataProtectionPolicyCommand,
  DeleteDeliveryCommand,
  DeleteDeliveryDestinationCommand,
  DeleteDeliveryDestinationPolicyCommand,
  DeleteDeliverySourceCommand,
  DeleteDestinationCommand,
  DeleteLogAnomalyDetectorCommand,
  DeleteLogGroupCommand,
  DeleteLogStreamCommand,
  DeleteMetricFilterCommand,
  DeleteQueryDefinitionCommand,
  DeleteResourcePolicyCommand,
  DeleteRetentionPolicyCommand,
  DeleteSubscriptionFilterCommand,
  DescribeAccountPoliciesCommand,
  DescribeDeliveriesCommand,
  DescribeDeliveryDestinationsCommand,
  DescribeDeliverySourcesCommand,
  DescribeDestinationsCommand,
  DescribeExportTasksCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  DescribeMetricFiltersCommand,
  DescribeQueriesCommand,
  DescribeQueryDefinitionsCommand,
  DescribeResourcePoliciesCommand,
  DescribeSubscriptionFiltersCommand,
  DisassociateKmsKeyCommand,
  FilterLogEventsCommand,
  GetDataProtectionPolicyCommand,
  GetDeliveryCommand,
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationPolicyCommand,
  GetDeliverySourceCommand,
  GetLogAnomalyDetectorCommand,
  GetLogEventsCommand,
  GetLogGroupFieldsCommand,
  GetLogRecordCommand,
  GetQueryResultsCommand,
  ListAnomaliesCommand,
  ListLogAnomalyDetectorsCommand,
  ListTagsForResourceCommand,
  ListTagsLogGroupCommand,
  PutAccountPolicyCommand,
  PutDataProtectionPolicyCommand,
  PutDeliveryDestinationCommand,
  PutDeliveryDestinationPolicyCommand,
  PutDeliverySourceCommand,
  PutDestinationCommand,
  PutDestinationPolicyCommand,
  PutLogEventsCommand,
  PutMetricFilterCommand,
  PutQueryDefinitionCommand,
  PutResourcePolicyCommand,
  PutRetentionPolicyCommand,
  PutSubscriptionFilterCommand,
  StartLiveTailCommand,
  StartQueryCommand,
  StopQueryCommand,
  TagLogGroupCommand,
  TagResourceCommand,
  TestMetricFilterCommand,
  UntagLogGroupCommand,
  UntagResourceCommand,
  UpdateAnomalyCommand,
  UpdateLogAnomalyDetectorCommand,
  type AssociateKmsKeyRequest,
  type CancelExportTaskRequest,
  type CreateDeliveryRequest,
  type CreateDeliveryResponse,
  type CreateExportTaskRequest,
  type CreateExportTaskResponse,
  type CreateLogAnomalyDetectorRequest,
  type CreateLogAnomalyDetectorResponse,
  type CreateLogGroupRequest,
  type CreateLogStreamRequest,
  type DeleteAccountPolicyRequest,
  type DeleteDataProtectionPolicyRequest,
  type DeleteDeliveryRequest,
  type DeleteDeliveryDestinationRequest,
  type DeleteDeliveryDestinationPolicyRequest,
  type DeleteDeliverySourceRequest,
  type DeleteDestinationRequest,
  type DeleteLogAnomalyDetectorRequest,
  type DeleteLogGroupRequest,
  type DeleteLogStreamRequest,
  type DeleteMetricFilterRequest,
  type DeleteQueryDefinitionRequest,
  type DeleteQueryDefinitionResponse,
  type DeleteResourcePolicyRequest,
  type DeleteRetentionPolicyRequest,
  type DeleteSubscriptionFilterRequest,
  type DescribeAccountPoliciesRequest,
  type DescribeAccountPoliciesResponse,
  type DescribeDeliveriesRequest,
  type DescribeDeliveriesResponse,
  type DescribeDeliveryDestinationsRequest,
  type DescribeDeliveryDestinationsResponse,
  type DescribeDeliverySourcesRequest,
  type DescribeDeliverySourcesResponse,
  type DescribeDestinationsRequest,
  type DescribeDestinationsResponse,
  type DescribeExportTasksRequest,
  type DescribeExportTasksResponse,
  type DescribeLogGroupsRequest,
  type DescribeLogGroupsResponse,
  type DescribeLogStreamsRequest,
  type DescribeLogStreamsResponse,
  type DescribeMetricFiltersRequest,
  type DescribeMetricFiltersResponse,
  type DescribeQueriesRequest,
  type DescribeQueriesResponse,
  type DescribeQueryDefinitionsRequest,
  type DescribeQueryDefinitionsResponse,
  type DescribeResourcePoliciesRequest,
  type DescribeResourcePoliciesResponse,
  type DescribeSubscriptionFiltersRequest,
  type DescribeSubscriptionFiltersResponse,
  type DisassociateKmsKeyRequest,
  type FilterLogEventsRequest,
  type FilterLogEventsResponse,
  type GetDataProtectionPolicyRequest,
  type GetDataProtectionPolicyResponse,
  type GetDeliveryRequest,
  type GetDeliveryResponse,
  type GetDeliveryDestinationRequest,
  type GetDeliveryDestinationResponse,
  type GetDeliveryDestinationPolicyRequest,
  type GetDeliveryDestinationPolicyResponse,
  type GetDeliverySourceRequest,
  type GetDeliverySourceResponse,
  type GetLogAnomalyDetectorRequest,
  type GetLogAnomalyDetectorResponse,
  type GetLogEventsRequest,
  type GetLogEventsResponse,
  type GetLogGroupFieldsRequest,
  type GetLogGroupFieldsResponse,
  type GetLogRecordRequest,
  type GetLogRecordResponse,
  type GetQueryResultsRequest,
  type GetQueryResultsResponse,
  type ListAnomaliesRequest,
  type ListAnomaliesResponse,
  type ListLogAnomalyDetectorsRequest,
  type ListLogAnomalyDetectorsResponse,
  type ListTagsForResourceRequest,
  type ListTagsForResourceResponse,
  type ListTagsLogGroupRequest,
  type ListTagsLogGroupResponse,
  type PutAccountPolicyRequest,
  type PutAccountPolicyResponse,
  type PutDataProtectionPolicyRequest,
  type PutDataProtectionPolicyResponse,
  type PutDeliveryDestinationRequest,
  type PutDeliveryDestinationResponse,
  type PutDeliveryDestinationPolicyRequest,
  type PutDeliveryDestinationPolicyResponse,
  type PutDeliverySourceRequest,
  type PutDeliverySourceResponse,
  type PutDestinationRequest,
  type PutDestinationResponse,
  type PutDestinationPolicyRequest,
  type PutLogEventsRequest,
  type PutLogEventsResponse,
  type PutMetricFilterRequest,
  type PutQueryDefinitionRequest,
  type PutQueryDefinitionResponse,
  type PutResourcePolicyRequest,
  type PutResourcePolicyResponse,
  type PutRetentionPolicyRequest,
  type PutSubscriptionFilterRequest,
  type StartLiveTailRequest,
  type StartLiveTailResponse,
  type StartQueryRequest,
  type StartQueryResponse,
  type StopQueryRequest,
  type StopQueryResponse,
  type TagLogGroupRequest,
  type TagResourceRequest,
  type TestMetricFilterRequest,
  type TestMetricFilterResponse,
  type UntagLogGroupRequest,
  type UntagResourceRequest,
  type UpdateAnomalyRequest,
  type UpdateLogAnomalyDetectorRequest,
} from "@aws-sdk/client-cloudwatch-logs";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  CloudWatchLogsClientInstance,
  CloudWatchLogsClientInstanceLayer,
} from "./CloudWatchLogsClientInstance";
import { DefaultCloudWatchLogsClientConfigLayer } from "./CloudWatchLogsClientInstanceConfig";
import {
  type InvalidParameterException,
  type OperationAbortedException,
  type ResourceNotFoundException,
  type ServiceUnavailableException,
  type InvalidOperationException,
  type AccessDeniedException,
  type ConflictException,
  type ServiceQuotaExceededException,
  type ThrottlingException,
  type ValidationException,
  type LimitExceededException,
  type ResourceAlreadyExistsException,
  type DataAlreadyAcceptedException,
  type InvalidSequenceTokenException,
  type UnrecognizedClientException,
  type MalformedQueryException,
  type TooManyTagsException,
  type TaggedException,
  SdkError,
} from "./Errors";

const commands = {
  AssociateKmsKeyCommand,
  CancelExportTaskCommand,
  CreateDeliveryCommand,
  CreateExportTaskCommand,
  CreateLogAnomalyDetectorCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
  DeleteAccountPolicyCommand,
  DeleteDataProtectionPolicyCommand,
  DeleteDeliveryCommand,
  DeleteDeliveryDestinationCommand,
  DeleteDeliveryDestinationPolicyCommand,
  DeleteDeliverySourceCommand,
  DeleteDestinationCommand,
  DeleteLogAnomalyDetectorCommand,
  DeleteLogGroupCommand,
  DeleteLogStreamCommand,
  DeleteMetricFilterCommand,
  DeleteQueryDefinitionCommand,
  DeleteResourcePolicyCommand,
  DeleteRetentionPolicyCommand,
  DeleteSubscriptionFilterCommand,
  DescribeAccountPoliciesCommand,
  DescribeDeliveriesCommand,
  DescribeDeliveryDestinationsCommand,
  DescribeDeliverySourcesCommand,
  DescribeDestinationsCommand,
  DescribeExportTasksCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  DescribeMetricFiltersCommand,
  DescribeQueriesCommand,
  DescribeQueryDefinitionsCommand,
  DescribeResourcePoliciesCommand,
  DescribeSubscriptionFiltersCommand,
  DisassociateKmsKeyCommand,
  FilterLogEventsCommand,
  GetDataProtectionPolicyCommand,
  GetDeliveryCommand,
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationPolicyCommand,
  GetDeliverySourceCommand,
  GetLogAnomalyDetectorCommand,
  GetLogEventsCommand,
  GetLogGroupFieldsCommand,
  GetLogRecordCommand,
  GetQueryResultsCommand,
  ListAnomaliesCommand,
  ListLogAnomalyDetectorsCommand,
  ListTagsForResourceCommand,
  ListTagsLogGroupCommand,
  PutAccountPolicyCommand,
  PutDataProtectionPolicyCommand,
  PutDeliveryDestinationCommand,
  PutDeliveryDestinationPolicyCommand,
  PutDeliverySourceCommand,
  PutDestinationCommand,
  PutDestinationPolicyCommand,
  PutLogEventsCommand,
  PutMetricFilterCommand,
  PutQueryDefinitionCommand,
  PutResourcePolicyCommand,
  PutRetentionPolicyCommand,
  PutSubscriptionFilterCommand,
  StartLiveTailCommand,
  StartQueryCommand,
  StopQueryCommand,
  TagLogGroupCommand,
  TagResourceCommand,
  TestMetricFilterCommand,
  UntagLogGroupCommand,
  UntagResourceCommand,
  UpdateAnomalyCommand,
  UpdateLogAnomalyDetectorCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface CloudWatchLogsService {
  readonly _: unique symbol;

  /**
   * @see {@link AssociateKmsKeyCommand}
   */
  associateKmsKey(
    args: AssociateKmsKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidOperationException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link CreateDeliveryCommand}
   */
  createDelivery(
    args: CreateDeliveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeliveryResponse,
    | SdkError
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link CreateExportTaskCommand}
   */
  createExportTask(
    args: CreateExportTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateExportTaskResponse,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link CreateLogAnomalyDetectorCommand}
   */
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateLogAnomalyDetectorResponse,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link CreateLogGroupCommand}
   */
  createLogGroup(
    args: CreateLogGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link CreateLogStreamCommand}
   */
  createLogStream(
    args: CreateLogStreamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteAccountPolicyCommand}
   */
  deleteAccountPolicy(
    args: DeleteAccountPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteDataProtectionPolicyCommand}
   */
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteDeliveryCommand}
   */
  deleteDelivery(
    args: DeleteDeliveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link DeleteDeliveryDestinationCommand}
   */
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link DeleteDeliveryDestinationPolicyCommand}
   */
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
  >;

  /**
   * @see {@link DeleteDeliverySourceCommand}
   */
  deleteDeliverySource(
    args: DeleteDeliverySourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link DeleteDestinationCommand}
   */
  deleteDestination(
    args: DeleteDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteLogAnomalyDetectorCommand}
   */
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteLogGroupCommand}
   */
  deleteLogGroup(
    args: DeleteLogGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteLogStreamCommand}
   */
  deleteLogStream(
    args: DeleteLogStreamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteMetricFilterCommand}
   */
  deleteMetricFilter(
    args: DeleteMetricFilterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteQueryDefinitionCommand}
   */
  deleteQueryDefinition(
    args: DeleteQueryDefinitionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteQueryDefinitionResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteRetentionPolicyCommand}
   */
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DeleteSubscriptionFilterCommand}
   */
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeAccountPoliciesCommand}
   */
  describeAccountPolicies(
    args: DescribeAccountPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountPoliciesResponse,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeDeliveriesCommand}
   */
  describeDeliveries(
    args: DescribeDeliveriesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliveriesResponse,
    | SdkError
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDeliveryDestinationsCommand}
   */
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliveryDestinationsResponse,
    | SdkError
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDeliverySourcesCommand}
   */
  describeDeliverySources(
    args: DescribeDeliverySourcesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliverySourcesResponse,
    | SdkError
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDestinationsCommand}
   */
  describeDestinations(
    args: DescribeDestinationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDestinationsResponse,
    SdkError | InvalidParameterException | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportTasksResponse,
    SdkError | InvalidParameterException | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeLogGroupsCommand}
   */
  describeLogGroups(
    args: DescribeLogGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLogGroupsResponse,
    SdkError | InvalidParameterException | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeLogStreamsCommand}
   */
  describeLogStreams(
    args: DescribeLogStreamsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLogStreamsResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeMetricFiltersCommand}
   */
  describeMetricFilters(
    args: DescribeMetricFiltersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMetricFiltersResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeQueriesCommand}
   */
  describeQueries(
    args: DescribeQueriesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueriesResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeQueryDefinitionsCommand}
   */
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueryDefinitionsResponse,
    SdkError | InvalidParameterException | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeResourcePoliciesCommand}
   */
  describeResourcePolicies(
    args: DescribeResourcePoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeResourcePoliciesResponse,
    SdkError | InvalidParameterException | ServiceUnavailableException
  >;

  /**
   * @see {@link DescribeSubscriptionFiltersCommand}
   */
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSubscriptionFiltersResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link DisassociateKmsKeyCommand}
   */
  disassociateKmsKey(
    args: DisassociateKmsKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link FilterLogEventsCommand}
   */
  filterLogEvents(
    args: FilterLogEventsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    FilterLogEventsResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDataProtectionPolicyResponse,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link GetDeliveryCommand}
   */
  getDelivery(
    args: GetDeliveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliveryResponse,
    | SdkError
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link GetDeliveryDestinationCommand}
   */
  getDeliveryDestination(
    args: GetDeliveryDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliveryDestinationResponse,
    | SdkError
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link GetDeliveryDestinationPolicyCommand}
   */
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliveryDestinationPolicyResponse,
    | SdkError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
  >;

  /**
   * @see {@link GetDeliverySourceCommand}
   */
  getDeliverySource(
    args: GetDeliverySourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliverySourceResponse,
    | SdkError
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link GetLogAnomalyDetectorCommand}
   */
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetLogAnomalyDetectorResponse,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link GetLogEventsCommand}
   */
  getLogEvents(
    args: GetLogEventsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetLogEventsResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link GetLogGroupFieldsCommand}
   */
  getLogGroupFields(
    args: GetLogGroupFieldsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetLogGroupFieldsResponse,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link GetLogRecordCommand}
   */
  getLogRecord(
    args: GetLogRecordRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetLogRecordResponse,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
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
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link ListAnomaliesCommand}
   */
  listAnomalies(
    args: ListAnomaliesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAnomaliesResponse,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link ListLogAnomalyDetectorsCommand}
   */
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListLogAnomalyDetectorsResponse,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
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
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link ListTagsLogGroupCommand}
   */
  listTagsLogGroup(
    args: ListTagsLogGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsLogGroupResponse,
    SdkError | ResourceNotFoundException | ServiceUnavailableException
  >;

  /**
   * @see {@link PutAccountPolicyCommand}
   */
  putAccountPolicy(
    args: PutAccountPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountPolicyResponse,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutDataProtectionPolicyResponse,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link PutDeliveryDestinationCommand}
   */
  putDeliveryDestination(
    args: PutDeliveryDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliveryDestinationResponse,
    | SdkError
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link PutDeliveryDestinationPolicyCommand}
   */
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliveryDestinationPolicyResponse,
    | SdkError
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
  >;

  /**
   * @see {@link PutDeliverySourceCommand}
   */
  putDeliverySource(
    args: PutDeliverySourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliverySourceResponse,
    | SdkError
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
  >;

  /**
   * @see {@link PutDestinationCommand}
   */
  putDestination(
    args: PutDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutDestinationResponse,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link PutDestinationPolicyCommand}
   */
  putDestinationPolicy(
    args: PutDestinationPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link PutLogEventsCommand}
   */
  putLogEvents(
    args: PutLogEventsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutLogEventsResponse,
    | SdkError
    | DataAlreadyAcceptedException
    | InvalidParameterException
    | InvalidSequenceTokenException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | UnrecognizedClientException
  >;

  /**
   * @see {@link PutMetricFilterCommand}
   */
  putMetricFilter(
    args: PutMetricFilterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link PutQueryDefinitionCommand}
   */
  putQueryDefinition(
    args: PutQueryDefinitionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutQueryDefinitionResponse,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
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
    | InvalidParameterException
    | LimitExceededException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link PutRetentionPolicyCommand}
   */
  putRetentionPolicy(
    args: PutRetentionPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link PutSubscriptionFilterCommand}
   */
  putSubscriptionFilter(
    args: PutSubscriptionFilterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link StartLiveTailCommand}
   */
  startLiveTail(
    args: StartLiveTailRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartLiveTailResponse,
    | SdkError
    | AccessDeniedException
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
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
    | InvalidParameterException
    | LimitExceededException
    | MalformedQueryException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link StopQueryCommand}
   */
  stopQuery(
    args: StopQueryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopQueryResponse,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link TagLogGroupCommand}
   */
  tagLogGroup(
    args: TagLogGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | InvalidParameterException | ResourceNotFoundException
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyTagsException
  >;

  /**
   * @see {@link TestMetricFilterCommand}
   */
  testMetricFilter(
    args: TestMetricFilterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestMetricFilterResponse,
    SdkError | InvalidParameterException | ServiceUnavailableException
  >;

  /**
   * @see {@link UntagLogGroupCommand}
   */
  untagLogGroup(
    args: UntagLogGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | ResourceNotFoundException>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link UpdateAnomalyCommand}
   */
  updateAnomaly(
    args: UpdateAnomalyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;

  /**
   * @see {@link UpdateLogAnomalyDetectorCommand}
   */
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const CloudWatchLogsService = Context.GenericTag<CloudWatchLogsService>(
  "@effect-aws/client-cloudwatch-logs/CloudWatchLogsService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchLogsService = Effect.gen(function* (_) {
  const client = yield* _(CloudWatchLogsClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkCloudWatchLogsServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkCloudWatchLogsServiceException>
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
  }, {}) as CloudWatchLogsService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseCloudWatchLogsServiceLayer = Layer.effect(
  CloudWatchLogsService,
  makeCloudWatchLogsService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudWatchLogsServiceLayer = BaseCloudWatchLogsServiceLayer.pipe(
  Layer.provide(CloudWatchLogsClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchLogsServiceLayer =
  CloudWatchLogsServiceLayer.pipe(
    Layer.provide(DefaultCloudWatchLogsClientConfigLayer),
  );
