/**
 * @since 1.0.0
 */
import {
  CloudSearchServiceException as SdkCloudSearchServiceException,
  BuildSuggestersCommand,
  CreateDomainCommand,
  DefineAnalysisSchemeCommand,
  DefineExpressionCommand,
  DefineIndexFieldCommand,
  DefineSuggesterCommand,
  DeleteAnalysisSchemeCommand,
  DeleteDomainCommand,
  DeleteExpressionCommand,
  DeleteIndexFieldCommand,
  DeleteSuggesterCommand,
  DescribeAnalysisSchemesCommand,
  DescribeAvailabilityOptionsCommand,
  DescribeDomainEndpointOptionsCommand,
  DescribeDomainsCommand,
  DescribeExpressionsCommand,
  DescribeIndexFieldsCommand,
  DescribeScalingParametersCommand,
  DescribeServiceAccessPoliciesCommand,
  DescribeSuggestersCommand,
  IndexDocumentsCommand,
  ListDomainNamesCommand,
  UpdateAvailabilityOptionsCommand,
  UpdateDomainEndpointOptionsCommand,
  UpdateScalingParametersCommand,
  UpdateServiceAccessPoliciesCommand,
  type BuildSuggestersRequest,
  type BuildSuggestersResponse,
  type CreateDomainRequest,
  type CreateDomainResponse,
  type DefineAnalysisSchemeRequest,
  type DefineAnalysisSchemeResponse,
  type DefineExpressionRequest,
  type DefineExpressionResponse,
  type DefineIndexFieldRequest,
  type DefineIndexFieldResponse,
  type DefineSuggesterRequest,
  type DefineSuggesterResponse,
  type DeleteAnalysisSchemeRequest,
  type DeleteAnalysisSchemeResponse,
  type DeleteDomainRequest,
  type DeleteDomainResponse,
  type DeleteExpressionRequest,
  type DeleteExpressionResponse,
  type DeleteIndexFieldRequest,
  type DeleteIndexFieldResponse,
  type DeleteSuggesterRequest,
  type DeleteSuggesterResponse,
  type DescribeAnalysisSchemesRequest,
  type DescribeAnalysisSchemesResponse,
  type DescribeAvailabilityOptionsRequest,
  type DescribeAvailabilityOptionsResponse,
  type DescribeDomainEndpointOptionsRequest,
  type DescribeDomainEndpointOptionsResponse,
  type DescribeDomainsRequest,
  type DescribeDomainsResponse,
  type DescribeExpressionsRequest,
  type DescribeExpressionsResponse,
  type DescribeIndexFieldsRequest,
  type DescribeIndexFieldsResponse,
  type DescribeScalingParametersRequest,
  type DescribeScalingParametersResponse,
  type DescribeServiceAccessPoliciesRequest,
  type DescribeServiceAccessPoliciesResponse,
  type DescribeSuggestersRequest,
  type DescribeSuggestersResponse,
  type IndexDocumentsRequest,
  type IndexDocumentsResponse,
  type ListDomainNamesResponse,
  type UpdateAvailabilityOptionsRequest,
  type UpdateAvailabilityOptionsResponse,
  type UpdateDomainEndpointOptionsRequest,
  type UpdateDomainEndpointOptionsResponse,
  type UpdateScalingParametersRequest,
  type UpdateScalingParametersResponse,
  type UpdateServiceAccessPoliciesRequest,
  type UpdateServiceAccessPoliciesResponse,
} from "@aws-sdk/client-cloudsearch";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  CloudSearchClientInstance,
  CloudSearchClientInstanceLayer,
} from "./CloudSearchClientInstance";
import { DefaultCloudSearchClientConfigLayer } from "./CloudSearchClientInstanceConfig";
import {
  type BaseException,
  type InternalException,
  type ResourceNotFoundException,
  type ValidationException,
  type LimitExceededException,
  type ResourceAlreadyExistsException,
  type InvalidTypeException,
  type DisabledOperationException,
  type TaggedException,
  SdkError,
} from "./Errors";

const commands = {
  BuildSuggestersCommand,
  CreateDomainCommand,
  DefineAnalysisSchemeCommand,
  DefineExpressionCommand,
  DefineIndexFieldCommand,
  DefineSuggesterCommand,
  DeleteAnalysisSchemeCommand,
  DeleteDomainCommand,
  DeleteExpressionCommand,
  DeleteIndexFieldCommand,
  DeleteSuggesterCommand,
  DescribeAnalysisSchemesCommand,
  DescribeAvailabilityOptionsCommand,
  DescribeDomainEndpointOptionsCommand,
  DescribeDomainsCommand,
  DescribeExpressionsCommand,
  DescribeIndexFieldsCommand,
  DescribeScalingParametersCommand,
  DescribeServiceAccessPoliciesCommand,
  DescribeSuggestersCommand,
  IndexDocumentsCommand,
  ListDomainNamesCommand,
  UpdateAvailabilityOptionsCommand,
  UpdateDomainEndpointOptionsCommand,
  UpdateScalingParametersCommand,
  UpdateServiceAccessPoliciesCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface CloudSearchService {
  readonly _: unique symbol;

  /**
   * @see {@link BuildSuggestersCommand}
   */
  buildSuggesters(
    args: BuildSuggestersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BuildSuggestersResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDomainResponse,
    | SdkError
    | BaseException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
  >;

  /**
   * @see {@link DefineAnalysisSchemeCommand}
   */
  defineAnalysisScheme(
    args: DefineAnalysisSchemeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DefineAnalysisSchemeResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DefineExpressionCommand}
   */
  defineExpression(
    args: DefineExpressionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DefineExpressionResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DefineIndexFieldCommand}
   */
  defineIndexField(
    args: DefineIndexFieldRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DefineIndexFieldResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DefineSuggesterCommand}
   */
  defineSuggester(
    args: DefineSuggesterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DefineSuggesterResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteAnalysisSchemeCommand}
   */
  deleteAnalysisScheme(
    args: DeleteAnalysisSchemeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAnalysisSchemeResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDomainResponse,
    SdkError | BaseException | InternalException
  >;

  /**
   * @see {@link DeleteExpressionCommand}
   */
  deleteExpression(
    args: DeleteExpressionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteExpressionResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteIndexFieldCommand}
   */
  deleteIndexField(
    args: DeleteIndexFieldRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIndexFieldResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteSuggesterCommand}
   */
  deleteSuggester(
    args: DeleteSuggesterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSuggesterResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeAnalysisSchemesCommand}
   */
  describeAnalysisSchemes(
    args: DescribeAnalysisSchemesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAnalysisSchemesResponse,
    SdkError | BaseException | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeAvailabilityOptionsCommand}
   */
  describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAvailabilityOptionsResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeDomainEndpointOptionsCommand}
   */
  describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainEndpointOptionsResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeDomainsCommand}
   */
  describeDomains(
    args: DescribeDomainsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainsResponse,
    SdkError | BaseException | InternalException
  >;

  /**
   * @see {@link DescribeExpressionsCommand}
   */
  describeExpressions(
    args: DescribeExpressionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExpressionsResponse,
    SdkError | BaseException | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeIndexFieldsCommand}
   */
  describeIndexFields(
    args: DescribeIndexFieldsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIndexFieldsResponse,
    SdkError | BaseException | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeScalingParametersCommand}
   */
  describeScalingParameters(
    args: DescribeScalingParametersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScalingParametersResponse,
    SdkError | BaseException | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeServiceAccessPoliciesCommand}
   */
  describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceAccessPoliciesResponse,
    SdkError | BaseException | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeSuggestersCommand}
   */
  describeSuggesters(
    args: DescribeSuggestersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSuggestersResponse,
    SdkError | BaseException | InternalException | ResourceNotFoundException
  >;

  /**
   * @see {@link IndexDocumentsCommand}
   */
  indexDocuments(
    args: IndexDocumentsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    IndexDocumentsResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(
    args: {},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListDomainNamesResponse, SdkError | BaseException>;

  /**
   * @see {@link UpdateAvailabilityOptionsCommand}
   */
  updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAvailabilityOptionsResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateDomainEndpointOptionsCommand}
   */
  updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainEndpointOptionsResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateScalingParametersCommand}
   */
  updateScalingParameters(
    args: UpdateScalingParametersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScalingParametersResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateServiceAccessPoliciesCommand}
   */
  updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceAccessPoliciesResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const CloudSearchService = Context.GenericTag<CloudSearchService>(
  "@effect-aws/client-cloudsearch/CloudSearchService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudSearchService = Effect.gen(function* (_) {
  const client = yield* _(CloudSearchClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (
      input: any,
      options: Omit<__HttpHandlerOptions, "abortSignal"> = {},
    ) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(input), { ...options, abortSignal }),
        catch: (e) => {
          if (e instanceof SdkCloudSearchServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkCloudSearchServiceException>
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
  }, {}) as CloudSearchService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseCloudSearchServiceLayer = Layer.effect(
  CloudSearchService,
  makeCloudSearchService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudSearchServiceLayer = BaseCloudSearchServiceLayer.pipe(
  Layer.provide(CloudSearchClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudSearchServiceLayer = CloudSearchServiceLayer.pipe(
  Layer.provide(DefaultCloudSearchClientConfigLayer),
);
