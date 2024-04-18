/**
 * @since 1.0.0
 */
import {
  CloudWatchEventsServiceException as SdkCloudWatchEventsServiceException,
  ActivateEventSourceCommand,
  CancelReplayCommand,
  CreateApiDestinationCommand,
  CreateArchiveCommand,
  CreateConnectionCommand,
  CreateEventBusCommand,
  CreatePartnerEventSourceCommand,
  DeactivateEventSourceCommand,
  DeauthorizeConnectionCommand,
  DeleteApiDestinationCommand,
  DeleteArchiveCommand,
  DeleteConnectionCommand,
  DeleteEventBusCommand,
  DeletePartnerEventSourceCommand,
  DeleteRuleCommand,
  DescribeApiDestinationCommand,
  DescribeArchiveCommand,
  DescribeConnectionCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribePartnerEventSourceCommand,
  DescribeReplayCommand,
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
  ListApiDestinationsCommand,
  ListArchivesCommand,
  ListConnectionsCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourcesCommand,
  ListReplaysCommand,
  ListRuleNamesByTargetCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsByRuleCommand,
  PutEventsCommand,
  PutPartnerEventsCommand,
  PutPermissionCommand,
  PutRuleCommand,
  PutTargetsCommand,
  RemovePermissionCommand,
  RemoveTargetsCommand,
  StartReplayCommand,
  TagResourceCommand,
  TestEventPatternCommand,
  UntagResourceCommand,
  UpdateApiDestinationCommand,
  UpdateArchiveCommand,
  UpdateConnectionCommand,
  type ActivateEventSourceRequest,
  type CancelReplayRequest,
  type CancelReplayResponse,
  type CreateApiDestinationRequest,
  type CreateApiDestinationResponse,
  type CreateArchiveRequest,
  type CreateArchiveResponse,
  type CreateConnectionRequest,
  type CreateConnectionResponse,
  type CreateEventBusRequest,
  type CreateEventBusResponse,
  type CreatePartnerEventSourceRequest,
  type CreatePartnerEventSourceResponse,
  type DeactivateEventSourceRequest,
  type DeauthorizeConnectionRequest,
  type DeauthorizeConnectionResponse,
  type DeleteApiDestinationRequest,
  type DeleteApiDestinationResponse,
  type DeleteArchiveRequest,
  type DeleteArchiveResponse,
  type DeleteConnectionRequest,
  type DeleteConnectionResponse,
  type DeleteEventBusRequest,
  type DeletePartnerEventSourceRequest,
  type DeleteRuleRequest,
  type DescribeApiDestinationRequest,
  type DescribeApiDestinationResponse,
  type DescribeArchiveRequest,
  type DescribeArchiveResponse,
  type DescribeConnectionRequest,
  type DescribeConnectionResponse,
  type DescribeEventBusRequest,
  type DescribeEventBusResponse,
  type DescribeEventSourceRequest,
  type DescribeEventSourceResponse,
  type DescribePartnerEventSourceRequest,
  type DescribePartnerEventSourceResponse,
  type DescribeReplayRequest,
  type DescribeReplayResponse,
  type DescribeRuleRequest,
  type DescribeRuleResponse,
  type DisableRuleRequest,
  type EnableRuleRequest,
  type ListApiDestinationsRequest,
  type ListApiDestinationsResponse,
  type ListArchivesRequest,
  type ListArchivesResponse,
  type ListConnectionsRequest,
  type ListConnectionsResponse,
  type ListEventBusesRequest,
  type ListEventBusesResponse,
  type ListEventSourcesRequest,
  type ListEventSourcesResponse,
  type ListPartnerEventSourceAccountsRequest,
  type ListPartnerEventSourceAccountsResponse,
  type ListPartnerEventSourcesRequest,
  type ListPartnerEventSourcesResponse,
  type ListReplaysRequest,
  type ListReplaysResponse,
  type ListRuleNamesByTargetRequest,
  type ListRuleNamesByTargetResponse,
  type ListRulesRequest,
  type ListRulesResponse,
  type ListTagsForResourceRequest,
  type ListTagsForResourceResponse,
  type ListTargetsByRuleRequest,
  type ListTargetsByRuleResponse,
  type PutEventsRequest,
  type PutEventsResponse,
  type PutPartnerEventsRequest,
  type PutPartnerEventsResponse,
  type PutPermissionRequest,
  type PutRuleRequest,
  type PutRuleResponse,
  type PutTargetsRequest,
  type PutTargetsResponse,
  type RemovePermissionRequest,
  type RemoveTargetsRequest,
  type RemoveTargetsResponse,
  type StartReplayRequest,
  type StartReplayResponse,
  type TagResourceRequest,
  type TagResourceResponse,
  type TestEventPatternRequest,
  type TestEventPatternResponse,
  type UntagResourceRequest,
  type UntagResourceResponse,
  type UpdateApiDestinationRequest,
  type UpdateApiDestinationResponse,
  type UpdateArchiveRequest,
  type UpdateArchiveResponse,
  type UpdateConnectionRequest,
  type UpdateConnectionResponse,
} from "@aws-sdk/client-cloudwatch-events";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  CloudWatchEventsClientInstance,
  CloudWatchEventsClientInstanceLayer,
} from "./CloudWatchEventsClientInstance";
import { DefaultCloudWatchEventsClientConfigLayer } from "./CloudWatchEventsClientInstanceConfig";
import {
  type ConcurrentModificationException,
  type InternalException,
  type InvalidStateException,
  type OperationDisabledException,
  type ResourceNotFoundException,
  type IllegalStatusException,
  type LimitExceededException,
  type ResourceAlreadyExistsException,
  type InvalidEventPatternException,
  type ManagedRuleException,
  type PolicyLengthExceededException,
  type TaggedException,
  SdkError,
} from "./Errors";

const commands = {
  ActivateEventSourceCommand,
  CancelReplayCommand,
  CreateApiDestinationCommand,
  CreateArchiveCommand,
  CreateConnectionCommand,
  CreateEventBusCommand,
  CreatePartnerEventSourceCommand,
  DeactivateEventSourceCommand,
  DeauthorizeConnectionCommand,
  DeleteApiDestinationCommand,
  DeleteArchiveCommand,
  DeleteConnectionCommand,
  DeleteEventBusCommand,
  DeletePartnerEventSourceCommand,
  DeleteRuleCommand,
  DescribeApiDestinationCommand,
  DescribeArchiveCommand,
  DescribeConnectionCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribePartnerEventSourceCommand,
  DescribeReplayCommand,
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
  ListApiDestinationsCommand,
  ListArchivesCommand,
  ListConnectionsCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourcesCommand,
  ListReplaysCommand,
  ListRuleNamesByTargetCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsByRuleCommand,
  PutEventsCommand,
  PutPartnerEventsCommand,
  PutPermissionCommand,
  PutRuleCommand,
  PutTargetsCommand,
  RemovePermissionCommand,
  RemoveTargetsCommand,
  StartReplayCommand,
  TagResourceCommand,
  TestEventPatternCommand,
  UntagResourceCommand,
  UpdateApiDestinationCommand,
  UpdateArchiveCommand,
  UpdateConnectionCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface CloudWatchEventsService {
  readonly _: unique symbol;

  /**
   * @see {@link ActivateEventSourceCommand}
   */
  activateEventSource(
    args: ActivateEventSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | OperationDisabledException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link CancelReplayCommand}
   */
  cancelReplay(
    args: CancelReplayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelReplayResponse,
    | SdkError
    | ConcurrentModificationException
    | IllegalStatusException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link CreateApiDestinationCommand}
   */
  createApiDestination(
    args: CreateApiDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateApiDestinationResponse,
    | SdkError
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(
    args: CreateArchiveRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateArchiveResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectionResponse,
    | SdkError
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
  >;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventBusResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | LimitExceededException
    | OperationDisabledException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link CreatePartnerEventSourceCommand}
   */
  createPartnerEventSource(
    args: CreatePartnerEventSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePartnerEventSourceResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | OperationDisabledException
    | ResourceAlreadyExistsException
  >;

  /**
   * @see {@link DeactivateEventSourceCommand}
   */
  deactivateEventSource(
    args: DeactivateEventSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | InvalidStateException
    | OperationDisabledException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeauthorizeConnectionCommand}
   */
  deauthorizeConnection(
    args: DeauthorizeConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeauthorizeConnectionResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteApiDestinationCommand}
   */
  deleteApiDestination(
    args: DeleteApiDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApiDestinationResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteArchiveResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | ConcurrentModificationException | InternalException
  >;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
  >;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeApiDestinationCommand}
   */
  describeApiDestination(
    args: DescribeApiDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeApiDestinationResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeArchiveResponse,
    | SdkError
    | InternalException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeConnectionCommand}
   */
  describeConnection(
    args: DescribeConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectionResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventBusResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventSourceResponse,
    | SdkError
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePartnerEventSourceResponse,
    | SdkError
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplayResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(
    args: DescribeRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRuleResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(
    args: DisableRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link EnableRuleCommand}
   */
  enableRule(
    args: EnableRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link ListApiDestinationsCommand}
   */
  listApiDestinations(
    args: ListApiDestinationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListApiDestinationsResponse, SdkError | InternalException>;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(
    args: ListArchivesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListArchivesResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListConnectionsResponse, SdkError | InternalException>;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(
    args: ListEventBusesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListEventBusesResponse, SdkError | InternalException>;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(
    args: ListEventSourcesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourcesResponse,
    SdkError | InternalException | OperationDisabledException
  >;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourceAccountsResponse,
    | SdkError
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourcesResponse,
    SdkError | InternalException | OperationDisabledException
  >;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(
    args: ListReplaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListReplaysResponse, SdkError | InternalException>;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListRuleNamesByTargetResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListRulesResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTargetsByRuleResponse,
    SdkError | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutEventsResponse, SdkError | InternalException>;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutPartnerEventsResponse,
    SdkError | InternalException | OperationDisabledException
  >;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(
    args: PutPermissionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | PolicyLengthExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link PutRuleCommand}
   */
  putRule(
    args: PutRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutRuleResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link PutTargetsCommand}
   */
  putTargets(
    args: PutTargetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutTargetsResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | OperationDisabledException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link RemoveTargetsCommand}
   */
  removeTargets(
    args: RemoveTargetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTargetsResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link StartReplayCommand}
   */
  startReplay(
    args: StartReplayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartReplayResponse,
    | SdkError
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
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
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link TestEventPatternCommand}
   */
  testEventPattern(
    args: TestEventPatternRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestEventPatternResponse,
    SdkError | InternalException | InvalidEventPatternException
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
    | ConcurrentModificationException
    | InternalException
    | ManagedRuleException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link UpdateApiDestinationCommand}
   */
  updateApiDestination(
    args: UpdateApiDestinationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApiDestinationResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(
    args: UpdateArchiveRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateArchiveResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | InvalidEventPatternException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectionResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const CloudWatchEventsService =
  Context.GenericTag<CloudWatchEventsService>(
    "@effect-aws/client-cloudwatch-events/CloudWatchEventsService",
  );

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchEventsService = Effect.gen(function* (_) {
  const client = yield* _(CloudWatchEventsClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkCloudWatchEventsServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkCloudWatchEventsServiceException>
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
  }, {}) as CloudWatchEventsService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseCloudWatchEventsServiceLayer = Layer.effect(
  CloudWatchEventsService,
  makeCloudWatchEventsService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudWatchEventsServiceLayer =
  BaseCloudWatchEventsServiceLayer.pipe(
    Layer.provide(CloudWatchEventsClientInstanceLayer),
  );

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchEventsServiceLayer =
  CloudWatchEventsServiceLayer.pipe(
    Layer.provide(DefaultCloudWatchEventsClientConfigLayer),
  );
