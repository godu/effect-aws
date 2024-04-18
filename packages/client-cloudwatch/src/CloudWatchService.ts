/**
 * @since 1.0.0
 */
import {
  CloudWatchServiceException as SdkCloudWatchServiceException,
  DeleteAlarmsCommand,
  DeleteAnomalyDetectorCommand,
  DeleteDashboardsCommand,
  DeleteInsightRulesCommand,
  DeleteMetricStreamCommand,
  DescribeAlarmHistoryCommand,
  DescribeAlarmsCommand,
  DescribeAlarmsForMetricCommand,
  DescribeAnomalyDetectorsCommand,
  DescribeInsightRulesCommand,
  DisableAlarmActionsCommand,
  DisableInsightRulesCommand,
  EnableAlarmActionsCommand,
  EnableInsightRulesCommand,
  GetDashboardCommand,
  GetInsightRuleReportCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  GetMetricStreamCommand,
  GetMetricWidgetImageCommand,
  ListDashboardsCommand,
  ListManagedInsightRulesCommand,
  ListMetricStreamsCommand,
  ListMetricsCommand,
  ListTagsForResourceCommand,
  PutAnomalyDetectorCommand,
  PutCompositeAlarmCommand,
  PutDashboardCommand,
  PutInsightRuleCommand,
  PutManagedInsightRulesCommand,
  PutMetricAlarmCommand,
  PutMetricDataCommand,
  PutMetricStreamCommand,
  SetAlarmStateCommand,
  StartMetricStreamsCommand,
  StopMetricStreamsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  type DeleteAlarmsInput,
  type DeleteAnomalyDetectorInput,
  type DeleteAnomalyDetectorOutput,
  type DeleteDashboardsInput,
  type DeleteDashboardsOutput,
  type DeleteInsightRulesInput,
  type DeleteInsightRulesOutput,
  type DeleteMetricStreamInput,
  type DeleteMetricStreamOutput,
  type DescribeAlarmHistoryInput,
  type DescribeAlarmHistoryOutput,
  type DescribeAlarmsInput,
  type DescribeAlarmsOutput,
  type DescribeAlarmsForMetricInput,
  type DescribeAlarmsForMetricOutput,
  type DescribeAnomalyDetectorsInput,
  type DescribeAnomalyDetectorsOutput,
  type DescribeInsightRulesInput,
  type DescribeInsightRulesOutput,
  type DisableAlarmActionsInput,
  type DisableInsightRulesInput,
  type DisableInsightRulesOutput,
  type EnableAlarmActionsInput,
  type EnableInsightRulesInput,
  type EnableInsightRulesOutput,
  type GetDashboardInput,
  type GetDashboardOutput,
  type GetInsightRuleReportInput,
  type GetInsightRuleReportOutput,
  type GetMetricDataInput,
  type GetMetricDataOutput,
  type GetMetricStatisticsInput,
  type GetMetricStatisticsOutput,
  type GetMetricStreamInput,
  type GetMetricStreamOutput,
  type GetMetricWidgetImageInput,
  type GetMetricWidgetImageOutput,
  type ListDashboardsInput,
  type ListDashboardsOutput,
  type ListManagedInsightRulesInput,
  type ListManagedInsightRulesOutput,
  type ListMetricStreamsInput,
  type ListMetricStreamsOutput,
  type ListMetricsInput,
  type ListMetricsOutput,
  type ListTagsForResourceInput,
  type ListTagsForResourceOutput,
  type PutAnomalyDetectorInput,
  type PutAnomalyDetectorOutput,
  type PutCompositeAlarmInput,
  type PutDashboardInput,
  type PutDashboardOutput,
  type PutInsightRuleInput,
  type PutInsightRuleOutput,
  type PutManagedInsightRulesInput,
  type PutManagedInsightRulesOutput,
  type PutMetricAlarmInput,
  type PutMetricDataInput,
  type PutMetricStreamInput,
  type PutMetricStreamOutput,
  type SetAlarmStateInput,
  type StartMetricStreamsInput,
  type StartMetricStreamsOutput,
  type StopMetricStreamsInput,
  type StopMetricStreamsOutput,
  type TagResourceInput,
  type TagResourceOutput,
  type UntagResourceInput,
  type UntagResourceOutput,
} from "@aws-sdk/client-cloudwatch";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  CloudWatchClientInstance,
  CloudWatchClientInstanceLayer,
} from "./CloudWatchClientInstance";
import { DefaultCloudWatchClientConfigLayer } from "./CloudWatchClientInstanceConfig";
import {
  type ResourceNotFound,
  type InternalServiceFault,
  type InvalidParameterCombinationException,
  type InvalidParameterValueException,
  type MissingRequiredParameterException,
  type ResourceNotFoundException,
  type DashboardNotFoundError,
  type InvalidNextToken,
  type LimitExceededException,
  type LimitExceededFault,
  type DashboardInvalidInputError,
  type ConcurrentModificationException,
  type InvalidFormatFault,
  type TaggedException,
  SdkError,
} from "./Errors";

const commands = {
  DeleteAlarmsCommand,
  DeleteAnomalyDetectorCommand,
  DeleteDashboardsCommand,
  DeleteInsightRulesCommand,
  DeleteMetricStreamCommand,
  DescribeAlarmHistoryCommand,
  DescribeAlarmsCommand,
  DescribeAlarmsForMetricCommand,
  DescribeAnomalyDetectorsCommand,
  DescribeInsightRulesCommand,
  DisableAlarmActionsCommand,
  DisableInsightRulesCommand,
  EnableAlarmActionsCommand,
  EnableInsightRulesCommand,
  GetDashboardCommand,
  GetInsightRuleReportCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  GetMetricStreamCommand,
  GetMetricWidgetImageCommand,
  ListDashboardsCommand,
  ListManagedInsightRulesCommand,
  ListMetricStreamsCommand,
  ListMetricsCommand,
  ListTagsForResourceCommand,
  PutAnomalyDetectorCommand,
  PutCompositeAlarmCommand,
  PutDashboardCommand,
  PutInsightRuleCommand,
  PutManagedInsightRulesCommand,
  PutMetricAlarmCommand,
  PutMetricDataCommand,
  PutMetricStreamCommand,
  SetAlarmStateCommand,
  StartMetricStreamsCommand,
  StopMetricStreamsCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface CloudWatchService {
  readonly _: unique symbol;

  /**
   * @see {@link DeleteAlarmsCommand}
   */
  deleteAlarms(
    args: DeleteAlarmsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | ResourceNotFound>;

  /**
   * @see {@link DeleteAnomalyDetectorCommand}
   */
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAnomalyDetectorOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteDashboardsCommand}
   */
  deleteDashboards(
    args: DeleteDashboardsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDashboardsOutput,
    | SdkError
    | DashboardNotFoundError
    | InternalServiceFault
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DeleteInsightRulesCommand}
   */
  deleteInsightRules(
    args: DeleteInsightRulesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInsightRulesOutput,
    | SdkError
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link DeleteMetricStreamCommand}
   */
  deleteMetricStream(
    args: DeleteMetricStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMetricStreamOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link DescribeAlarmHistoryCommand}
   */
  describeAlarmHistory(
    args: DescribeAlarmHistoryInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAlarmHistoryOutput, SdkError | InvalidNextToken>;

  /**
   * @see {@link DescribeAlarmsCommand}
   */
  describeAlarms(
    args: DescribeAlarmsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAlarmsOutput, SdkError | InvalidNextToken>;

  /**
   * @see {@link DescribeAlarmsForMetricCommand}
   */
  describeAlarmsForMetric(
    args: DescribeAlarmsForMetricInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAlarmsForMetricOutput, SdkError>;

  /**
   * @see {@link DescribeAnomalyDetectorsCommand}
   */
  describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAnomalyDetectorsOutput,
    | SdkError
    | InternalServiceFault
    | InvalidNextToken
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeInsightRulesCommand}
   */
  describeInsightRules(
    args: DescribeInsightRulesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInsightRulesOutput, SdkError | InvalidNextToken>;

  /**
   * @see {@link DisableAlarmActionsCommand}
   */
  disableAlarmActions(
    args: DisableAlarmActionsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DisableInsightRulesCommand}
   */
  disableInsightRules(
    args: DisableInsightRulesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisableInsightRulesOutput,
    | SdkError
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link EnableAlarmActionsCommand}
   */
  enableAlarmActions(
    args: EnableAlarmActionsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link EnableInsightRulesCommand}
   */
  enableInsightRules(
    args: EnableInsightRulesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnableInsightRulesOutput,
    | SdkError
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link GetDashboardCommand}
   */
  getDashboard(
    args: GetDashboardInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDashboardOutput,
    | SdkError
    | DashboardNotFoundError
    | InternalServiceFault
    | InvalidParameterValueException
  >;

  /**
   * @see {@link GetInsightRuleReportCommand}
   */
  getInsightRuleReport(
    args: GetInsightRuleReportInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetInsightRuleReportOutput,
    | SdkError
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link GetMetricDataCommand}
   */
  getMetricData(
    args: GetMetricDataInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetMetricDataOutput, SdkError | InvalidNextToken>;

  /**
   * @see {@link GetMetricStatisticsCommand}
   */
  getMetricStatistics(
    args: GetMetricStatisticsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricStatisticsOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link GetMetricStreamCommand}
   */
  getMetricStream(
    args: GetMetricStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricStreamOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link GetMetricWidgetImageCommand}
   */
  getMetricWidgetImage(
    args: GetMetricWidgetImageInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetMetricWidgetImageOutput, SdkError>;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDashboardsOutput,
    SdkError | InternalServiceFault | InvalidParameterValueException
  >;

  /**
   * @see {@link ListManagedInsightRulesCommand}
   */
  listManagedInsightRules(
    args: ListManagedInsightRulesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListManagedInsightRulesOutput,
    | SdkError
    | InvalidNextToken
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link ListMetricStreamsCommand}
   */
  listMetricStreams(
    args: ListMetricStreamsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListMetricStreamsOutput,
    | SdkError
    | InternalServiceFault
    | InvalidNextToken
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link ListMetricsCommand}
   */
  listMetrics(
    args: ListMetricsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListMetricsOutput,
    SdkError | InternalServiceFault | InvalidParameterValueException
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link PutAnomalyDetectorCommand}
   */
  putAnomalyDetector(
    args: PutAnomalyDetectorInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutAnomalyDetectorOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link PutCompositeAlarmCommand}
   */
  putCompositeAlarm(
    args: PutCompositeAlarmInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | LimitExceededFault>;

  /**
   * @see {@link PutDashboardCommand}
   */
  putDashboard(
    args: PutDashboardInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutDashboardOutput,
    SdkError | DashboardInvalidInputError | InternalServiceFault
  >;

  /**
   * @see {@link PutInsightRuleCommand}
   */
  putInsightRule(
    args: PutInsightRuleInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutInsightRuleOutput,
    | SdkError
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link PutManagedInsightRulesCommand}
   */
  putManagedInsightRules(
    args: PutManagedInsightRulesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutManagedInsightRulesOutput,
    | SdkError
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link PutMetricAlarmCommand}
   */
  putMetricAlarm(
    args: PutMetricAlarmInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | LimitExceededFault>;

  /**
   * @see {@link PutMetricDataCommand}
   */
  putMetricData(
    args: PutMetricDataInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link PutMetricStreamCommand}
   */
  putMetricStream(
    args: PutMetricStreamInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricStreamOutput,
    | SdkError
    | ConcurrentModificationException
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link SetAlarmStateCommand}
   */
  setAlarmState(
    args: SetAlarmStateInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | InvalidFormatFault | ResourceNotFound>;

  /**
   * @see {@link StartMetricStreamsCommand}
   */
  startMetricStreams(
    args: StartMetricStreamsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartMetricStreamsOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link StopMetricStreamsCommand}
   */
  stopMetricStreams(
    args: StopMetricStreamsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopMetricStreamsOutput,
    | SdkError
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceOutput,
    | SdkError
    | ConcurrentModificationException
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceOutput,
    | SdkError
    | ConcurrentModificationException
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const CloudWatchService = Context.GenericTag<CloudWatchService>(
  "@effect-aws/client-cloudwatch/CloudWatchService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchService = Effect.gen(function* (_) {
  const client = yield* _(CloudWatchClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkCloudWatchServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkCloudWatchServiceException>
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
  }, {}) as CloudWatchService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseCloudWatchServiceLayer = Layer.effect(
  CloudWatchService,
  makeCloudWatchService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudWatchServiceLayer = BaseCloudWatchServiceLayer.pipe(
  Layer.provide(CloudWatchClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchServiceLayer = CloudWatchServiceLayer.pipe(
  Layer.provide(DefaultCloudWatchClientConfigLayer),
);
