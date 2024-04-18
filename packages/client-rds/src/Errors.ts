import type {
  AuthorizationAlreadyExistsFault as SdkAuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault as SdkAuthorizationNotFoundFault,
  AuthorizationQuotaExceededFault as SdkAuthorizationQuotaExceededFault,
  BackupPolicyNotFoundFault as SdkBackupPolicyNotFoundFault,
  BlueGreenDeploymentAlreadyExistsFault as SdkBlueGreenDeploymentAlreadyExistsFault,
  BlueGreenDeploymentNotFoundFault as SdkBlueGreenDeploymentNotFoundFault,
  CertificateNotFoundFault as SdkCertificateNotFoundFault,
  CreateCustomDBEngineVersionFault as SdkCreateCustomDBEngineVersionFault,
  CustomAvailabilityZoneNotFoundFault as SdkCustomAvailabilityZoneNotFoundFault,
  CustomDBEngineVersionAlreadyExistsFault as SdkCustomDBEngineVersionAlreadyExistsFault,
  CustomDBEngineVersionNotFoundFault as SdkCustomDBEngineVersionNotFoundFault,
  CustomDBEngineVersionQuotaExceededFault as SdkCustomDBEngineVersionQuotaExceededFault,
  DBClusterAlreadyExistsFault as SdkDBClusterAlreadyExistsFault,
  DBClusterAutomatedBackupNotFoundFault as SdkDBClusterAutomatedBackupNotFoundFault,
  DBClusterAutomatedBackupQuotaExceededFault as SdkDBClusterAutomatedBackupQuotaExceededFault,
  DBClusterBacktrackNotFoundFault as SdkDBClusterBacktrackNotFoundFault,
  DBClusterEndpointAlreadyExistsFault as SdkDBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointNotFoundFault as SdkDBClusterEndpointNotFoundFault,
  DBClusterEndpointQuotaExceededFault as SdkDBClusterEndpointQuotaExceededFault,
  DBClusterNotFoundFault as SdkDBClusterNotFoundFault,
  DBClusterParameterGroupNotFoundFault as SdkDBClusterParameterGroupNotFoundFault,
  DBClusterQuotaExceededFault as SdkDBClusterQuotaExceededFault,
  DBClusterRoleAlreadyExistsFault as SdkDBClusterRoleAlreadyExistsFault,
  DBClusterRoleNotFoundFault as SdkDBClusterRoleNotFoundFault,
  DBClusterRoleQuotaExceededFault as SdkDBClusterRoleQuotaExceededFault,
  DBClusterSnapshotAlreadyExistsFault as SdkDBClusterSnapshotAlreadyExistsFault,
  DBClusterSnapshotNotFoundFault as SdkDBClusterSnapshotNotFoundFault,
  DBInstanceAlreadyExistsFault as SdkDBInstanceAlreadyExistsFault,
  DBInstanceAutomatedBackupNotFoundFault as SdkDBInstanceAutomatedBackupNotFoundFault,
  DBInstanceAutomatedBackupQuotaExceededFault as SdkDBInstanceAutomatedBackupQuotaExceededFault,
  DBInstanceNotFoundFault as SdkDBInstanceNotFoundFault,
  DBInstanceRoleAlreadyExistsFault as SdkDBInstanceRoleAlreadyExistsFault,
  DBInstanceRoleNotFoundFault as SdkDBInstanceRoleNotFoundFault,
  DBInstanceRoleQuotaExceededFault as SdkDBInstanceRoleQuotaExceededFault,
  DBLogFileNotFoundFault as SdkDBLogFileNotFoundFault,
  DBParameterGroupAlreadyExistsFault as SdkDBParameterGroupAlreadyExistsFault,
  DBParameterGroupNotFoundFault as SdkDBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault as SdkDBParameterGroupQuotaExceededFault,
  DBProxyAlreadyExistsFault as SdkDBProxyAlreadyExistsFault,
  DBProxyEndpointAlreadyExistsFault as SdkDBProxyEndpointAlreadyExistsFault,
  DBProxyEndpointNotFoundFault as SdkDBProxyEndpointNotFoundFault,
  DBProxyEndpointQuotaExceededFault as SdkDBProxyEndpointQuotaExceededFault,
  DBProxyNotFoundFault as SdkDBProxyNotFoundFault,
  DBProxyQuotaExceededFault as SdkDBProxyQuotaExceededFault,
  DBProxyTargetAlreadyRegisteredFault as SdkDBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetGroupNotFoundFault as SdkDBProxyTargetGroupNotFoundFault,
  DBProxyTargetNotFoundFault as SdkDBProxyTargetNotFoundFault,
  DBSecurityGroupAlreadyExistsFault as SdkDBSecurityGroupAlreadyExistsFault,
  DBSecurityGroupNotFoundFault as SdkDBSecurityGroupNotFoundFault,
  DBSecurityGroupNotSupportedFault as SdkDBSecurityGroupNotSupportedFault,
  DBSecurityGroupQuotaExceededFault as SdkDBSecurityGroupQuotaExceededFault,
  DBShardGroupAlreadyExistsFault as SdkDBShardGroupAlreadyExistsFault,
  DBShardGroupNotFoundFault as SdkDBShardGroupNotFoundFault,
  DBSnapshotAlreadyExistsFault as SdkDBSnapshotAlreadyExistsFault,
  DBSnapshotNotFoundFault as SdkDBSnapshotNotFoundFault,
  DBSnapshotTenantDatabaseNotFoundFault as SdkDBSnapshotTenantDatabaseNotFoundFault,
  DBSubnetGroupAlreadyExistsFault as SdkDBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupDoesNotCoverEnoughAZs as SdkDBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupNotAllowedFault as SdkDBSubnetGroupNotAllowedFault,
  DBSubnetGroupNotFoundFault as SdkDBSubnetGroupNotFoundFault,
  DBSubnetGroupQuotaExceededFault as SdkDBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault as SdkDBSubnetQuotaExceededFault,
  DBUpgradeDependencyFailureFault as SdkDBUpgradeDependencyFailureFault,
  DomainNotFoundFault as SdkDomainNotFoundFault,
  Ec2ImagePropertiesNotSupportedFault as SdkEc2ImagePropertiesNotSupportedFault,
  EventSubscriptionQuotaExceededFault as SdkEventSubscriptionQuotaExceededFault,
  ExportTaskAlreadyExistsFault as SdkExportTaskAlreadyExistsFault,
  ExportTaskNotFoundFault as SdkExportTaskNotFoundFault,
  GlobalClusterAlreadyExistsFault as SdkGlobalClusterAlreadyExistsFault,
  GlobalClusterNotFoundFault as SdkGlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault as SdkGlobalClusterQuotaExceededFault,
  IamRoleMissingPermissionsFault as SdkIamRoleMissingPermissionsFault,
  IamRoleNotFoundFault as SdkIamRoleNotFoundFault,
  InstanceQuotaExceededFault as SdkInstanceQuotaExceededFault,
  InsufficientAvailableIPsInSubnetFault as SdkInsufficientAvailableIPsInSubnetFault,
  InsufficientDBClusterCapacityFault as SdkInsufficientDBClusterCapacityFault,
  InsufficientDBInstanceCapacityFault as SdkInsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault as SdkInsufficientStorageClusterCapacityFault,
  IntegrationAlreadyExistsFault as SdkIntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault as SdkIntegrationConflictOperationFault,
  IntegrationNotFoundFault as SdkIntegrationNotFoundFault,
  IntegrationQuotaExceededFault as SdkIntegrationQuotaExceededFault,
  InvalidBlueGreenDeploymentStateFault as SdkInvalidBlueGreenDeploymentStateFault,
  InvalidCustomDBEngineVersionStateFault as SdkInvalidCustomDBEngineVersionStateFault,
  InvalidDBClusterAutomatedBackupStateFault as SdkInvalidDBClusterAutomatedBackupStateFault,
  InvalidDBClusterCapacityFault as SdkInvalidDBClusterCapacityFault,
  InvalidDBClusterEndpointStateFault as SdkInvalidDBClusterEndpointStateFault,
  InvalidDBClusterSnapshotStateFault as SdkInvalidDBClusterSnapshotStateFault,
  InvalidDBClusterStateFault as SdkInvalidDBClusterStateFault,
  InvalidDBInstanceAutomatedBackupStateFault as SdkInvalidDBInstanceAutomatedBackupStateFault,
  InvalidDBInstanceStateFault as SdkInvalidDBInstanceStateFault,
  InvalidDBParameterGroupStateFault as SdkInvalidDBParameterGroupStateFault,
  InvalidDBProxyEndpointStateFault as SdkInvalidDBProxyEndpointStateFault,
  InvalidDBProxyStateFault as SdkInvalidDBProxyStateFault,
  InvalidDBSecurityGroupStateFault as SdkInvalidDBSecurityGroupStateFault,
  InvalidDBShardGroupStateFault as SdkInvalidDBShardGroupStateFault,
  InvalidDBSnapshotStateFault as SdkInvalidDBSnapshotStateFault,
  InvalidDBSubnetGroupFault as SdkInvalidDBSubnetGroupFault,
  InvalidDBSubnetGroupStateFault as SdkInvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault as SdkInvalidDBSubnetStateFault,
  InvalidEventSubscriptionStateFault as SdkInvalidEventSubscriptionStateFault,
  InvalidExportOnlyFault as SdkInvalidExportOnlyFault,
  InvalidExportSourceStateFault as SdkInvalidExportSourceStateFault,
  InvalidExportTaskStateFault as SdkInvalidExportTaskStateFault,
  InvalidGlobalClusterStateFault as SdkInvalidGlobalClusterStateFault,
  InvalidIntegrationStateFault as SdkInvalidIntegrationStateFault,
  InvalidMaxAcuFault as SdkInvalidMaxAcuFault,
  InvalidOptionGroupStateFault as SdkInvalidOptionGroupStateFault,
  InvalidResourceStateFault as SdkInvalidResourceStateFault,
  InvalidRestoreFault as SdkInvalidRestoreFault,
  InvalidS3BucketFault as SdkInvalidS3BucketFault,
  InvalidSubnet as SdkInvalidSubnet,
  InvalidVPCNetworkStateFault as SdkInvalidVPCNetworkStateFault,
  KMSKeyNotAccessibleFault as SdkKMSKeyNotAccessibleFault,
  MaxDBShardGroupLimitReached as SdkMaxDBShardGroupLimitReached,
  NetworkTypeNotSupported as SdkNetworkTypeNotSupported,
  OptionGroupAlreadyExistsFault as SdkOptionGroupAlreadyExistsFault,
  OptionGroupNotFoundFault as SdkOptionGroupNotFoundFault,
  OptionGroupQuotaExceededFault as SdkOptionGroupQuotaExceededFault,
  PointInTimeRestoreNotEnabledFault as SdkPointInTimeRestoreNotEnabledFault,
  ProvisionedIopsNotAvailableInAZFault as SdkProvisionedIopsNotAvailableInAZFault,
  ReservedDBInstanceAlreadyExistsFault as SdkReservedDBInstanceAlreadyExistsFault,
  ReservedDBInstanceNotFoundFault as SdkReservedDBInstanceNotFoundFault,
  ReservedDBInstanceQuotaExceededFault as SdkReservedDBInstanceQuotaExceededFault,
  ReservedDBInstancesOfferingNotFoundFault as SdkReservedDBInstancesOfferingNotFoundFault,
  ResourceNotFoundFault as SdkResourceNotFoundFault,
  SNSInvalidTopicFault as SdkSNSInvalidTopicFault,
  SNSNoAuthorizationFault as SdkSNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault as SdkSNSTopicArnNotFoundFault,
  SharedSnapshotQuotaExceededFault as SdkSharedSnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault as SdkSnapshotQuotaExceededFault,
  SourceClusterNotSupportedFault as SdkSourceClusterNotSupportedFault,
  SourceDatabaseNotSupportedFault as SdkSourceDatabaseNotSupportedFault,
  SourceNotFoundFault as SdkSourceNotFoundFault,
  StorageQuotaExceededFault as SdkStorageQuotaExceededFault,
  StorageTypeNotAvailableFault as SdkStorageTypeNotAvailableFault,
  StorageTypeNotSupportedFault as SdkStorageTypeNotSupportedFault,
  SubnetAlreadyInUse as SdkSubnetAlreadyInUse,
  SubscriptionAlreadyExistFault as SdkSubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault as SdkSubscriptionCategoryNotFoundFault,
  SubscriptionNotFoundFault as SdkSubscriptionNotFoundFault,
  TenantDatabaseAlreadyExistsFault as SdkTenantDatabaseAlreadyExistsFault,
  TenantDatabaseNotFoundFault as SdkTenantDatabaseNotFoundFault,
  TenantDatabaseQuotaExceededFault as SdkTenantDatabaseQuotaExceededFault,
  UnsupportedDBEngineVersionFault as SdkUnsupportedDBEngineVersionFault,
} from "@aws-sdk/client-rds";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AuthorizationAlreadyExistsFault =
  TaggedException<SdkAuthorizationAlreadyExistsFault>;
export type AuthorizationNotFoundFault =
  TaggedException<SdkAuthorizationNotFoundFault>;
export type AuthorizationQuotaExceededFault =
  TaggedException<SdkAuthorizationQuotaExceededFault>;
export type BackupPolicyNotFoundFault =
  TaggedException<SdkBackupPolicyNotFoundFault>;
export type BlueGreenDeploymentAlreadyExistsFault =
  TaggedException<SdkBlueGreenDeploymentAlreadyExistsFault>;
export type BlueGreenDeploymentNotFoundFault =
  TaggedException<SdkBlueGreenDeploymentNotFoundFault>;
export type CertificateNotFoundFault =
  TaggedException<SdkCertificateNotFoundFault>;
export type CreateCustomDBEngineVersionFault =
  TaggedException<SdkCreateCustomDBEngineVersionFault>;
export type CustomAvailabilityZoneNotFoundFault =
  TaggedException<SdkCustomAvailabilityZoneNotFoundFault>;
export type CustomDBEngineVersionAlreadyExistsFault =
  TaggedException<SdkCustomDBEngineVersionAlreadyExistsFault>;
export type CustomDBEngineVersionNotFoundFault =
  TaggedException<SdkCustomDBEngineVersionNotFoundFault>;
export type CustomDBEngineVersionQuotaExceededFault =
  TaggedException<SdkCustomDBEngineVersionQuotaExceededFault>;
export type DBClusterAlreadyExistsFault =
  TaggedException<SdkDBClusterAlreadyExistsFault>;
export type DBClusterAutomatedBackupNotFoundFault =
  TaggedException<SdkDBClusterAutomatedBackupNotFoundFault>;
export type DBClusterAutomatedBackupQuotaExceededFault =
  TaggedException<SdkDBClusterAutomatedBackupQuotaExceededFault>;
export type DBClusterBacktrackNotFoundFault =
  TaggedException<SdkDBClusterBacktrackNotFoundFault>;
export type DBClusterEndpointAlreadyExistsFault =
  TaggedException<SdkDBClusterEndpointAlreadyExistsFault>;
export type DBClusterEndpointNotFoundFault =
  TaggedException<SdkDBClusterEndpointNotFoundFault>;
export type DBClusterEndpointQuotaExceededFault =
  TaggedException<SdkDBClusterEndpointQuotaExceededFault>;
export type DBClusterNotFoundFault = TaggedException<SdkDBClusterNotFoundFault>;
export type DBClusterParameterGroupNotFoundFault =
  TaggedException<SdkDBClusterParameterGroupNotFoundFault>;
export type DBClusterQuotaExceededFault =
  TaggedException<SdkDBClusterQuotaExceededFault>;
export type DBClusterRoleAlreadyExistsFault =
  TaggedException<SdkDBClusterRoleAlreadyExistsFault>;
export type DBClusterRoleNotFoundFault =
  TaggedException<SdkDBClusterRoleNotFoundFault>;
export type DBClusterRoleQuotaExceededFault =
  TaggedException<SdkDBClusterRoleQuotaExceededFault>;
export type DBClusterSnapshotAlreadyExistsFault =
  TaggedException<SdkDBClusterSnapshotAlreadyExistsFault>;
export type DBClusterSnapshotNotFoundFault =
  TaggedException<SdkDBClusterSnapshotNotFoundFault>;
export type DBInstanceAlreadyExistsFault =
  TaggedException<SdkDBInstanceAlreadyExistsFault>;
export type DBInstanceAutomatedBackupNotFoundFault =
  TaggedException<SdkDBInstanceAutomatedBackupNotFoundFault>;
export type DBInstanceAutomatedBackupQuotaExceededFault =
  TaggedException<SdkDBInstanceAutomatedBackupQuotaExceededFault>;
export type DBInstanceNotFoundFault =
  TaggedException<SdkDBInstanceNotFoundFault>;
export type DBInstanceRoleAlreadyExistsFault =
  TaggedException<SdkDBInstanceRoleAlreadyExistsFault>;
export type DBInstanceRoleNotFoundFault =
  TaggedException<SdkDBInstanceRoleNotFoundFault>;
export type DBInstanceRoleQuotaExceededFault =
  TaggedException<SdkDBInstanceRoleQuotaExceededFault>;
export type DBLogFileNotFoundFault = TaggedException<SdkDBLogFileNotFoundFault>;
export type DBParameterGroupAlreadyExistsFault =
  TaggedException<SdkDBParameterGroupAlreadyExistsFault>;
export type DBParameterGroupNotFoundFault =
  TaggedException<SdkDBParameterGroupNotFoundFault>;
export type DBParameterGroupQuotaExceededFault =
  TaggedException<SdkDBParameterGroupQuotaExceededFault>;
export type DBProxyAlreadyExistsFault =
  TaggedException<SdkDBProxyAlreadyExistsFault>;
export type DBProxyEndpointAlreadyExistsFault =
  TaggedException<SdkDBProxyEndpointAlreadyExistsFault>;
export type DBProxyEndpointNotFoundFault =
  TaggedException<SdkDBProxyEndpointNotFoundFault>;
export type DBProxyEndpointQuotaExceededFault =
  TaggedException<SdkDBProxyEndpointQuotaExceededFault>;
export type DBProxyNotFoundFault = TaggedException<SdkDBProxyNotFoundFault>;
export type DBProxyQuotaExceededFault =
  TaggedException<SdkDBProxyQuotaExceededFault>;
export type DBProxyTargetAlreadyRegisteredFault =
  TaggedException<SdkDBProxyTargetAlreadyRegisteredFault>;
export type DBProxyTargetGroupNotFoundFault =
  TaggedException<SdkDBProxyTargetGroupNotFoundFault>;
export type DBProxyTargetNotFoundFault =
  TaggedException<SdkDBProxyTargetNotFoundFault>;
export type DBSecurityGroupAlreadyExistsFault =
  TaggedException<SdkDBSecurityGroupAlreadyExistsFault>;
export type DBSecurityGroupNotFoundFault =
  TaggedException<SdkDBSecurityGroupNotFoundFault>;
export type DBSecurityGroupNotSupportedFault =
  TaggedException<SdkDBSecurityGroupNotSupportedFault>;
export type DBSecurityGroupQuotaExceededFault =
  TaggedException<SdkDBSecurityGroupQuotaExceededFault>;
export type DBShardGroupAlreadyExistsFault =
  TaggedException<SdkDBShardGroupAlreadyExistsFault>;
export type DBShardGroupNotFoundFault =
  TaggedException<SdkDBShardGroupNotFoundFault>;
export type DBSnapshotAlreadyExistsFault =
  TaggedException<SdkDBSnapshotAlreadyExistsFault>;
export type DBSnapshotNotFoundFault =
  TaggedException<SdkDBSnapshotNotFoundFault>;
export type DBSnapshotTenantDatabaseNotFoundFault =
  TaggedException<SdkDBSnapshotTenantDatabaseNotFoundFault>;
export type DBSubnetGroupAlreadyExistsFault =
  TaggedException<SdkDBSubnetGroupAlreadyExistsFault>;
export type DBSubnetGroupDoesNotCoverEnoughAZs =
  TaggedException<SdkDBSubnetGroupDoesNotCoverEnoughAZs>;
export type DBSubnetGroupNotAllowedFault =
  TaggedException<SdkDBSubnetGroupNotAllowedFault>;
export type DBSubnetGroupNotFoundFault =
  TaggedException<SdkDBSubnetGroupNotFoundFault>;
export type DBSubnetGroupQuotaExceededFault =
  TaggedException<SdkDBSubnetGroupQuotaExceededFault>;
export type DBSubnetQuotaExceededFault =
  TaggedException<SdkDBSubnetQuotaExceededFault>;
export type DBUpgradeDependencyFailureFault =
  TaggedException<SdkDBUpgradeDependencyFailureFault>;
export type DomainNotFoundFault = TaggedException<SdkDomainNotFoundFault>;
export type Ec2ImagePropertiesNotSupportedFault =
  TaggedException<SdkEc2ImagePropertiesNotSupportedFault>;
export type EventSubscriptionQuotaExceededFault =
  TaggedException<SdkEventSubscriptionQuotaExceededFault>;
export type ExportTaskAlreadyExistsFault =
  TaggedException<SdkExportTaskAlreadyExistsFault>;
export type ExportTaskNotFoundFault =
  TaggedException<SdkExportTaskNotFoundFault>;
export type GlobalClusterAlreadyExistsFault =
  TaggedException<SdkGlobalClusterAlreadyExistsFault>;
export type GlobalClusterNotFoundFault =
  TaggedException<SdkGlobalClusterNotFoundFault>;
export type GlobalClusterQuotaExceededFault =
  TaggedException<SdkGlobalClusterQuotaExceededFault>;
export type IamRoleMissingPermissionsFault =
  TaggedException<SdkIamRoleMissingPermissionsFault>;
export type IamRoleNotFoundFault = TaggedException<SdkIamRoleNotFoundFault>;
export type InstanceQuotaExceededFault =
  TaggedException<SdkInstanceQuotaExceededFault>;
export type InsufficientAvailableIPsInSubnetFault =
  TaggedException<SdkInsufficientAvailableIPsInSubnetFault>;
export type InsufficientDBClusterCapacityFault =
  TaggedException<SdkInsufficientDBClusterCapacityFault>;
export type InsufficientDBInstanceCapacityFault =
  TaggedException<SdkInsufficientDBInstanceCapacityFault>;
export type InsufficientStorageClusterCapacityFault =
  TaggedException<SdkInsufficientStorageClusterCapacityFault>;
export type IntegrationAlreadyExistsFault =
  TaggedException<SdkIntegrationAlreadyExistsFault>;
export type IntegrationConflictOperationFault =
  TaggedException<SdkIntegrationConflictOperationFault>;
export type IntegrationNotFoundFault =
  TaggedException<SdkIntegrationNotFoundFault>;
export type IntegrationQuotaExceededFault =
  TaggedException<SdkIntegrationQuotaExceededFault>;
export type InvalidBlueGreenDeploymentStateFault =
  TaggedException<SdkInvalidBlueGreenDeploymentStateFault>;
export type InvalidCustomDBEngineVersionStateFault =
  TaggedException<SdkInvalidCustomDBEngineVersionStateFault>;
export type InvalidDBClusterAutomatedBackupStateFault =
  TaggedException<SdkInvalidDBClusterAutomatedBackupStateFault>;
export type InvalidDBClusterCapacityFault =
  TaggedException<SdkInvalidDBClusterCapacityFault>;
export type InvalidDBClusterEndpointStateFault =
  TaggedException<SdkInvalidDBClusterEndpointStateFault>;
export type InvalidDBClusterSnapshotStateFault =
  TaggedException<SdkInvalidDBClusterSnapshotStateFault>;
export type InvalidDBClusterStateFault =
  TaggedException<SdkInvalidDBClusterStateFault>;
export type InvalidDBInstanceAutomatedBackupStateFault =
  TaggedException<SdkInvalidDBInstanceAutomatedBackupStateFault>;
export type InvalidDBInstanceStateFault =
  TaggedException<SdkInvalidDBInstanceStateFault>;
export type InvalidDBParameterGroupStateFault =
  TaggedException<SdkInvalidDBParameterGroupStateFault>;
export type InvalidDBProxyEndpointStateFault =
  TaggedException<SdkInvalidDBProxyEndpointStateFault>;
export type InvalidDBProxyStateFault =
  TaggedException<SdkInvalidDBProxyStateFault>;
export type InvalidDBSecurityGroupStateFault =
  TaggedException<SdkInvalidDBSecurityGroupStateFault>;
export type InvalidDBShardGroupStateFault =
  TaggedException<SdkInvalidDBShardGroupStateFault>;
export type InvalidDBSnapshotStateFault =
  TaggedException<SdkInvalidDBSnapshotStateFault>;
export type InvalidDBSubnetGroupFault =
  TaggedException<SdkInvalidDBSubnetGroupFault>;
export type InvalidDBSubnetGroupStateFault =
  TaggedException<SdkInvalidDBSubnetGroupStateFault>;
export type InvalidDBSubnetStateFault =
  TaggedException<SdkInvalidDBSubnetStateFault>;
export type InvalidEventSubscriptionStateFault =
  TaggedException<SdkInvalidEventSubscriptionStateFault>;
export type InvalidExportOnlyFault = TaggedException<SdkInvalidExportOnlyFault>;
export type InvalidExportSourceStateFault =
  TaggedException<SdkInvalidExportSourceStateFault>;
export type InvalidExportTaskStateFault =
  TaggedException<SdkInvalidExportTaskStateFault>;
export type InvalidGlobalClusterStateFault =
  TaggedException<SdkInvalidGlobalClusterStateFault>;
export type InvalidIntegrationStateFault =
  TaggedException<SdkInvalidIntegrationStateFault>;
export type InvalidMaxAcuFault = TaggedException<SdkInvalidMaxAcuFault>;
export type InvalidOptionGroupStateFault =
  TaggedException<SdkInvalidOptionGroupStateFault>;
export type InvalidResourceStateFault =
  TaggedException<SdkInvalidResourceStateFault>;
export type InvalidRestoreFault = TaggedException<SdkInvalidRestoreFault>;
export type InvalidS3BucketFault = TaggedException<SdkInvalidS3BucketFault>;
export type InvalidSubnet = TaggedException<SdkInvalidSubnet>;
export type InvalidVPCNetworkStateFault =
  TaggedException<SdkInvalidVPCNetworkStateFault>;
export type KMSKeyNotAccessibleFault =
  TaggedException<SdkKMSKeyNotAccessibleFault>;
export type MaxDBShardGroupLimitReached =
  TaggedException<SdkMaxDBShardGroupLimitReached>;
export type NetworkTypeNotSupported =
  TaggedException<SdkNetworkTypeNotSupported>;
export type OptionGroupAlreadyExistsFault =
  TaggedException<SdkOptionGroupAlreadyExistsFault>;
export type OptionGroupNotFoundFault =
  TaggedException<SdkOptionGroupNotFoundFault>;
export type OptionGroupQuotaExceededFault =
  TaggedException<SdkOptionGroupQuotaExceededFault>;
export type PointInTimeRestoreNotEnabledFault =
  TaggedException<SdkPointInTimeRestoreNotEnabledFault>;
export type ProvisionedIopsNotAvailableInAZFault =
  TaggedException<SdkProvisionedIopsNotAvailableInAZFault>;
export type ReservedDBInstanceAlreadyExistsFault =
  TaggedException<SdkReservedDBInstanceAlreadyExistsFault>;
export type ReservedDBInstanceNotFoundFault =
  TaggedException<SdkReservedDBInstanceNotFoundFault>;
export type ReservedDBInstanceQuotaExceededFault =
  TaggedException<SdkReservedDBInstanceQuotaExceededFault>;
export type ReservedDBInstancesOfferingNotFoundFault =
  TaggedException<SdkReservedDBInstancesOfferingNotFoundFault>;
export type ResourceNotFoundFault = TaggedException<SdkResourceNotFoundFault>;
export type SNSInvalidTopicFault = TaggedException<SdkSNSInvalidTopicFault>;
export type SNSNoAuthorizationFault =
  TaggedException<SdkSNSNoAuthorizationFault>;
export type SNSTopicArnNotFoundFault =
  TaggedException<SdkSNSTopicArnNotFoundFault>;
export type SharedSnapshotQuotaExceededFault =
  TaggedException<SdkSharedSnapshotQuotaExceededFault>;
export type SnapshotQuotaExceededFault =
  TaggedException<SdkSnapshotQuotaExceededFault>;
export type SourceClusterNotSupportedFault =
  TaggedException<SdkSourceClusterNotSupportedFault>;
export type SourceDatabaseNotSupportedFault =
  TaggedException<SdkSourceDatabaseNotSupportedFault>;
export type SourceNotFoundFault = TaggedException<SdkSourceNotFoundFault>;
export type StorageQuotaExceededFault =
  TaggedException<SdkStorageQuotaExceededFault>;
export type StorageTypeNotAvailableFault =
  TaggedException<SdkStorageTypeNotAvailableFault>;
export type StorageTypeNotSupportedFault =
  TaggedException<SdkStorageTypeNotSupportedFault>;
export type SubnetAlreadyInUse = TaggedException<SdkSubnetAlreadyInUse>;
export type SubscriptionAlreadyExistFault =
  TaggedException<SdkSubscriptionAlreadyExistFault>;
export type SubscriptionCategoryNotFoundFault =
  TaggedException<SdkSubscriptionCategoryNotFoundFault>;
export type SubscriptionNotFoundFault =
  TaggedException<SdkSubscriptionNotFoundFault>;
export type TenantDatabaseAlreadyExistsFault =
  TaggedException<SdkTenantDatabaseAlreadyExistsFault>;
export type TenantDatabaseNotFoundFault =
  TaggedException<SdkTenantDatabaseNotFoundFault>;
export type TenantDatabaseQuotaExceededFault =
  TaggedException<SdkTenantDatabaseQuotaExceededFault>;
export type UnsupportedDBEngineVersionFault =
  TaggedException<SdkUnsupportedDBEngineVersionFault>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
