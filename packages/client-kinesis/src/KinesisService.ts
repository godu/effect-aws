/**
 * @since 1.0.0
 */
import {
  KinesisServiceException as SdkKinesisServiceException,
  AddTagsToStreamCommand,
  CreateStreamCommand,
  DecreaseStreamRetentionPeriodCommand,
  DeleteResourcePolicyCommand,
  DeleteStreamCommand,
  DeregisterStreamConsumerCommand,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  DisableEnhancedMonitoringCommand,
  EnableEnhancedMonitoringCommand,
  GetRecordsCommand,
  GetResourcePolicyCommand,
  GetShardIteratorCommand,
  IncreaseStreamRetentionPeriodCommand,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  ListTagsForStreamCommand,
  MergeShardsCommand,
  PutRecordCommand,
  PutRecordsCommand,
  PutResourcePolicyCommand,
  RegisterStreamConsumerCommand,
  RemoveTagsFromStreamCommand,
  SplitShardCommand,
  StartStreamEncryptionCommand,
  StopStreamEncryptionCommand,
  SubscribeToShardCommand,
  UpdateShardCountCommand,
  UpdateStreamModeCommand,
  type AddTagsToStreamInput,
  type CreateStreamInput,
  type DecreaseStreamRetentionPeriodInput,
  type DeleteResourcePolicyInput,
  type DeleteStreamInput,
  type DeregisterStreamConsumerInput,
  type DescribeLimitsInput,
  type DescribeLimitsOutput,
  type DescribeStreamInput,
  type DescribeStreamOutput,
  type DescribeStreamConsumerInput,
  type DescribeStreamConsumerOutput,
  type DescribeStreamSummaryInput,
  type DescribeStreamSummaryOutput,
  type DisableEnhancedMonitoringInput,
  type EnhancedMonitoringOutput,
  type EnableEnhancedMonitoringInput,
  type GetRecordsInput,
  type GetRecordsOutput,
  type GetResourcePolicyInput,
  type GetResourcePolicyOutput,
  type GetShardIteratorInput,
  type GetShardIteratorOutput,
  type IncreaseStreamRetentionPeriodInput,
  type ListShardsInput,
  type ListShardsOutput,
  type ListStreamConsumersInput,
  type ListStreamConsumersOutput,
  type ListStreamsInput,
  type ListStreamsOutput,
  type ListTagsForStreamInput,
  type ListTagsForStreamOutput,
  type MergeShardsInput,
  type PutRecordInput,
  type PutRecordOutput,
  type PutRecordsInput,
  type PutRecordsOutput,
  type PutResourcePolicyInput,
  type RegisterStreamConsumerInput,
  type RegisterStreamConsumerOutput,
  type RemoveTagsFromStreamInput,
  type SplitShardInput,
  type StartStreamEncryptionInput,
  type StopStreamEncryptionInput,
  type SubscribeToShardInput,
  type SubscribeToShardOutput,
  type UpdateShardCountInput,
  type UpdateShardCountOutput,
  type UpdateStreamModeInput,
} from "@aws-sdk/client-kinesis";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type AccessDeniedException,
  type InvalidArgumentException,
  type LimitExceededException,
  type ResourceInUseException,
  type ResourceNotFoundException,
  type ExpiredIteratorException,
  type KMSAccessDeniedException,
  type KMSDisabledException,
  type KMSInvalidStateException,
  type KMSNotFoundException,
  type KMSOptInRequired,
  type KMSThrottlingException,
  type ProvisionedThroughputExceededException,
  type ExpiredNextTokenException,
  type ValidationException,
  type TaggedException,
  SdkError,
} from "./Errors";
import {
  KinesisClientInstance,
  KinesisClientInstanceLayer,
} from "./KinesisClientInstance";
import { DefaultKinesisClientConfigLayer } from "./KinesisClientInstanceConfig";

const commands = {
  AddTagsToStreamCommand,
  CreateStreamCommand,
  DecreaseStreamRetentionPeriodCommand,
  DeleteResourcePolicyCommand,
  DeleteStreamCommand,
  DeregisterStreamConsumerCommand,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  DisableEnhancedMonitoringCommand,
  EnableEnhancedMonitoringCommand,
  GetRecordsCommand,
  GetResourcePolicyCommand,
  GetShardIteratorCommand,
  IncreaseStreamRetentionPeriodCommand,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  ListTagsForStreamCommand,
  MergeShardsCommand,
  PutRecordCommand,
  PutRecordsCommand,
  PutResourcePolicyCommand,
  RegisterStreamConsumerCommand,
  RemoveTagsFromStreamCommand,
  SplitShardCommand,
  StartStreamEncryptionCommand,
  StopStreamEncryptionCommand,
  SubscribeToShardCommand,
  UpdateShardCountCommand,
  UpdateStreamModeCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface KinesisService {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToStreamCommand}
   */
  addTagsToStream(
    args: AddTagsToStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link CreateStreamCommand}
   */
  createStream(
    args: CreateStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
  >;

  /**
   * @see {@link DecreaseStreamRetentionPeriodCommand}
   */
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteStreamCommand}
   */
  deleteStream(
    args: DeleteStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeregisterStreamConsumerCommand}
   */
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(
    args: DescribeLimitsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLimitsOutput, SdkError | LimitExceededException>;

  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(
    args: DescribeStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStreamOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeStreamConsumerCommand}
   */
  describeStreamConsumer(
    args: DescribeStreamConsumerInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStreamConsumerOutput,
    | SdkError
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeStreamSummaryCommand}
   */
  describeStreamSummary(
    args: DescribeStreamSummaryInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStreamSummaryOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DisableEnhancedMonitoringCommand}
   */
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnhancedMonitoringOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link EnableEnhancedMonitoringCommand}
   */
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnhancedMonitoringOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link GetRecordsCommand}
   */
  getRecords(
    args: GetRecordsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetRecordsOutput,
    | SdkError
    | AccessDeniedException
    | ExpiredIteratorException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link GetShardIteratorCommand}
   */
  getShardIterator(
    args: GetShardIteratorInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetShardIteratorOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link IncreaseStreamRetentionPeriodCommand}
   */
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link ListShardsCommand}
   */
  listShards(
    args: ListShardsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListShardsOutput,
    | SdkError
    | AccessDeniedException
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link ListStreamConsumersCommand}
   */
  listStreamConsumers(
    args: ListStreamConsumersInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamConsumersOutput,
    | SdkError
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(
    args: ListStreamsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamsOutput,
    | SdkError
    | ExpiredNextTokenException
    | InvalidArgumentException
    | LimitExceededException
  >;

  /**
   * @see {@link ListTagsForStreamCommand}
   */
  listTagsForStream(
    args: ListTagsForStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForStreamOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link MergeShardsCommand}
   */
  mergeShards(
    args: MergeShardsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link PutRecordCommand}
   */
  putRecord(
    args: PutRecordInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutRecordOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link PutRecordsCommand}
   */
  putRecords(
    args: PutRecordsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutRecordsOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link RegisterStreamConsumerCommand}
   */
  registerStreamConsumer(
    args: RegisterStreamConsumerInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterStreamConsumerOutput,
    | SdkError
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link RemoveTagsFromStreamCommand}
   */
  removeTagsFromStream(
    args: RemoveTagsFromStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link SplitShardCommand}
   */
  splitShard(
    args: SplitShardInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link StartStreamEncryptionCommand}
   */
  startStreamEncryption(
    args: StartStreamEncryptionInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link StopStreamEncryptionCommand}
   */
  stopStreamEncryption(
    args: StopStreamEncryptionInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link SubscribeToShardCommand}
   */
  subscribeToShard(
    args: SubscribeToShardInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SubscribeToShardOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link UpdateShardCountCommand}
   */
  updateShardCount(
    args: UpdateShardCountInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateShardCountOutput,
    | SdkError
    | AccessDeniedException
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateStreamModeCommand}
   */
  updateStreamMode(
    args: UpdateStreamModeInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidArgumentException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const KinesisService = Context.GenericTag<KinesisService>(
  "@effect-aws/client-kinesis/KinesisService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKinesisService = Effect.gen(function* (_) {
  const client = yield* _(KinesisClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkKinesisServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkKinesisServiceException>
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
  }, {}) as KinesisService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseKinesisServiceLayer = Layer.effect(
  KinesisService,
  makeKinesisService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const KinesisServiceLayer = BaseKinesisServiceLayer.pipe(
  Layer.provide(KinesisClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultKinesisServiceLayer = KinesisServiceLayer.pipe(
  Layer.provide(DefaultKinesisClientConfigLayer),
);
