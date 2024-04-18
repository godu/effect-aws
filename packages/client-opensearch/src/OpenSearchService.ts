/**
 * @since 1.0.0
 */
import {
  OpenSearchServiceException as SdkOpenSearchServiceException,
  AcceptInboundConnectionCommand,
  AddDataSourceCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AuthorizeVpcEndpointAccessCommand,
  CancelDomainConfigChangeCommand,
  CancelServiceSoftwareUpdateCommand,
  CreateDomainCommand,
  CreateOutboundConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
  DeleteDataSourceCommand,
  DeleteDomainCommand,
  DeleteInboundConnectionCommand,
  DeleteOutboundConnectionCommand,
  DeletePackageCommand,
  DeleteVpcEndpointCommand,
  DescribeDomainCommand,
  DescribeDomainAutoTunesCommand,
  DescribeDomainChangeProgressCommand,
  DescribeDomainConfigCommand,
  DescribeDomainHealthCommand,
  DescribeDomainNodesCommand,
  DescribeDomainsCommand,
  DescribeDryRunProgressCommand,
  DescribeInboundConnectionsCommand,
  DescribeInstanceTypeLimitsCommand,
  DescribeOutboundConnectionsCommand,
  DescribePackagesCommand,
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstancesCommand,
  DescribeVpcEndpointsCommand,
  DissociatePackageCommand,
  GetCompatibleVersionsCommand,
  GetDataSourceCommand,
  GetDomainMaintenanceStatusCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  ListDataSourcesCommand,
  ListDomainMaintenancesCommand,
  ListDomainNamesCommand,
  ListDomainsForPackageCommand,
  ListInstanceTypeDetailsCommand,
  ListPackagesForDomainCommand,
  ListScheduledActionsCommand,
  ListTagsCommand,
  ListVersionsCommand,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomainCommand,
  PurchaseReservedInstanceOfferingCommand,
  RejectInboundConnectionCommand,
  RemoveTagsCommand,
  RevokeVpcEndpointAccessCommand,
  StartDomainMaintenanceCommand,
  StartServiceSoftwareUpdateCommand,
  UpdateDataSourceCommand,
  UpdateDomainConfigCommand,
  UpdatePackageCommand,
  UpdateScheduledActionCommand,
  UpdateVpcEndpointCommand,
  UpgradeDomainCommand,
  type AcceptInboundConnectionRequest,
  type AcceptInboundConnectionResponse,
  type AddDataSourceRequest,
  type AddDataSourceResponse,
  type AddTagsRequest,
  type AssociatePackageRequest,
  type AssociatePackageResponse,
  type AuthorizeVpcEndpointAccessRequest,
  type AuthorizeVpcEndpointAccessResponse,
  type CancelDomainConfigChangeRequest,
  type CancelDomainConfigChangeResponse,
  type CancelServiceSoftwareUpdateRequest,
  type CancelServiceSoftwareUpdateResponse,
  type CreateDomainRequest,
  type CreateDomainResponse,
  type CreateOutboundConnectionRequest,
  type CreateOutboundConnectionResponse,
  type CreatePackageRequest,
  type CreatePackageResponse,
  type CreateVpcEndpointRequest,
  type CreateVpcEndpointResponse,
  type DeleteDataSourceRequest,
  type DeleteDataSourceResponse,
  type DeleteDomainRequest,
  type DeleteDomainResponse,
  type DeleteInboundConnectionRequest,
  type DeleteInboundConnectionResponse,
  type DeleteOutboundConnectionRequest,
  type DeleteOutboundConnectionResponse,
  type DeletePackageRequest,
  type DeletePackageResponse,
  type DeleteVpcEndpointRequest,
  type DeleteVpcEndpointResponse,
  type DescribeDomainRequest,
  type DescribeDomainResponse,
  type DescribeDomainAutoTunesRequest,
  type DescribeDomainAutoTunesResponse,
  type DescribeDomainChangeProgressRequest,
  type DescribeDomainChangeProgressResponse,
  type DescribeDomainConfigRequest,
  type DescribeDomainConfigResponse,
  type DescribeDomainHealthRequest,
  type DescribeDomainHealthResponse,
  type DescribeDomainNodesRequest,
  type DescribeDomainNodesResponse,
  type DescribeDomainsRequest,
  type DescribeDomainsResponse,
  type DescribeDryRunProgressRequest,
  type DescribeDryRunProgressResponse,
  type DescribeInboundConnectionsRequest,
  type DescribeInboundConnectionsResponse,
  type DescribeInstanceTypeLimitsRequest,
  type DescribeInstanceTypeLimitsResponse,
  type DescribeOutboundConnectionsRequest,
  type DescribeOutboundConnectionsResponse,
  type DescribePackagesRequest,
  type DescribePackagesResponse,
  type DescribeReservedInstanceOfferingsRequest,
  type DescribeReservedInstanceOfferingsResponse,
  type DescribeReservedInstancesRequest,
  type DescribeReservedInstancesResponse,
  type DescribeVpcEndpointsRequest,
  type DescribeVpcEndpointsResponse,
  type DissociatePackageRequest,
  type DissociatePackageResponse,
  type GetCompatibleVersionsRequest,
  type GetCompatibleVersionsResponse,
  type GetDataSourceRequest,
  type GetDataSourceResponse,
  type GetDomainMaintenanceStatusRequest,
  type GetDomainMaintenanceStatusResponse,
  type GetPackageVersionHistoryRequest,
  type GetPackageVersionHistoryResponse,
  type GetUpgradeHistoryRequest,
  type GetUpgradeHistoryResponse,
  type GetUpgradeStatusRequest,
  type GetUpgradeStatusResponse,
  type ListDataSourcesRequest,
  type ListDataSourcesResponse,
  type ListDomainMaintenancesRequest,
  type ListDomainMaintenancesResponse,
  type ListDomainNamesRequest,
  type ListDomainNamesResponse,
  type ListDomainsForPackageRequest,
  type ListDomainsForPackageResponse,
  type ListInstanceTypeDetailsRequest,
  type ListInstanceTypeDetailsResponse,
  type ListPackagesForDomainRequest,
  type ListPackagesForDomainResponse,
  type ListScheduledActionsRequest,
  type ListScheduledActionsResponse,
  type ListTagsRequest,
  type ListTagsResponse,
  type ListVersionsRequest,
  type ListVersionsResponse,
  type ListVpcEndpointAccessRequest,
  type ListVpcEndpointAccessResponse,
  type ListVpcEndpointsRequest,
  type ListVpcEndpointsResponse,
  type ListVpcEndpointsForDomainRequest,
  type ListVpcEndpointsForDomainResponse,
  type PurchaseReservedInstanceOfferingRequest,
  type PurchaseReservedInstanceOfferingResponse,
  type RejectInboundConnectionRequest,
  type RejectInboundConnectionResponse,
  type RemoveTagsRequest,
  type RevokeVpcEndpointAccessRequest,
  type RevokeVpcEndpointAccessResponse,
  type StartDomainMaintenanceRequest,
  type StartDomainMaintenanceResponse,
  type StartServiceSoftwareUpdateRequest,
  type StartServiceSoftwareUpdateResponse,
  type UpdateDataSourceRequest,
  type UpdateDataSourceResponse,
  type UpdateDomainConfigRequest,
  type UpdateDomainConfigResponse,
  type UpdatePackageRequest,
  type UpdatePackageResponse,
  type UpdateScheduledActionRequest,
  type UpdateScheduledActionResponse,
  type UpdateVpcEndpointRequest,
  type UpdateVpcEndpointResponse,
  type UpgradeDomainRequest,
  type UpgradeDomainResponse,
} from "@aws-sdk/client-opensearch";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type DisabledOperationException,
  type LimitExceededException,
  type ResourceNotFoundException,
  type BaseException,
  type DependencyFailureException,
  type InternalException,
  type ValidationException,
  type AccessDeniedException,
  type ConflictException,
  type InvalidTypeException,
  type ResourceAlreadyExistsException,
  type InvalidPaginationTokenException,
  type SlotNotAvailableException,
  type TaggedException,
  SdkError,
} from "./Errors";
import {
  OpenSearchClientInstance,
  OpenSearchClientInstanceLayer,
} from "./OpenSearchClientInstance";
import { DefaultOpenSearchClientConfigLayer } from "./OpenSearchClientInstanceConfig";

const commands = {
  AcceptInboundConnectionCommand,
  AddDataSourceCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AuthorizeVpcEndpointAccessCommand,
  CancelDomainConfigChangeCommand,
  CancelServiceSoftwareUpdateCommand,
  CreateDomainCommand,
  CreateOutboundConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
  DeleteDataSourceCommand,
  DeleteDomainCommand,
  DeleteInboundConnectionCommand,
  DeleteOutboundConnectionCommand,
  DeletePackageCommand,
  DeleteVpcEndpointCommand,
  DescribeDomainCommand,
  DescribeDomainAutoTunesCommand,
  DescribeDomainChangeProgressCommand,
  DescribeDomainConfigCommand,
  DescribeDomainHealthCommand,
  DescribeDomainNodesCommand,
  DescribeDomainsCommand,
  DescribeDryRunProgressCommand,
  DescribeInboundConnectionsCommand,
  DescribeInstanceTypeLimitsCommand,
  DescribeOutboundConnectionsCommand,
  DescribePackagesCommand,
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstancesCommand,
  DescribeVpcEndpointsCommand,
  DissociatePackageCommand,
  GetCompatibleVersionsCommand,
  GetDataSourceCommand,
  GetDomainMaintenanceStatusCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  ListDataSourcesCommand,
  ListDomainMaintenancesCommand,
  ListDomainNamesCommand,
  ListDomainsForPackageCommand,
  ListInstanceTypeDetailsCommand,
  ListPackagesForDomainCommand,
  ListScheduledActionsCommand,
  ListTagsCommand,
  ListVersionsCommand,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomainCommand,
  PurchaseReservedInstanceOfferingCommand,
  RejectInboundConnectionCommand,
  RemoveTagsCommand,
  RevokeVpcEndpointAccessCommand,
  StartDomainMaintenanceCommand,
  StartServiceSoftwareUpdateCommand,
  UpdateDataSourceCommand,
  UpdateDomainConfigCommand,
  UpdatePackageCommand,
  UpdateScheduledActionCommand,
  UpdateVpcEndpointCommand,
  UpgradeDomainCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface OpenSearchService {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptInboundConnectionCommand}
   */
  acceptInboundConnection(
    args: AcceptInboundConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AcceptInboundConnectionResponse,
    | SdkError
    | DisabledOperationException
    | LimitExceededException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link AddDataSourceCommand}
   */
  addDataSource(
    args: AddDataSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AddDataSourceResponse,
    | SdkError
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | BaseException
    | InternalException
    | LimitExceededException
    | ValidationException
  >;

  /**
   * @see {@link AssociatePackageCommand}
   */
  associatePackage(
    args: AssociatePackageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AssociatePackageResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link AuthorizeVpcEndpointAccessCommand}
   */
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeVpcEndpointAccessResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link CancelDomainConfigChangeCommand}
   */
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelDomainConfigChangeResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link CancelServiceSoftwareUpdateCommand}
   */
  cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelServiceSoftwareUpdateResponse,
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
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
  >;

  /**
   * @see {@link CreateOutboundConnectionCommand}
   */
  createOutboundConnection(
    args: CreateOutboundConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateOutboundConnectionResponse,
    | SdkError
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
  >;

  /**
   * @see {@link CreatePackageCommand}
   */
  createPackage(
    args: CreatePackageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePackageResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceAlreadyExistsException
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
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
  >;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDataSourceResponse,
    | SdkError
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
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
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DeleteInboundConnectionCommand}
   */
  deleteInboundConnection(
    args: DeleteInboundConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInboundConnectionResponse,
    SdkError | DisabledOperationException | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteOutboundConnectionCommand}
   */
  deleteOutboundConnection(
    args: DeleteOutboundConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOutboundConnectionResponse,
    SdkError | DisabledOperationException | ResourceNotFoundException
  >;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(
    args: DeletePackageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeletePackageResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
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
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDomainAutoTunesCommand}
   */
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainAutoTunesResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDomainChangeProgressCommand}
   */
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainChangeProgressResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDomainConfigCommand}
   */
  describeDomainConfig(
    args: DescribeDomainConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainConfigResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDomainHealthCommand}
   */
  describeDomainHealth(
    args: DescribeDomainHealthRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainHealthResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDomainNodesCommand}
   */
  describeDomainNodes(
    args: DescribeDomainNodesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainNodesResponse,
    | SdkError
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeDomainsCommand}
   */
  describeDomains(
    args: DescribeDomainsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainsResponse,
    SdkError | BaseException | InternalException | ValidationException
  >;

  /**
   * @see {@link DescribeDryRunProgressCommand}
   */
  describeDryRunProgress(
    args: DescribeDryRunProgressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDryRunProgressResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeInboundConnectionsCommand}
   */
  describeInboundConnections(
    args: DescribeInboundConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInboundConnectionsResponse,
    SdkError | DisabledOperationException | InvalidPaginationTokenException
  >;

  /**
   * @see {@link DescribeInstanceTypeLimitsCommand}
   */
  describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceTypeLimitsResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeOutboundConnectionsCommand}
   */
  describeOutboundConnections(
    args: DescribeOutboundConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOutboundConnectionsResponse,
    SdkError | DisabledOperationException | InvalidPaginationTokenException
  >;

  /**
   * @see {@link DescribePackagesCommand}
   */
  describePackages(
    args: DescribePackagesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePackagesResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeReservedInstanceOfferingsCommand}
   */
  describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstanceOfferingsResponse,
    | SdkError
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  describeReservedInstances(
    args: DescribeReservedInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstancesResponse,
    | SdkError
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(
    args: DescribeVpcEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointsResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ValidationException
  >;

  /**
   * @see {@link DissociatePackageCommand}
   */
  dissociatePackage(
    args: DissociatePackageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DissociatePackageResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetCompatibleVersionsCommand}
   */
  getCompatibleVersions(
    args: GetCompatibleVersionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetCompatibleVersionsResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDataSourceResponse,
    | SdkError
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetDomainMaintenanceStatusCommand}
   */
  getDomainMaintenanceStatus(
    args: GetDomainMaintenanceStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainMaintenanceStatusResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetPackageVersionHistoryCommand}
   */
  getPackageVersionHistory(
    args: GetPackageVersionHistoryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPackageVersionHistoryResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetUpgradeHistoryCommand}
   */
  getUpgradeHistory(
    args: GetUpgradeHistoryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUpgradeHistoryResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link GetUpgradeStatusCommand}
   */
  getUpgradeStatus(
    args: GetUpgradeStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUpgradeStatusResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDataSourcesResponse,
    | SdkError
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListDomainMaintenancesCommand}
   */
  listDomainMaintenances(
    args: ListDomainMaintenancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainMaintenancesResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(
    args: ListDomainNamesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainNamesResponse,
    SdkError | BaseException | ValidationException
  >;

  /**
   * @see {@link ListDomainsForPackageCommand}
   */
  listDomainsForPackage(
    args: ListDomainsForPackageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainsForPackageResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListInstanceTypeDetailsCommand}
   */
  listInstanceTypeDetails(
    args: ListInstanceTypeDetailsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceTypeDetailsResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListPackagesForDomainCommand}
   */
  listPackagesForDomain(
    args: ListPackagesForDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPackagesForDomainResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListScheduledActionsCommand}
   */
  listScheduledActions(
    args: ListScheduledActionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListScheduledActionsResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | ValidationException
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
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListVersionsCommand}
   */
  listVersions(
    args: ListVersionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListVersionsResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link ListVpcEndpointAccessCommand}
   */
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointAccessResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(
    args: ListVpcEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsResponse,
    SdkError | BaseException | DisabledOperationException | InternalException
  >;

  /**
   * @see {@link ListVpcEndpointsForDomainCommand}
   */
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsForDomainResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link PurchaseReservedInstanceOfferingCommand}
   */
  purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedInstanceOfferingResponse,
    | SdkError
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link RejectInboundConnectionCommand}
   */
  rejectInboundConnection(
    args: RejectInboundConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RejectInboundConnectionResponse,
    SdkError | DisabledOperationException | ResourceNotFoundException
  >;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | BaseException | InternalException | ValidationException
  >;

  /**
   * @see {@link RevokeVpcEndpointAccessCommand}
   */
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RevokeVpcEndpointAccessResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link StartDomainMaintenanceCommand}
   */
  startDomainMaintenance(
    args: StartDomainMaintenanceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartDomainMaintenanceResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link StartServiceSoftwareUpdateCommand}
   */
  startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartServiceSoftwareUpdateResponse,
    | SdkError
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDataSourceResponse,
    | SdkError
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateDomainConfigCommand}
   */
  updateDomainConfig(
    args: UpdateDomainConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainConfigResponse,
    | SdkError
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdatePackageCommand}
   */
  updatePackage(
    args: UpdatePackageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePackageResponse,
    | SdkError
    | AccessDeniedException
    | BaseException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpdateScheduledActionCommand}
   */
  updateScheduledAction(
    args: UpdateScheduledActionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScheduledActionResponse,
    | SdkError
    | BaseException
    | ConflictException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | SlotNotAvailableException
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
    | SdkError
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
  >;

  /**
   * @see {@link UpgradeDomainCommand}
   */
  upgradeDomain(
    args: UpgradeDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpgradeDomainResponse,
    | SdkError
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const OpenSearchService = Context.GenericTag<OpenSearchService>(
  "@effect-aws/client-opensearch/OpenSearchService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOpenSearchService = Effect.gen(function* (_) {
  const client = yield* _(OpenSearchClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkOpenSearchServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkOpenSearchServiceException>
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
  }, {}) as OpenSearchService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseOpenSearchServiceLayer = Layer.effect(
  OpenSearchService,
  makeOpenSearchService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const OpenSearchServiceLayer = BaseOpenSearchServiceLayer.pipe(
  Layer.provide(OpenSearchClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultOpenSearchServiceLayer = OpenSearchServiceLayer.pipe(
  Layer.provide(DefaultOpenSearchClientConfigLayer),
);
