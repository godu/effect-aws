/**
 * @since 1.0.0
 */
import {
  MqServiceException as SdkMqServiceException,
  CreateBrokerCommand,
  CreateConfigurationCommand,
  CreateTagsCommand,
  CreateUserCommand,
  DeleteBrokerCommand,
  DeleteTagsCommand,
  DeleteUserCommand,
  DescribeBrokerCommand,
  DescribeBrokerEngineTypesCommand,
  DescribeBrokerInstanceOptionsCommand,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeUserCommand,
  ListBrokersCommand,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListTagsCommand,
  ListUsersCommand,
  PromoteCommand,
  RebootBrokerCommand,
  UpdateBrokerCommand,
  UpdateConfigurationCommand,
  UpdateUserCommand,
  type CreateBrokerRequest,
  type CreateBrokerResponse,
  type CreateConfigurationRequest,
  type CreateConfigurationResponse,
  type CreateTagsRequest,
  type CreateUserRequest,
  type CreateUserResponse,
  type DeleteBrokerRequest,
  type DeleteBrokerResponse,
  type DeleteTagsRequest,
  type DeleteUserRequest,
  type DeleteUserResponse,
  type DescribeBrokerRequest,
  type DescribeBrokerResponse,
  type DescribeBrokerEngineTypesRequest,
  type DescribeBrokerEngineTypesResponse,
  type DescribeBrokerInstanceOptionsRequest,
  type DescribeBrokerInstanceOptionsResponse,
  type DescribeConfigurationRequest,
  type DescribeConfigurationResponse,
  type DescribeConfigurationRevisionRequest,
  type DescribeConfigurationRevisionResponse,
  type DescribeUserRequest,
  type DescribeUserResponse,
  type ListBrokersRequest,
  type ListBrokersResponse,
  type ListConfigurationRevisionsRequest,
  type ListConfigurationRevisionsResponse,
  type ListConfigurationsRequest,
  type ListConfigurationsResponse,
  type ListTagsRequest,
  type ListTagsResponse,
  type ListUsersRequest,
  type ListUsersResponse,
  type PromoteRequest,
  type PromoteResponse,
  type RebootBrokerRequest,
  type RebootBrokerResponse,
  type UpdateBrokerRequest,
  type UpdateBrokerResponse,
  type UpdateConfigurationRequest,
  type UpdateConfigurationResponse,
  type UpdateUserRequest,
  type UpdateUserResponse,
} from "@aws-sdk/client-mq";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type BadRequestException,
  type ConflictException,
  type ForbiddenException,
  type InternalServerErrorException,
  type UnauthorizedException,
  type NotFoundException,
  type TaggedException,
  SdkError,
} from "./Errors";
import { MqClientInstance, MqClientInstanceLayer } from "./MqClientInstance";
import { DefaultMqClientConfigLayer } from "./MqClientInstanceConfig";

const commands = {
  CreateBrokerCommand,
  CreateConfigurationCommand,
  CreateTagsCommand,
  CreateUserCommand,
  DeleteBrokerCommand,
  DeleteTagsCommand,
  DeleteUserCommand,
  DescribeBrokerCommand,
  DescribeBrokerEngineTypesCommand,
  DescribeBrokerInstanceOptionsCommand,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeUserCommand,
  ListBrokersCommand,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListTagsCommand,
  ListUsersCommand,
  PromoteCommand,
  RebootBrokerCommand,
  UpdateBrokerCommand,
  UpdateConfigurationCommand,
  UpdateUserCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface MqService {
  readonly _: unique symbol;

  /**
   * @see {@link CreateBrokerCommand}
   */
  createBroker(
    args: CreateBrokerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateBrokerResponse,
    | SdkError
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
  >;

  /**
   * @see {@link CreateConfigurationCommand}
   */
  createConfiguration(
    args: CreateConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateConfigurationResponse,
    | SdkError
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
  >;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserResponse,
    | SdkError
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link DeleteBrokerCommand}
   */
  deleteBroker(
    args: DeleteBrokerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBrokerResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link DescribeBrokerCommand}
   */
  describeBroker(
    args: DescribeBrokerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link DescribeBrokerEngineTypesCommand}
   */
  describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerEngineTypesResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
  >;

  /**
   * @see {@link DescribeBrokerInstanceOptionsCommand}
   */
  describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerInstanceOptionsResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
  >;

  /**
   * @see {@link DescribeConfigurationCommand}
   */
  describeConfiguration(
    args: DescribeConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link DescribeConfigurationRevisionCommand}
   */
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationRevisionResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link ListBrokersCommand}
   */
  listBrokers(
    args: ListBrokersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListBrokersResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
  >;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   */
  listConfigurationRevisions(
    args: ListConfigurationRevisionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationRevisionsResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(
    args: ListConfigurationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationsResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
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
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListUsersResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link PromoteCommand}
   */
  promote(
    args: PromoteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PromoteResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link RebootBrokerCommand}
   */
  rebootBroker(
    args: RebootBrokerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RebootBrokerResponse,
    | SdkError
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link UpdateBrokerCommand}
   */
  updateBroker(
    args: UpdateBrokerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBrokerResponse,
    | SdkError
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link UpdateConfigurationCommand}
   */
  updateConfiguration(
    args: UpdateConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationResponse,
    | SdkError
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserResponse,
    | SdkError
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const MqService = Context.GenericTag<MqService>(
  "@effect-aws/client-mq/MqService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeMqService = Effect.gen(function* (_) {
  const client = yield* _(MqClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkMqServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkMqServiceException>
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
  }, {}) as MqService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseMqServiceLayer = Layer.effect(MqService, makeMqService);

/**
 * @since 1.0.0
 * @category layers
 */
export const MqServiceLayer = BaseMqServiceLayer.pipe(
  Layer.provide(MqClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultMqServiceLayer = MqServiceLayer.pipe(
  Layer.provide(DefaultMqClientConfigLayer),
);
