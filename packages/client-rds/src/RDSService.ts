/**
 * @since 1.0.0
 */
import {
  RDSServiceException as SdkRDSServiceException,
  AddRoleToDBClusterCommand,
  AddRoleToDBInstanceCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  AuthorizeDBSecurityGroupIngressCommand,
  BacktrackDBClusterCommand,
  CancelExportTaskCommand,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CopyDBSnapshotCommand,
  CopyOptionGroupCommand,
  CreateBlueGreenDeploymentCommand,
  CreateCustomDBEngineVersionCommand,
  CreateDBClusterCommand,
  CreateDBClusterEndpointCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBInstanceReadReplicaCommand,
  CreateDBParameterGroupCommand,
  CreateDBProxyCommand,
  CreateDBProxyEndpointCommand,
  CreateDBSecurityGroupCommand,
  CreateDBShardGroupCommand,
  CreateDBSnapshotCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  CreateIntegrationCommand,
  CreateOptionGroupCommand,
  CreateTenantDatabaseCommand,
  DeleteBlueGreenDeploymentCommand,
  DeleteCustomDBEngineVersionCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterAutomatedBackupCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBProxyCommand,
  DeleteDBProxyEndpointCommand,
  DeleteDBSecurityGroupCommand,
  DeleteDBShardGroupCommand,
  DeleteDBSnapshotCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DeleteIntegrationCommand,
  DeleteOptionGroupCommand,
  DeleteTenantDatabaseCommand,
  DeregisterDBProxyTargetsCommand,
  DescribeAccountAttributesCommand,
  DescribeBlueGreenDeploymentsCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterAutomatedBackupsCommand,
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClustersCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstancesCommand,
  DescribeDBLogFilesCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBProxiesCommand,
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetsCommand,
  DescribeDBRecommendationsCommand,
  DescribeDBSecurityGroupsCommand,
  DescribeDBShardGroupsCommand,
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSnapshotsCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
  DescribeExportTasksCommand,
  DescribeGlobalClustersCommand,
  DescribeIntegrationsCommand,
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupsCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeSourceRegionsCommand,
  DescribeTenantDatabasesCommand,
  DescribeValidDBInstanceModificationsCommand,
  DisableHttpEndpointCommand,
  DownloadDBLogFilePortionCommand,
  EnableHttpEndpointCommand,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  ListTagsForResourceCommand,
  ModifyActivityStreamCommand,
  ModifyCertificatesCommand,
  ModifyCurrentDBClusterCapacityCommand,
  ModifyCustomDBEngineVersionCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBParameterGroupCommand,
  ModifyDBProxyCommand,
  ModifyDBProxyEndpointCommand,
  ModifyDBProxyTargetGroupCommand,
  ModifyDBRecommendationCommand,
  ModifyDBShardGroupCommand,
  ModifyDBSnapshotCommand,
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  ModifyIntegrationCommand,
  ModifyOptionGroupCommand,
  ModifyTenantDatabaseCommand,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBClusterCommand,
  PurchaseReservedDBInstancesOfferingCommand,
  RebootDBClusterCommand,
  RebootDBInstanceCommand,
  RebootDBShardGroupCommand,
  RegisterDBProxyTargetsCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBInstanceCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceToPointInTimeCommand,
  RevokeDBSecurityGroupIngressCommand,
  StartActivityStreamCommand,
  StartDBClusterCommand,
  StartDBInstanceCommand,
  StartDBInstanceAutomatedBackupsReplicationCommand,
  StartExportTaskCommand,
  StopActivityStreamCommand,
  StopDBClusterCommand,
  StopDBInstanceCommand,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverGlobalClusterCommand,
  SwitchoverReadReplicaCommand,
  type AddRoleToDBClusterMessage,
  type AddRoleToDBInstanceMessage,
  type AddSourceIdentifierToSubscriptionMessage,
  type AddSourceIdentifierToSubscriptionResult,
  type AddTagsToResourceMessage,
  type ApplyPendingMaintenanceActionMessage,
  type ApplyPendingMaintenanceActionResult,
  type AuthorizeDBSecurityGroupIngressMessage,
  type AuthorizeDBSecurityGroupIngressResult,
  type BacktrackDBClusterMessage,
  type DBClusterBacktrack,
  type CancelExportTaskMessage,
  type ExportTask,
  type CopyDBClusterParameterGroupMessage,
  type CopyDBClusterParameterGroupResult,
  type CopyDBClusterSnapshotMessage,
  type CopyDBClusterSnapshotResult,
  type CopyDBParameterGroupMessage,
  type CopyDBParameterGroupResult,
  type CopyDBSnapshotMessage,
  type CopyDBSnapshotResult,
  type CopyOptionGroupMessage,
  type CopyOptionGroupResult,
  type CreateBlueGreenDeploymentRequest,
  type CreateBlueGreenDeploymentResponse,
  type CreateCustomDBEngineVersionMessage,
  type DBEngineVersion,
  type CreateDBClusterMessage,
  type CreateDBClusterResult,
  type CreateDBClusterEndpointMessage,
  type DBClusterEndpoint,
  type CreateDBClusterParameterGroupMessage,
  type CreateDBClusterParameterGroupResult,
  type CreateDBClusterSnapshotMessage,
  type CreateDBClusterSnapshotResult,
  type CreateDBInstanceMessage,
  type CreateDBInstanceResult,
  type CreateDBInstanceReadReplicaMessage,
  type CreateDBInstanceReadReplicaResult,
  type CreateDBParameterGroupMessage,
  type CreateDBParameterGroupResult,
  type CreateDBProxyRequest,
  type CreateDBProxyResponse,
  type CreateDBProxyEndpointRequest,
  type CreateDBProxyEndpointResponse,
  type CreateDBSecurityGroupMessage,
  type CreateDBSecurityGroupResult,
  type CreateDBShardGroupMessage,
  type DBShardGroup,
  type CreateDBSnapshotMessage,
  type CreateDBSnapshotResult,
  type CreateDBSubnetGroupMessage,
  type CreateDBSubnetGroupResult,
  type CreateEventSubscriptionMessage,
  type CreateEventSubscriptionResult,
  type CreateGlobalClusterMessage,
  type CreateGlobalClusterResult,
  type CreateIntegrationMessage,
  type Integration,
  type CreateOptionGroupMessage,
  type CreateOptionGroupResult,
  type CreateTenantDatabaseMessage,
  type CreateTenantDatabaseResult,
  type DeleteBlueGreenDeploymentRequest,
  type DeleteBlueGreenDeploymentResponse,
  type DeleteCustomDBEngineVersionMessage,
  type DeleteDBClusterMessage,
  type DeleteDBClusterResult,
  type DeleteDBClusterAutomatedBackupMessage,
  type DeleteDBClusterAutomatedBackupResult,
  type DeleteDBClusterEndpointMessage,
  type DeleteDBClusterParameterGroupMessage,
  type DeleteDBClusterSnapshotMessage,
  type DeleteDBClusterSnapshotResult,
  type DeleteDBInstanceMessage,
  type DeleteDBInstanceResult,
  type DeleteDBInstanceAutomatedBackupMessage,
  type DeleteDBInstanceAutomatedBackupResult,
  type DeleteDBParameterGroupMessage,
  type DeleteDBProxyRequest,
  type DeleteDBProxyResponse,
  type DeleteDBProxyEndpointRequest,
  type DeleteDBProxyEndpointResponse,
  type DeleteDBSecurityGroupMessage,
  type DeleteDBShardGroupMessage,
  type DeleteDBSnapshotMessage,
  type DeleteDBSnapshotResult,
  type DeleteDBSubnetGroupMessage,
  type DeleteEventSubscriptionMessage,
  type DeleteEventSubscriptionResult,
  type DeleteGlobalClusterMessage,
  type DeleteGlobalClusterResult,
  type DeleteIntegrationMessage,
  type DeleteOptionGroupMessage,
  type DeleteTenantDatabaseMessage,
  type DeleteTenantDatabaseResult,
  type DeregisterDBProxyTargetsRequest,
  type DeregisterDBProxyTargetsResponse,
  type DescribeAccountAttributesMessage,
  type AccountAttributesMessage,
  type DescribeBlueGreenDeploymentsRequest,
  type DescribeBlueGreenDeploymentsResponse,
  type DescribeCertificatesMessage,
  type CertificateMessage,
  type DescribeDBClusterAutomatedBackupsMessage,
  type DBClusterAutomatedBackupMessage,
  type DescribeDBClusterBacktracksMessage,
  type DBClusterBacktrackMessage,
  type DescribeDBClusterEndpointsMessage,
  type DBClusterEndpointMessage,
  type DescribeDBClusterParameterGroupsMessage,
  type DBClusterParameterGroupsMessage,
  type DescribeDBClusterParametersMessage,
  type DBClusterParameterGroupDetails,
  type DescribeDBClusterSnapshotAttributesMessage,
  type DescribeDBClusterSnapshotAttributesResult,
  type DescribeDBClusterSnapshotsMessage,
  type DBClusterSnapshotMessage,
  type DescribeDBClustersMessage,
  type DBClusterMessage,
  type DescribeDBEngineVersionsMessage,
  type DBEngineVersionMessage,
  type DescribeDBInstanceAutomatedBackupsMessage,
  type DBInstanceAutomatedBackupMessage,
  type DescribeDBInstancesMessage,
  type DBInstanceMessage,
  type DescribeDBLogFilesMessage,
  type DescribeDBLogFilesResponse,
  type DescribeDBParameterGroupsMessage,
  type DBParameterGroupsMessage,
  type DescribeDBParametersMessage,
  type DBParameterGroupDetails,
  type DescribeDBProxiesRequest,
  type DescribeDBProxiesResponse,
  type DescribeDBProxyEndpointsRequest,
  type DescribeDBProxyEndpointsResponse,
  type DescribeDBProxyTargetGroupsRequest,
  type DescribeDBProxyTargetGroupsResponse,
  type DescribeDBProxyTargetsRequest,
  type DescribeDBProxyTargetsResponse,
  type DescribeDBRecommendationsMessage,
  type DBRecommendationsMessage,
  type DescribeDBSecurityGroupsMessage,
  type DBSecurityGroupMessage,
  type DescribeDBShardGroupsMessage,
  type DescribeDBShardGroupsResponse,
  type DescribeDBSnapshotAttributesMessage,
  type DescribeDBSnapshotAttributesResult,
  type DescribeDBSnapshotTenantDatabasesMessage,
  type DBSnapshotTenantDatabasesMessage,
  type DescribeDBSnapshotsMessage,
  type DBSnapshotMessage,
  type DescribeDBSubnetGroupsMessage,
  type DBSubnetGroupMessage,
  type DescribeEngineDefaultClusterParametersMessage,
  type DescribeEngineDefaultClusterParametersResult,
  type DescribeEngineDefaultParametersMessage,
  type DescribeEngineDefaultParametersResult,
  type DescribeEventCategoriesMessage,
  type EventCategoriesMessage,
  type DescribeEventSubscriptionsMessage,
  type EventSubscriptionsMessage,
  type DescribeEventsMessage,
  type EventsMessage,
  type DescribeExportTasksMessage,
  type ExportTasksMessage,
  type DescribeGlobalClustersMessage,
  type GlobalClustersMessage,
  type DescribeIntegrationsMessage,
  type DescribeIntegrationsResponse,
  type DescribeOptionGroupOptionsMessage,
  type OptionGroupOptionsMessage,
  type DescribeOptionGroupsMessage,
  type OptionGroups,
  type DescribeOrderableDBInstanceOptionsMessage,
  type OrderableDBInstanceOptionsMessage,
  type DescribePendingMaintenanceActionsMessage,
  type PendingMaintenanceActionsMessage,
  type DescribeReservedDBInstancesMessage,
  type ReservedDBInstanceMessage,
  type DescribeReservedDBInstancesOfferingsMessage,
  type ReservedDBInstancesOfferingMessage,
  type DescribeSourceRegionsMessage,
  type SourceRegionMessage,
  type DescribeTenantDatabasesMessage,
  type TenantDatabasesMessage,
  type DescribeValidDBInstanceModificationsMessage,
  type DescribeValidDBInstanceModificationsResult,
  type DisableHttpEndpointRequest,
  type DisableHttpEndpointResponse,
  type DownloadDBLogFilePortionMessage,
  type DownloadDBLogFilePortionDetails,
  type EnableHttpEndpointRequest,
  type EnableHttpEndpointResponse,
  type FailoverDBClusterMessage,
  type FailoverDBClusterResult,
  type FailoverGlobalClusterMessage,
  type FailoverGlobalClusterResult,
  type ListTagsForResourceMessage,
  type TagListMessage,
  type ModifyActivityStreamRequest,
  type ModifyActivityStreamResponse,
  type ModifyCertificatesMessage,
  type ModifyCertificatesResult,
  type ModifyCurrentDBClusterCapacityMessage,
  type DBClusterCapacityInfo,
  type ModifyCustomDBEngineVersionMessage,
  type ModifyDBClusterMessage,
  type ModifyDBClusterResult,
  type ModifyDBClusterEndpointMessage,
  type ModifyDBClusterParameterGroupMessage,
  type DBClusterParameterGroupNameMessage,
  type ModifyDBClusterSnapshotAttributeMessage,
  type ModifyDBClusterSnapshotAttributeResult,
  type ModifyDBInstanceMessage,
  type ModifyDBInstanceResult,
  type ModifyDBParameterGroupMessage,
  type DBParameterGroupNameMessage,
  type ModifyDBProxyRequest,
  type ModifyDBProxyResponse,
  type ModifyDBProxyEndpointRequest,
  type ModifyDBProxyEndpointResponse,
  type ModifyDBProxyTargetGroupRequest,
  type ModifyDBProxyTargetGroupResponse,
  type ModifyDBRecommendationMessage,
  type DBRecommendationMessage,
  type ModifyDBShardGroupMessage,
  type ModifyDBSnapshotMessage,
  type ModifyDBSnapshotResult,
  type ModifyDBSnapshotAttributeMessage,
  type ModifyDBSnapshotAttributeResult,
  type ModifyDBSubnetGroupMessage,
  type ModifyDBSubnetGroupResult,
  type ModifyEventSubscriptionMessage,
  type ModifyEventSubscriptionResult,
  type ModifyGlobalClusterMessage,
  type ModifyGlobalClusterResult,
  type ModifyIntegrationMessage,
  type ModifyOptionGroupMessage,
  type ModifyOptionGroupResult,
  type ModifyTenantDatabaseMessage,
  type ModifyTenantDatabaseResult,
  type PromoteReadReplicaMessage,
  type PromoteReadReplicaResult,
  type PromoteReadReplicaDBClusterMessage,
  type PromoteReadReplicaDBClusterResult,
  type PurchaseReservedDBInstancesOfferingMessage,
  type PurchaseReservedDBInstancesOfferingResult,
  type RebootDBClusterMessage,
  type RebootDBClusterResult,
  type RebootDBInstanceMessage,
  type RebootDBInstanceResult,
  type RebootDBShardGroupMessage,
  type RegisterDBProxyTargetsRequest,
  type RegisterDBProxyTargetsResponse,
  type RemoveFromGlobalClusterMessage,
  type RemoveFromGlobalClusterResult,
  type RemoveRoleFromDBClusterMessage,
  type RemoveRoleFromDBInstanceMessage,
  type RemoveSourceIdentifierFromSubscriptionMessage,
  type RemoveSourceIdentifierFromSubscriptionResult,
  type RemoveTagsFromResourceMessage,
  type ResetDBClusterParameterGroupMessage,
  type ResetDBParameterGroupMessage,
  type RestoreDBClusterFromS3Message,
  type RestoreDBClusterFromS3Result,
  type RestoreDBClusterFromSnapshotMessage,
  type RestoreDBClusterFromSnapshotResult,
  type RestoreDBClusterToPointInTimeMessage,
  type RestoreDBClusterToPointInTimeResult,
  type RestoreDBInstanceFromDBSnapshotMessage,
  type RestoreDBInstanceFromDBSnapshotResult,
  type RestoreDBInstanceFromS3Message,
  type RestoreDBInstanceFromS3Result,
  type RestoreDBInstanceToPointInTimeMessage,
  type RestoreDBInstanceToPointInTimeResult,
  type RevokeDBSecurityGroupIngressMessage,
  type RevokeDBSecurityGroupIngressResult,
  type StartActivityStreamRequest,
  type StartActivityStreamResponse,
  type StartDBClusterMessage,
  type StartDBClusterResult,
  type StartDBInstanceMessage,
  type StartDBInstanceResult,
  type StartDBInstanceAutomatedBackupsReplicationMessage,
  type StartDBInstanceAutomatedBackupsReplicationResult,
  type StartExportTaskMessage,
  type StopActivityStreamRequest,
  type StopActivityStreamResponse,
  type StopDBClusterMessage,
  type StopDBClusterResult,
  type StopDBInstanceMessage,
  type StopDBInstanceResult,
  type StopDBInstanceAutomatedBackupsReplicationMessage,
  type StopDBInstanceAutomatedBackupsReplicationResult,
  type SwitchoverBlueGreenDeploymentRequest,
  type SwitchoverBlueGreenDeploymentResponse,
  type SwitchoverGlobalClusterMessage,
  type SwitchoverGlobalClusterResult,
  type SwitchoverReadReplicaMessage,
  type SwitchoverReadReplicaResult,
} from "@aws-sdk/client-rds";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type DBClusterNotFoundFault,
  type DBClusterRoleAlreadyExistsFault,
  type DBClusterRoleQuotaExceededFault,
  type InvalidDBClusterStateFault,
  type DBInstanceNotFoundFault,
  type DBInstanceRoleAlreadyExistsFault,
  type DBInstanceRoleQuotaExceededFault,
  type InvalidDBInstanceStateFault,
  type SourceNotFoundFault,
  type SubscriptionNotFoundFault,
  type BlueGreenDeploymentNotFoundFault,
  type DBProxyNotFoundFault,
  type DBProxyTargetGroupNotFoundFault,
  type DBSnapshotNotFoundFault,
  type DBSnapshotTenantDatabaseNotFoundFault,
  type IntegrationNotFoundFault,
  type TenantDatabaseNotFoundFault,
  type ResourceNotFoundFault,
  type AuthorizationAlreadyExistsFault,
  type AuthorizationQuotaExceededFault,
  type DBSecurityGroupNotFoundFault,
  type InvalidDBSecurityGroupStateFault,
  type ExportTaskNotFoundFault,
  type InvalidExportTaskStateFault,
  type DBParameterGroupAlreadyExistsFault,
  type DBParameterGroupNotFoundFault,
  type DBParameterGroupQuotaExceededFault,
  type DBClusterSnapshotAlreadyExistsFault,
  type DBClusterSnapshotNotFoundFault,
  type InvalidDBClusterSnapshotStateFault,
  type KMSKeyNotAccessibleFault,
  type SnapshotQuotaExceededFault,
  type CustomAvailabilityZoneNotFoundFault,
  type DBSnapshotAlreadyExistsFault,
  type InvalidDBSnapshotStateFault,
  type OptionGroupAlreadyExistsFault,
  type OptionGroupNotFoundFault,
  type OptionGroupQuotaExceededFault,
  type BlueGreenDeploymentAlreadyExistsFault,
  type DBClusterParameterGroupNotFoundFault,
  type DBClusterQuotaExceededFault,
  type InstanceQuotaExceededFault,
  type SourceClusterNotSupportedFault,
  type SourceDatabaseNotSupportedFault,
  type CreateCustomDBEngineVersionFault,
  type CustomDBEngineVersionAlreadyExistsFault,
  type CustomDBEngineVersionQuotaExceededFault,
  type Ec2ImagePropertiesNotSupportedFault,
  type DBClusterAlreadyExistsFault,
  type DBSubnetGroupDoesNotCoverEnoughAZs,
  type DBSubnetGroupNotFoundFault,
  type DomainNotFoundFault,
  type GlobalClusterNotFoundFault,
  type InsufficientDBInstanceCapacityFault,
  type InsufficientStorageClusterCapacityFault,
  type InvalidDBSubnetGroupFault,
  type InvalidDBSubnetGroupStateFault,
  type InvalidGlobalClusterStateFault,
  type InvalidSubnet,
  type InvalidVPCNetworkStateFault,
  type StorageQuotaExceededFault,
  type DBClusterEndpointAlreadyExistsFault,
  type DBClusterEndpointQuotaExceededFault,
  type AuthorizationNotFoundFault,
  type BackupPolicyNotFoundFault,
  type CertificateNotFoundFault,
  type DBInstanceAlreadyExistsFault,
  type NetworkTypeNotSupported,
  type ProvisionedIopsNotAvailableInAZFault,
  type StorageTypeNotSupportedFault,
  type TenantDatabaseQuotaExceededFault,
  type DBSubnetGroupNotAllowedFault,
  type DBProxyAlreadyExistsFault,
  type DBProxyQuotaExceededFault,
  type DBProxyEndpointAlreadyExistsFault,
  type DBProxyEndpointQuotaExceededFault,
  type InvalidDBProxyStateFault,
  type DBSecurityGroupAlreadyExistsFault,
  type DBSecurityGroupNotSupportedFault,
  type DBSecurityGroupQuotaExceededFault,
  type DBShardGroupAlreadyExistsFault,
  type InvalidMaxAcuFault,
  type MaxDBShardGroupLimitReached,
  type UnsupportedDBEngineVersionFault,
  type DBSubnetGroupAlreadyExistsFault,
  type DBSubnetGroupQuotaExceededFault,
  type DBSubnetQuotaExceededFault,
  type EventSubscriptionQuotaExceededFault,
  type SNSInvalidTopicFault,
  type SNSNoAuthorizationFault,
  type SNSTopicArnNotFoundFault,
  type SubscriptionAlreadyExistFault,
  type SubscriptionCategoryNotFoundFault,
  type GlobalClusterAlreadyExistsFault,
  type GlobalClusterQuotaExceededFault,
  type IntegrationAlreadyExistsFault,
  type IntegrationConflictOperationFault,
  type IntegrationQuotaExceededFault,
  type TenantDatabaseAlreadyExistsFault,
  type InvalidBlueGreenDeploymentStateFault,
  type CustomDBEngineVersionNotFoundFault,
  type InvalidCustomDBEngineVersionStateFault,
  type DBClusterAutomatedBackupQuotaExceededFault,
  type DBClusterAutomatedBackupNotFoundFault,
  type InvalidDBClusterAutomatedBackupStateFault,
  type DBClusterEndpointNotFoundFault,
  type InvalidDBClusterEndpointStateFault,
  type InvalidDBParameterGroupStateFault,
  type DBInstanceAutomatedBackupQuotaExceededFault,
  type DBInstanceAutomatedBackupNotFoundFault,
  type InvalidDBInstanceAutomatedBackupStateFault,
  type DBProxyEndpointNotFoundFault,
  type InvalidDBProxyEndpointStateFault,
  type DBShardGroupNotFoundFault,
  type InvalidDBShardGroupStateFault,
  type InvalidDBSubnetStateFault,
  type InvalidEventSubscriptionStateFault,
  type InvalidIntegrationStateFault,
  type InvalidOptionGroupStateFault,
  type DBProxyTargetNotFoundFault,
  type DBClusterBacktrackNotFoundFault,
  type ReservedDBInstanceNotFoundFault,
  type ReservedDBInstancesOfferingNotFoundFault,
  type InvalidResourceStateFault,
  type DBLogFileNotFoundFault,
  type InvalidDBClusterCapacityFault,
  type StorageTypeNotAvailableFault,
  type SharedSnapshotQuotaExceededFault,
  type DBUpgradeDependencyFailureFault,
  type SubnetAlreadyInUse,
  type ReservedDBInstanceAlreadyExistsFault,
  type ReservedDBInstanceQuotaExceededFault,
  type DBProxyTargetAlreadyRegisteredFault,
  type InsufficientAvailableIPsInSubnetFault,
  type DBClusterRoleNotFoundFault,
  type DBInstanceRoleNotFoundFault,
  type InvalidS3BucketFault,
  type InsufficientDBClusterCapacityFault,
  type InvalidRestoreFault,
  type PointInTimeRestoreNotEnabledFault,
  type ExportTaskAlreadyExistsFault,
  type IamRoleMissingPermissionsFault,
  type IamRoleNotFoundFault,
  type InvalidExportOnlyFault,
  type InvalidExportSourceStateFault,
  type TaggedException,
  SdkError,
} from "./Errors";
import { RDSClientInstance, RDSClientInstanceLayer } from "./RDSClientInstance";
import { DefaultRDSClientConfigLayer } from "./RDSClientInstanceConfig";

const commands = {
  AddRoleToDBClusterCommand,
  AddRoleToDBInstanceCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  AuthorizeDBSecurityGroupIngressCommand,
  BacktrackDBClusterCommand,
  CancelExportTaskCommand,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CopyDBSnapshotCommand,
  CopyOptionGroupCommand,
  CreateBlueGreenDeploymentCommand,
  CreateCustomDBEngineVersionCommand,
  CreateDBClusterCommand,
  CreateDBClusterEndpointCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBInstanceReadReplicaCommand,
  CreateDBParameterGroupCommand,
  CreateDBProxyCommand,
  CreateDBProxyEndpointCommand,
  CreateDBSecurityGroupCommand,
  CreateDBShardGroupCommand,
  CreateDBSnapshotCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  CreateIntegrationCommand,
  CreateOptionGroupCommand,
  CreateTenantDatabaseCommand,
  DeleteBlueGreenDeploymentCommand,
  DeleteCustomDBEngineVersionCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterAutomatedBackupCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBProxyCommand,
  DeleteDBProxyEndpointCommand,
  DeleteDBSecurityGroupCommand,
  DeleteDBShardGroupCommand,
  DeleteDBSnapshotCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DeleteIntegrationCommand,
  DeleteOptionGroupCommand,
  DeleteTenantDatabaseCommand,
  DeregisterDBProxyTargetsCommand,
  DescribeAccountAttributesCommand,
  DescribeBlueGreenDeploymentsCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterAutomatedBackupsCommand,
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClustersCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstancesCommand,
  DescribeDBLogFilesCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBProxiesCommand,
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetsCommand,
  DescribeDBRecommendationsCommand,
  DescribeDBSecurityGroupsCommand,
  DescribeDBShardGroupsCommand,
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSnapshotsCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
  DescribeExportTasksCommand,
  DescribeGlobalClustersCommand,
  DescribeIntegrationsCommand,
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupsCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeSourceRegionsCommand,
  DescribeTenantDatabasesCommand,
  DescribeValidDBInstanceModificationsCommand,
  DisableHttpEndpointCommand,
  DownloadDBLogFilePortionCommand,
  EnableHttpEndpointCommand,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  ListTagsForResourceCommand,
  ModifyActivityStreamCommand,
  ModifyCertificatesCommand,
  ModifyCurrentDBClusterCapacityCommand,
  ModifyCustomDBEngineVersionCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBParameterGroupCommand,
  ModifyDBProxyCommand,
  ModifyDBProxyEndpointCommand,
  ModifyDBProxyTargetGroupCommand,
  ModifyDBRecommendationCommand,
  ModifyDBShardGroupCommand,
  ModifyDBSnapshotCommand,
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  ModifyIntegrationCommand,
  ModifyOptionGroupCommand,
  ModifyTenantDatabaseCommand,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBClusterCommand,
  PurchaseReservedDBInstancesOfferingCommand,
  RebootDBClusterCommand,
  RebootDBInstanceCommand,
  RebootDBShardGroupCommand,
  RegisterDBProxyTargetsCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBInstanceCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceToPointInTimeCommand,
  RevokeDBSecurityGroupIngressCommand,
  StartActivityStreamCommand,
  StartDBClusterCommand,
  StartDBInstanceCommand,
  StartDBInstanceAutomatedBackupsReplicationCommand,
  StartExportTaskCommand,
  StopActivityStreamCommand,
  StopDBClusterCommand,
  StopDBInstanceCommand,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverGlobalClusterCommand,
  SwitchoverReadReplicaCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface RDSService {
  readonly _: unique symbol;

  /**
   * @see {@link AddRoleToDBClusterCommand}
   */
  addRoleToDBCluster(
    args: AddRoleToDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DBClusterNotFoundFault
    | DBClusterRoleAlreadyExistsFault
    | DBClusterRoleQuotaExceededFault
    | InvalidDBClusterStateFault
  >;

  /**
   * @see {@link AddRoleToDBInstanceCommand}
   */
  addRoleToDBInstance(
    args: AddRoleToDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DBInstanceNotFoundFault
    | DBInstanceRoleAlreadyExistsFault
    | DBInstanceRoleQuotaExceededFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link AddSourceIdentifierToSubscriptionCommand}
   */
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AddSourceIdentifierToSubscriptionResult,
    SdkError | SourceNotFoundFault | SubscriptionNotFoundFault
  >;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
  >;

  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ApplyPendingMaintenanceActionResult,
    | SdkError
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
  >;

  /**
   * @see {@link AuthorizeDBSecurityGroupIngressCommand}
   */
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeDBSecurityGroupIngressResult,
    | SdkError
    | AuthorizationAlreadyExistsFault
    | AuthorizationQuotaExceededFault
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
  >;

  /**
   * @see {@link BacktrackDBClusterCommand}
   */
  backtrackDBCluster(
    args: BacktrackDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterBacktrack,
    SdkError | DBClusterNotFoundFault | InvalidDBClusterStateFault
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExportTask,
    SdkError | ExportTaskNotFoundFault | InvalidExportTaskStateFault
  >;

  /**
   * @see {@link CopyDBClusterParameterGroupCommand}
   */
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBClusterParameterGroupResult,
    | SdkError
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBParameterGroupQuotaExceededFault
  >;

  /**
   * @see {@link CopyDBClusterSnapshotCommand}
   */
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBClusterSnapshotResult,
    | SdkError
    | DBClusterSnapshotAlreadyExistsFault
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | KMSKeyNotAccessibleFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link CopyDBParameterGroupCommand}
   */
  copyDBParameterGroup(
    args: CopyDBParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBParameterGroupResult,
    | SdkError
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBParameterGroupQuotaExceededFault
  >;

  /**
   * @see {@link CopyDBSnapshotCommand}
   */
  copyDBSnapshot(
    args: CopyDBSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBSnapshotResult,
    | SdkError
    | CustomAvailabilityZoneNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | DBSnapshotNotFoundFault
    | InvalidDBSnapshotStateFault
    | KMSKeyNotAccessibleFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link CopyOptionGroupCommand}
   */
  copyOptionGroup(
    args: CopyOptionGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyOptionGroupResult,
    | SdkError
    | OptionGroupAlreadyExistsFault
    | OptionGroupNotFoundFault
    | OptionGroupQuotaExceededFault
  >;

  /**
   * @see {@link CreateBlueGreenDeploymentCommand}
   */
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateBlueGreenDeploymentResponse,
    | SdkError
    | BlueGreenDeploymentAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | InstanceQuotaExceededFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SourceClusterNotSupportedFault
    | SourceDatabaseNotSupportedFault
  >;

  /**
   * @see {@link CreateCustomDBEngineVersionCommand}
   */
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBEngineVersion,
    | SdkError
    | CreateCustomDBEngineVersionFault
    | CustomDBEngineVersionAlreadyExistsFault
    | CustomDBEngineVersionQuotaExceededFault
    | Ec2ImagePropertiesNotSupportedFault
    | KMSKeyNotAccessibleFault
  >;

  /**
   * @see {@link CreateDBClusterCommand}
   */
  createDBCluster(
    args: CreateDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBClusterResult,
    | SdkError
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | GlobalClusterNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupFault
    | InvalidDBSubnetGroupStateFault
    | InvalidGlobalClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBClusterEndpointCommand}
   */
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterEndpoint,
    | SdkError
    | DBClusterEndpointAlreadyExistsFault
    | DBClusterEndpointQuotaExceededFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link CreateDBClusterParameterGroupCommand}
   */
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBClusterParameterGroupResult,
    | SdkError
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBClusterSnapshotCommand}
   */
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBClusterSnapshotResult,
    | SdkError
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBInstanceCommand}
   */
  createDBInstance(
    args: CreateDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBInstanceResult,
    | SdkError
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBInstanceReadReplicaCommand}
   */
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBInstanceReadReplicaResult,
    | SdkError
    | CertificateNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotAllowedFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBParameterGroupCommand}
   */
  createDBParameterGroup(
    args: CreateDBParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBParameterGroupResult,
    | SdkError
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBProxyCommand}
   */
  createDBProxy(
    args: CreateDBProxyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBProxyResponse,
    | SdkError
    | DBProxyAlreadyExistsFault
    | DBProxyQuotaExceededFault
    | InvalidSubnet
  >;

  /**
   * @see {@link CreateDBProxyEndpointCommand}
   */
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBProxyEndpointResponse,
    | SdkError
    | DBProxyEndpointAlreadyExistsFault
    | DBProxyEndpointQuotaExceededFault
    | DBProxyNotFoundFault
    | InvalidDBProxyStateFault
    | InvalidSubnet
  >;

  /**
   * @see {@link CreateDBSecurityGroupCommand}
   */
  createDBSecurityGroup(
    args: CreateDBSecurityGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBSecurityGroupResult,
    | SdkError
    | DBSecurityGroupAlreadyExistsFault
    | DBSecurityGroupNotSupportedFault
    | DBSecurityGroupQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBShardGroupCommand}
   */
  createDBShardGroup(
    args: CreateDBShardGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBShardGroup,
    | SdkError
    | DBClusterNotFoundFault
    | DBShardGroupAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidMaxAcuFault
    | InvalidVPCNetworkStateFault
    | MaxDBShardGroupLimitReached
    | UnsupportedDBEngineVersionFault
  >;

  /**
   * @see {@link CreateDBSnapshotCommand}
   */
  createDBSnapshot(
    args: CreateDBSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBSnapshotResult,
    | SdkError
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link CreateDBSubnetGroupCommand}
   */
  createDBSubnetGroup(
    args: CreateDBSubnetGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBSubnetGroupResult,
    | SdkError
    | DBSubnetGroupAlreadyExistsFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupQuotaExceededFault
    | DBSubnetQuotaExceededFault
    | InvalidSubnet
  >;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventSubscriptionResult,
    | SdkError
    | EventSubscriptionQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SourceNotFoundFault
    | SubscriptionAlreadyExistFault
    | SubscriptionCategoryNotFoundFault
  >;

  /**
   * @see {@link CreateGlobalClusterCommand}
   */
  createGlobalCluster(
    args: CreateGlobalClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlobalClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | GlobalClusterAlreadyExistsFault
    | GlobalClusterQuotaExceededFault
    | InvalidDBClusterStateFault
  >;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    Integration,
    | SdkError
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | IntegrationAlreadyExistsFault
    | IntegrationConflictOperationFault
    | IntegrationQuotaExceededFault
    | KMSKeyNotAccessibleFault
  >;

  /**
   * @see {@link CreateOptionGroupCommand}
   */
  createOptionGroup(
    args: CreateOptionGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateOptionGroupResult,
    SdkError | OptionGroupAlreadyExistsFault | OptionGroupQuotaExceededFault
  >;

  /**
   * @see {@link CreateTenantDatabaseCommand}
   */
  createTenantDatabase(
    args: CreateTenantDatabaseMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateTenantDatabaseResult,
    | SdkError
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | TenantDatabaseAlreadyExistsFault
    | TenantDatabaseQuotaExceededFault
  >;

  /**
   * @see {@link DeleteBlueGreenDeploymentCommand}
   */
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBlueGreenDeploymentResponse,
    | SdkError
    | BlueGreenDeploymentNotFoundFault
    | InvalidBlueGreenDeploymentStateFault
  >;

  /**
   * @see {@link DeleteCustomDBEngineVersionCommand}
   */
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBEngineVersion,
    | SdkError
    | CustomDBEngineVersionNotFoundFault
    | InvalidCustomDBEngineVersionStateFault
  >;

  /**
   * @see {@link DeleteDBClusterCommand}
   */
  deleteDBCluster(
    args: DeleteDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterResult,
    | SdkError
    | DBClusterAutomatedBackupQuotaExceededFault
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link DeleteDBClusterAutomatedBackupCommand}
   */
  deleteDBClusterAutomatedBackup(
    args: DeleteDBClusterAutomatedBackupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterAutomatedBackupResult,
    | SdkError
    | DBClusterAutomatedBackupNotFoundFault
    | InvalidDBClusterAutomatedBackupStateFault
  >;

  /**
   * @see {@link DeleteDBClusterEndpointCommand}
   */
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterEndpoint,
    | SdkError
    | DBClusterEndpointNotFoundFault
    | InvalidDBClusterEndpointStateFault
    | InvalidDBClusterStateFault
  >;

  /**
   * @see {@link DeleteDBClusterParameterGroupCommand}
   */
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | DBParameterGroupNotFoundFault | InvalidDBParameterGroupStateFault
  >;

  /**
   * @see {@link DeleteDBClusterSnapshotCommand}
   */
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterSnapshotResult,
    | SdkError
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
  >;

  /**
   * @see {@link DeleteDBInstanceCommand}
   */
  deleteDBInstance(
    args: DeleteDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBInstanceResult,
    | SdkError
    | DBInstanceAutomatedBackupQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link DeleteDBInstanceAutomatedBackupCommand}
   */
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBInstanceAutomatedBackupResult,
    | SdkError
    | DBInstanceAutomatedBackupNotFoundFault
    | InvalidDBInstanceAutomatedBackupStateFault
  >;

  /**
   * @see {@link DeleteDBParameterGroupCommand}
   */
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | DBParameterGroupNotFoundFault | InvalidDBParameterGroupStateFault
  >;

  /**
   * @see {@link DeleteDBProxyCommand}
   */
  deleteDBProxy(
    args: DeleteDBProxyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBProxyResponse,
    SdkError | DBProxyNotFoundFault | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link DeleteDBProxyEndpointCommand}
   */
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBProxyEndpointResponse,
    SdkError | DBProxyEndpointNotFoundFault | InvalidDBProxyEndpointStateFault
  >;

  /**
   * @see {@link DeleteDBSecurityGroupCommand}
   */
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | DBSecurityGroupNotFoundFault | InvalidDBSecurityGroupStateFault
  >;

  /**
   * @see {@link DeleteDBShardGroupCommand}
   */
  deleteDBShardGroup(
    args: DeleteDBShardGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBShardGroup,
    | SdkError
    | DBShardGroupNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBShardGroupStateFault
  >;

  /**
   * @see {@link DeleteDBSnapshotCommand}
   */
  deleteDBSnapshot(
    args: DeleteDBSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBSnapshotResult,
    SdkError | DBSnapshotNotFoundFault | InvalidDBSnapshotStateFault
  >;

  /**
   * @see {@link DeleteDBSubnetGroupCommand}
   */
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DBSubnetGroupNotFoundFault
    | InvalidDBSubnetGroupStateFault
    | InvalidDBSubnetStateFault
  >;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventSubscriptionResult,
    SdkError | InvalidEventSubscriptionStateFault | SubscriptionNotFoundFault
  >;

  /**
   * @see {@link DeleteGlobalClusterCommand}
   */
  deleteGlobalCluster(
    args: DeleteGlobalClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGlobalClusterResult,
    SdkError | GlobalClusterNotFoundFault | InvalidGlobalClusterStateFault
  >;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    Integration,
    | SdkError
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InvalidIntegrationStateFault
  >;

  /**
   * @see {@link DeleteOptionGroupCommand}
   */
  deleteOptionGroup(
    args: DeleteOptionGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | InvalidOptionGroupStateFault | OptionGroupNotFoundFault
  >;

  /**
   * @see {@link DeleteTenantDatabaseCommand}
   */
  deleteTenantDatabase(
    args: DeleteTenantDatabaseMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTenantDatabaseResult,
    | SdkError
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | TenantDatabaseNotFoundFault
  >;

  /**
   * @see {@link DeregisterDBProxyTargetsCommand}
   */
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterDBProxyTargetsResponse,
    | SdkError
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBProxyTargetNotFoundFault
    | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AccountAttributesMessage, SdkError>;

  /**
   * @see {@link DescribeBlueGreenDeploymentsCommand}
   */
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBlueGreenDeploymentsResponse,
    SdkError | BlueGreenDeploymentNotFoundFault
  >;

  /**
   * @see {@link DescribeCertificatesCommand}
   */
  describeCertificates(
    args: DescribeCertificatesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CertificateMessage, SdkError | CertificateNotFoundFault>;

  /**
   * @see {@link DescribeDBClusterAutomatedBackupsCommand}
   */
  describeDBClusterAutomatedBackups(
    args: DescribeDBClusterAutomatedBackupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterAutomatedBackupMessage,
    SdkError | DBClusterAutomatedBackupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBClusterBacktracksCommand}
   */
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterBacktrackMessage,
    SdkError | DBClusterBacktrackNotFoundFault | DBClusterNotFoundFault
  >;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   */
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBClusterEndpointMessage, SdkError | DBClusterNotFoundFault>;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   */
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterParameterGroupsMessage,
    SdkError | DBParameterGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   */
  describeDBClusterParameters(
    args: DescribeDBClusterParametersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterParameterGroupDetails,
    SdkError | DBParameterGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBClusterSnapshotAttributesCommand}
   */
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterSnapshotAttributesResult,
    SdkError | DBClusterSnapshotNotFoundFault
  >;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   */
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterSnapshotMessage,
    SdkError | DBClusterSnapshotNotFoundFault
  >;

  /**
   * @see {@link DescribeDBClustersCommand}
   */
  describeDBClusters(
    args: DescribeDBClustersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBClusterMessage, SdkError | DBClusterNotFoundFault>;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   */
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBEngineVersionMessage, SdkError>;

  /**
   * @see {@link DescribeDBInstanceAutomatedBackupsCommand}
   */
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBInstanceAutomatedBackupMessage,
    SdkError | DBInstanceAutomatedBackupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBInstancesCommand}
   */
  describeDBInstances(
    args: DescribeDBInstancesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBInstanceMessage, SdkError | DBInstanceNotFoundFault>;

  /**
   * @see {@link DescribeDBLogFilesCommand}
   */
  describeDBLogFiles(
    args: DescribeDBLogFilesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBLogFilesResponse,
    SdkError | DBInstanceNotFoundFault
  >;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   */
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBParameterGroupsMessage,
    SdkError | DBParameterGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBParametersCommand}
   */
  describeDBParameters(
    args: DescribeDBParametersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBParameterGroupDetails,
    SdkError | DBParameterGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBProxiesCommand}
   */
  describeDBProxies(
    args: DescribeDBProxiesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeDBProxiesResponse, SdkError | DBProxyNotFoundFault>;

  /**
   * @see {@link DescribeDBProxyEndpointsCommand}
   */
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBProxyEndpointsResponse,
    SdkError | DBProxyEndpointNotFoundFault | DBProxyNotFoundFault
  >;

  /**
   * @see {@link DescribeDBProxyTargetGroupsCommand}
   */
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBProxyTargetGroupsResponse,
    | SdkError
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link DescribeDBProxyTargetsCommand}
   */
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBProxyTargetsResponse,
    | SdkError
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBProxyTargetNotFoundFault
    | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link DescribeDBRecommendationsCommand}
   */
  describeDBRecommendations(
    args: DescribeDBRecommendationsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBRecommendationsMessage, SdkError>;

  /**
   * @see {@link DescribeDBSecurityGroupsCommand}
   */
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBSecurityGroupMessage,
    SdkError | DBSecurityGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBShardGroupsCommand}
   */
  describeDBShardGroups(
    args: DescribeDBShardGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBShardGroupsResponse,
    SdkError | DBClusterNotFoundFault | DBShardGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeDBSnapshotAttributesCommand}
   */
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBSnapshotAttributesResult,
    SdkError | DBSnapshotNotFoundFault
  >;

  /**
   * @see {@link DescribeDBSnapshotTenantDatabasesCommand}
   */
  describeDBSnapshotTenantDatabases(
    args: DescribeDBSnapshotTenantDatabasesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBSnapshotTenantDatabasesMessage,
    SdkError | DBSnapshotNotFoundFault
  >;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   */
  describeDBSnapshots(
    args: DescribeDBSnapshotsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBSnapshotMessage, SdkError | DBSnapshotNotFoundFault>;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   */
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBSubnetGroupMessage, SdkError | DBSubnetGroupNotFoundFault>;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   */
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeEngineDefaultClusterParametersResult, SdkError>;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeEngineDefaultParametersResult, SdkError>;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(
    args: DescribeEventCategoriesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EventCategoriesMessage, SdkError>;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EventSubscriptionsMessage,
    SdkError | SubscriptionNotFoundFault
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EventsMessage, SdkError>;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ExportTasksMessage, SdkError | ExportTaskNotFoundFault>;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   */
  describeGlobalClusters(
    args: DescribeGlobalClustersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GlobalClustersMessage,
    SdkError | GlobalClusterNotFoundFault
  >;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(
    args: DescribeIntegrationsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIntegrationsResponse,
    SdkError | IntegrationNotFoundFault
  >;

  /**
   * @see {@link DescribeOptionGroupOptionsCommand}
   */
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<OptionGroupOptionsMessage, SdkError>;

  /**
   * @see {@link DescribeOptionGroupsCommand}
   */
  describeOptionGroups(
    args: DescribeOptionGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<OptionGroups, SdkError | OptionGroupNotFoundFault>;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   */
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<OrderableDBInstanceOptionsMessage, SdkError>;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PendingMaintenanceActionsMessage,
    SdkError | ResourceNotFoundFault
  >;

  /**
   * @see {@link DescribeReservedDBInstancesCommand}
   */
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReservedDBInstanceMessage,
    SdkError | ReservedDBInstanceNotFoundFault
  >;

  /**
   * @see {@link DescribeReservedDBInstancesOfferingsCommand}
   */
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReservedDBInstancesOfferingMessage,
    SdkError | ReservedDBInstancesOfferingNotFoundFault
  >;

  /**
   * @see {@link DescribeSourceRegionsCommand}
   */
  describeSourceRegions(
    args: DescribeSourceRegionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SourceRegionMessage, SdkError>;

  /**
   * @see {@link DescribeTenantDatabasesCommand}
   */
  describeTenantDatabases(
    args: DescribeTenantDatabasesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<TenantDatabasesMessage, SdkError | DBInstanceNotFoundFault>;

  /**
   * @see {@link DescribeValidDBInstanceModificationsCommand}
   */
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeValidDBInstanceModificationsResult,
    SdkError | DBInstanceNotFoundFault | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link DisableHttpEndpointCommand}
   */
  disableHttpEndpoint(
    args: DisableHttpEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisableHttpEndpointResponse,
    SdkError | InvalidResourceStateFault | ResourceNotFoundFault
  >;

  /**
   * @see {@link DownloadDBLogFilePortionCommand}
   */
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DownloadDBLogFilePortionDetails,
    SdkError | DBInstanceNotFoundFault | DBLogFileNotFoundFault
  >;

  /**
   * @see {@link EnableHttpEndpointCommand}
   */
  enableHttpEndpoint(
    args: EnableHttpEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnableHttpEndpointResponse,
    SdkError | InvalidResourceStateFault | ResourceNotFoundFault
  >;

  /**
   * @see {@link FailoverDBClusterCommand}
   */
  failoverDBCluster(
    args: FailoverDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    FailoverDBClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link FailoverGlobalClusterCommand}
   */
  failoverGlobalCluster(
    args: FailoverGlobalClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    FailoverGlobalClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidGlobalClusterStateFault
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagListMessage,
    | SdkError
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
  >;

  /**
   * @see {@link ModifyActivityStreamCommand}
   */
  modifyActivityStream(
    args: ModifyActivityStreamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyActivityStreamResponse,
    | SdkError
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
  >;

  /**
   * @see {@link ModifyCertificatesCommand}
   */
  modifyCertificates(
    args: ModifyCertificatesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCertificatesResult,
    SdkError | CertificateNotFoundFault
  >;

  /**
   * @see {@link ModifyCurrentDBClusterCapacityCommand}
   */
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterCapacityInfo,
    | SdkError
    | DBClusterNotFoundFault
    | InvalidDBClusterCapacityFault
    | InvalidDBClusterStateFault
  >;

  /**
   * @see {@link ModifyCustomDBEngineVersionCommand}
   */
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBEngineVersion,
    | SdkError
    | CustomDBEngineVersionNotFoundFault
    | InvalidCustomDBEngineVersionStateFault
  >;

  /**
   * @see {@link ModifyDBClusterCommand}
   */
  modifyDBCluster(
    args: ModifyDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBClusterResult,
    | SdkError
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | StorageTypeNotAvailableFault
  >;

  /**
   * @see {@link ModifyDBClusterEndpointCommand}
   */
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterEndpoint,
    | SdkError
    | DBClusterEndpointNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterEndpointStateFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link ModifyDBClusterParameterGroupCommand}
   */
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterParameterGroupNameMessage,
    SdkError | DBParameterGroupNotFoundFault | InvalidDBParameterGroupStateFault
  >;

  /**
   * @see {@link ModifyDBClusterSnapshotAttributeCommand}
   */
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBClusterSnapshotAttributeResult,
    | SdkError
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | SharedSnapshotQuotaExceededFault
  >;

  /**
   * @see {@link ModifyDBInstanceCommand}
   */
  modifyDBInstance(
    args: ModifyDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBInstanceResult,
    | SdkError
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBUpgradeDependencyFailureFault
    | DomainNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
  >;

  /**
   * @see {@link ModifyDBParameterGroupCommand}
   */
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBParameterGroupNameMessage,
    SdkError | DBParameterGroupNotFoundFault | InvalidDBParameterGroupStateFault
  >;

  /**
   * @see {@link ModifyDBProxyCommand}
   */
  modifyDBProxy(
    args: ModifyDBProxyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBProxyResponse,
    | SdkError
    | DBProxyAlreadyExistsFault
    | DBProxyNotFoundFault
    | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link ModifyDBProxyEndpointCommand}
   */
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBProxyEndpointResponse,
    | SdkError
    | DBProxyEndpointAlreadyExistsFault
    | DBProxyEndpointNotFoundFault
    | InvalidDBProxyEndpointStateFault
    | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link ModifyDBProxyTargetGroupCommand}
   */
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBProxyTargetGroupResponse,
    | SdkError
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link ModifyDBRecommendationCommand}
   */
  modifyDBRecommendation(
    args: ModifyDBRecommendationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DBRecommendationMessage, SdkError>;

  /**
   * @see {@link ModifyDBShardGroupCommand}
   */
  modifyDBShardGroup(
    args: ModifyDBShardGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBShardGroup,
    | SdkError
    | DBShardGroupAlreadyExistsFault
    | DBShardGroupNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidMaxAcuFault
  >;

  /**
   * @see {@link ModifyDBSnapshotCommand}
   */
  modifyDBSnapshot(
    args: ModifyDBSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyDBSnapshotResult, SdkError | DBSnapshotNotFoundFault>;

  /**
   * @see {@link ModifyDBSnapshotAttributeCommand}
   */
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBSnapshotAttributeResult,
    | SdkError
    | DBSnapshotNotFoundFault
    | InvalidDBSnapshotStateFault
    | SharedSnapshotQuotaExceededFault
  >;

  /**
   * @see {@link ModifyDBSubnetGroupCommand}
   */
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBSubnetGroupResult,
    | SdkError
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DBSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetAlreadyInUse
  >;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyEventSubscriptionResult,
    | SdkError
    | EventSubscriptionQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SubscriptionCategoryNotFoundFault
    | SubscriptionNotFoundFault
  >;

  /**
   * @see {@link ModifyGlobalClusterCommand}
   */
  modifyGlobalCluster(
    args: ModifyGlobalClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyGlobalClusterResult,
    | SdkError
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidGlobalClusterStateFault
  >;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    Integration,
    | SdkError
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InvalidIntegrationStateFault
  >;

  /**
   * @see {@link ModifyOptionGroupCommand}
   */
  modifyOptionGroup(
    args: ModifyOptionGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyOptionGroupResult,
    SdkError | InvalidOptionGroupStateFault | OptionGroupNotFoundFault
  >;

  /**
   * @see {@link ModifyTenantDatabaseCommand}
   */
  modifyTenantDatabase(
    args: ModifyTenantDatabaseMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTenantDatabaseResult,
    | SdkError
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | TenantDatabaseAlreadyExistsFault
    | TenantDatabaseNotFoundFault
  >;

  /**
   * @see {@link PromoteReadReplicaCommand}
   */
  promoteReadReplica(
    args: PromoteReadReplicaMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PromoteReadReplicaResult,
    SdkError | DBInstanceNotFoundFault | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link PromoteReadReplicaDBClusterCommand}
   */
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PromoteReadReplicaDBClusterResult,
    SdkError | DBClusterNotFoundFault | InvalidDBClusterStateFault
  >;

  /**
   * @see {@link PurchaseReservedDBInstancesOfferingCommand}
   */
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedDBInstancesOfferingResult,
    | SdkError
    | ReservedDBInstanceAlreadyExistsFault
    | ReservedDBInstanceQuotaExceededFault
    | ReservedDBInstancesOfferingNotFoundFault
  >;

  /**
   * @see {@link RebootDBClusterCommand}
   */
  rebootDBCluster(
    args: RebootDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RebootDBClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link RebootDBInstanceCommand}
   */
  rebootDBInstance(
    args: RebootDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RebootDBInstanceResult,
    SdkError | DBInstanceNotFoundFault | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link RebootDBShardGroupCommand}
   */
  rebootDBShardGroup(
    args: RebootDBShardGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBShardGroup,
    SdkError | DBShardGroupNotFoundFault | InvalidDBShardGroupStateFault
  >;

  /**
   * @see {@link RegisterDBProxyTargetsCommand}
   */
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterDBProxyTargetsResponse,
    | SdkError
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetAlreadyRegisteredFault
    | DBProxyTargetGroupNotFoundFault
    | InsufficientAvailableIPsInSubnetFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBProxyStateFault
  >;

  /**
   * @see {@link RemoveFromGlobalClusterCommand}
   */
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveFromGlobalClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidGlobalClusterStateFault
  >;

  /**
   * @see {@link RemoveRoleFromDBClusterCommand}
   */
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DBClusterNotFoundFault
    | DBClusterRoleNotFoundFault
    | InvalidDBClusterStateFault
  >;

  /**
   * @see {@link RemoveRoleFromDBInstanceCommand}
   */
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DBInstanceNotFoundFault
    | DBInstanceRoleNotFoundFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link RemoveSourceIdentifierFromSubscriptionCommand}
   */
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveSourceIdentifierFromSubscriptionResult,
    SdkError | SourceNotFoundFault | SubscriptionNotFoundFault
  >;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
  >;

  /**
   * @see {@link ResetDBClusterParameterGroupCommand}
   */
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBClusterParameterGroupNameMessage,
    SdkError | DBParameterGroupNotFoundFault | InvalidDBParameterGroupStateFault
  >;

  /**
   * @see {@link ResetDBParameterGroupCommand}
   */
  resetDBParameterGroup(
    args: ResetDBParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DBParameterGroupNameMessage,
    SdkError | DBParameterGroupNotFoundFault | InvalidDBParameterGroupStateFault
  >;

  /**
   * @see {@link RestoreDBClusterFromS3Command}
   */
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3Message,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBClusterFromS3Result,
    | SdkError
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidS3BucketFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
  >;

  /**
   * @see {@link RestoreDBClusterFromSnapshotCommand}
   */
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBClusterFromSnapshotResult,
    | SdkError
    | DBClusterAlreadyExistsFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
  >;

  /**
   * @see {@link RestoreDBClusterToPointInTimeCommand}
   */
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBClusterToPointInTimeResult,
    | SdkError
    | DBClusterAlreadyExistsFault
    | DBClusterAutomatedBackupNotFoundFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
  >;

  /**
   * @see {@link RestoreDBInstanceFromDBSnapshotCommand}
   */
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBInstanceFromDBSnapshotResult,
    | SdkError
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBClusterSnapshotNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
  >;

  /**
   * @see {@link RestoreDBInstanceFromS3Command}
   */
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3Message,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBInstanceFromS3Result,
    | SdkError
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidS3BucketFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
  >;

  /**
   * @see {@link RestoreDBInstanceToPointInTimeCommand}
   */
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBInstanceToPointInTimeResult,
    | SdkError
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceAutomatedBackupNotFoundFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBInstanceStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | PointInTimeRestoreNotEnabledFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
  >;

  /**
   * @see {@link RevokeDBSecurityGroupIngressCommand}
   */
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RevokeDBSecurityGroupIngressResult,
    | SdkError
    | AuthorizationNotFoundFault
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
  >;

  /**
   * @see {@link StartActivityStreamCommand}
   */
  startActivityStream(
    args: StartActivityStreamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartActivityStreamResponse,
    | SdkError
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
  >;

  /**
   * @see {@link StartDBClusterCommand}
   */
  startDBCluster(
    args: StartDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartDBClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link StartDBInstanceCommand}
   */
  startDBInstance(
    args: StartDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartDBInstanceResult,
    | SdkError
    | AuthorizationNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
  >;

  /**
   * @see {@link StartDBInstanceAutomatedBackupsReplicationCommand}
   */
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartDBInstanceAutomatedBackupsReplicationResult,
    | SdkError
    | DBInstanceAutomatedBackupQuotaExceededFault
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | StorageTypeNotSupportedFault
  >;

  /**
   * @see {@link StartExportTaskCommand}
   */
  startExportTask(
    args: StartExportTaskMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExportTask,
    | SdkError
    | DBClusterNotFoundFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | ExportTaskAlreadyExistsFault
    | IamRoleMissingPermissionsFault
    | IamRoleNotFoundFault
    | InvalidExportOnlyFault
    | InvalidExportSourceStateFault
    | InvalidS3BucketFault
    | KMSKeyNotAccessibleFault
  >;

  /**
   * @see {@link StopActivityStreamCommand}
   */
  stopActivityStream(
    args: StopActivityStreamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopActivityStreamResponse,
    | SdkError
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
  >;

  /**
   * @see {@link StopDBClusterCommand}
   */
  stopDBCluster(
    args: StopDBClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopDBClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link StopDBInstanceCommand}
   */
  stopDBInstance(
    args: StopDBInstanceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopDBInstanceResult,
    | SdkError
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link StopDBInstanceAutomatedBackupsReplicationCommand}
   */
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopDBInstanceAutomatedBackupsReplicationResult,
    SdkError | DBInstanceNotFoundFault | InvalidDBInstanceStateFault
  >;

  /**
   * @see {@link SwitchoverBlueGreenDeploymentCommand}
   */
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SwitchoverBlueGreenDeploymentResponse,
    | SdkError
    | BlueGreenDeploymentNotFoundFault
    | InvalidBlueGreenDeploymentStateFault
  >;

  /**
   * @see {@link SwitchoverGlobalClusterCommand}
   */
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SwitchoverGlobalClusterResult,
    | SdkError
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidGlobalClusterStateFault
  >;

  /**
   * @see {@link SwitchoverReadReplicaCommand}
   */
  switchoverReadReplica(
    args: SwitchoverReadReplicaMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SwitchoverReadReplicaResult,
    SdkError | DBInstanceNotFoundFault | InvalidDBInstanceStateFault
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const RDSService = Context.GenericTag<RDSService>(
  "@effect-aws/client-rds/RDSService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeRDSService = Effect.gen(function* (_) {
  const client = yield* _(RDSClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkRDSServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkRDSServiceException>
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
  }, {}) as RDSService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseRDSServiceLayer = Layer.effect(RDSService, makeRDSService);

/**
 * @since 1.0.0
 * @category layers
 */
export const RDSServiceLayer = BaseRDSServiceLayer.pipe(
  Layer.provide(RDSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultRDSServiceLayer = RDSServiceLayer.pipe(
  Layer.provide(DefaultRDSClientConfigLayer),
);
