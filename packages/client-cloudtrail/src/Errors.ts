import type {
  AccessDeniedException as SdkAccessDeniedException,
  AccountHasOngoingImportException as SdkAccountHasOngoingImportException,
  AccountNotFoundException as SdkAccountNotFoundException,
  AccountNotRegisteredException as SdkAccountNotRegisteredException,
  AccountRegisteredException as SdkAccountRegisteredException,
  CannotDelegateManagementAccountException as SdkCannotDelegateManagementAccountException,
  ChannelARNInvalidException as SdkChannelARNInvalidException,
  ChannelAlreadyExistsException as SdkChannelAlreadyExistsException,
  ChannelExistsForEDSException as SdkChannelExistsForEDSException,
  ChannelMaxLimitExceededException as SdkChannelMaxLimitExceededException,
  ChannelNotFoundException as SdkChannelNotFoundException,
  CloudTrailARNInvalidException as SdkCloudTrailARNInvalidException,
  CloudTrailAccessNotEnabledException as SdkCloudTrailAccessNotEnabledException,
  CloudTrailInvalidClientTokenIdException as SdkCloudTrailInvalidClientTokenIdException,
  CloudWatchLogsDeliveryUnavailableException as SdkCloudWatchLogsDeliveryUnavailableException,
  ConcurrentModificationException as SdkConcurrentModificationException,
  ConflictException as SdkConflictException,
  DelegatedAdminAccountLimitExceededException as SdkDelegatedAdminAccountLimitExceededException,
  EventDataStoreARNInvalidException as SdkEventDataStoreARNInvalidException,
  EventDataStoreAlreadyExistsException as SdkEventDataStoreAlreadyExistsException,
  EventDataStoreFederationEnabledException as SdkEventDataStoreFederationEnabledException,
  EventDataStoreHasOngoingImportException as SdkEventDataStoreHasOngoingImportException,
  EventDataStoreMaxLimitExceededException as SdkEventDataStoreMaxLimitExceededException,
  EventDataStoreNotFoundException as SdkEventDataStoreNotFoundException,
  EventDataStoreTerminationProtectedException as SdkEventDataStoreTerminationProtectedException,
  ImportNotFoundException as SdkImportNotFoundException,
  InactiveEventDataStoreException as SdkInactiveEventDataStoreException,
  InactiveQueryException as SdkInactiveQueryException,
  InsightNotEnabledException as SdkInsightNotEnabledException,
  InsufficientDependencyServiceAccessPermissionException as SdkInsufficientDependencyServiceAccessPermissionException,
  InsufficientEncryptionPolicyException as SdkInsufficientEncryptionPolicyException,
  InsufficientS3BucketPolicyException as SdkInsufficientS3BucketPolicyException,
  InsufficientSnsTopicPolicyException as SdkInsufficientSnsTopicPolicyException,
  InvalidCloudWatchLogsLogGroupArnException as SdkInvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsRoleArnException as SdkInvalidCloudWatchLogsRoleArnException,
  InvalidDateRangeException as SdkInvalidDateRangeException,
  InvalidEventCategoryException as SdkInvalidEventCategoryException,
  InvalidEventDataStoreCategoryException as SdkInvalidEventDataStoreCategoryException,
  InvalidEventDataStoreStatusException as SdkInvalidEventDataStoreStatusException,
  InvalidEventSelectorsException as SdkInvalidEventSelectorsException,
  InvalidHomeRegionException as SdkInvalidHomeRegionException,
  InvalidImportSourceException as SdkInvalidImportSourceException,
  InvalidInsightSelectorsException as SdkInvalidInsightSelectorsException,
  InvalidKmsKeyIdException as SdkInvalidKmsKeyIdException,
  InvalidLookupAttributesException as SdkInvalidLookupAttributesException,
  InvalidMaxResultsException as SdkInvalidMaxResultsException,
  InvalidNextTokenException as SdkInvalidNextTokenException,
  InvalidParameterCombinationException as SdkInvalidParameterCombinationException,
  InvalidParameterException as SdkInvalidParameterException,
  InvalidQueryStatementException as SdkInvalidQueryStatementException,
  InvalidQueryStatusException as SdkInvalidQueryStatusException,
  InvalidS3BucketNameException as SdkInvalidS3BucketNameException,
  InvalidS3PrefixException as SdkInvalidS3PrefixException,
  InvalidSnsTopicNameException as SdkInvalidSnsTopicNameException,
  InvalidSourceException as SdkInvalidSourceException,
  InvalidTagParameterException as SdkInvalidTagParameterException,
  InvalidTimeRangeException as SdkInvalidTimeRangeException,
  InvalidTokenException as SdkInvalidTokenException,
  InvalidTrailNameException as SdkInvalidTrailNameException,
  KmsException as SdkKmsException,
  KmsKeyDisabledException as SdkKmsKeyDisabledException,
  KmsKeyNotFoundException as SdkKmsKeyNotFoundException,
  MaxConcurrentQueriesException as SdkMaxConcurrentQueriesException,
  MaximumNumberOfTrailsExceededException as SdkMaximumNumberOfTrailsExceededException,
  NoManagementAccountSLRExistsException as SdkNoManagementAccountSLRExistsException,
  NotOrganizationManagementAccountException as SdkNotOrganizationManagementAccountException,
  NotOrganizationMasterAccountException as SdkNotOrganizationMasterAccountException,
  OperationNotPermittedException as SdkOperationNotPermittedException,
  OrganizationNotInAllFeaturesModeException as SdkOrganizationNotInAllFeaturesModeException,
  OrganizationsNotInUseException as SdkOrganizationsNotInUseException,
  QueryIdNotFoundException as SdkQueryIdNotFoundException,
  ResourceARNNotValidException as SdkResourceARNNotValidException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  ResourcePolicyNotFoundException as SdkResourcePolicyNotFoundException,
  ResourcePolicyNotValidException as SdkResourcePolicyNotValidException,
  ResourceTypeNotSupportedException as SdkResourceTypeNotSupportedException,
  S3BucketDoesNotExistException as SdkS3BucketDoesNotExistException,
  TagsLimitExceededException as SdkTagsLimitExceededException,
  ThrottlingException as SdkThrottlingException,
  TrailAlreadyExistsException as SdkTrailAlreadyExistsException,
  TrailNotFoundException as SdkTrailNotFoundException,
  TrailNotProvidedException as SdkTrailNotProvidedException,
  UnsupportedOperationException as SdkUnsupportedOperationException,
} from "@aws-sdk/client-cloudtrail";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedException = TaggedException<SdkAccessDeniedException>;
export type AccountHasOngoingImportException =
  TaggedException<SdkAccountHasOngoingImportException>;
export type AccountNotFoundException =
  TaggedException<SdkAccountNotFoundException>;
export type AccountNotRegisteredException =
  TaggedException<SdkAccountNotRegisteredException>;
export type AccountRegisteredException =
  TaggedException<SdkAccountRegisteredException>;
export type CannotDelegateManagementAccountException =
  TaggedException<SdkCannotDelegateManagementAccountException>;
export type ChannelARNInvalidException =
  TaggedException<SdkChannelARNInvalidException>;
export type ChannelAlreadyExistsException =
  TaggedException<SdkChannelAlreadyExistsException>;
export type ChannelExistsForEDSException =
  TaggedException<SdkChannelExistsForEDSException>;
export type ChannelMaxLimitExceededException =
  TaggedException<SdkChannelMaxLimitExceededException>;
export type ChannelNotFoundException =
  TaggedException<SdkChannelNotFoundException>;
export type CloudTrailARNInvalidException =
  TaggedException<SdkCloudTrailARNInvalidException>;
export type CloudTrailAccessNotEnabledException =
  TaggedException<SdkCloudTrailAccessNotEnabledException>;
export type CloudTrailInvalidClientTokenIdException =
  TaggedException<SdkCloudTrailInvalidClientTokenIdException>;
export type CloudWatchLogsDeliveryUnavailableException =
  TaggedException<SdkCloudWatchLogsDeliveryUnavailableException>;
export type ConcurrentModificationException =
  TaggedException<SdkConcurrentModificationException>;
export type ConflictException = TaggedException<SdkConflictException>;
export type DelegatedAdminAccountLimitExceededException =
  TaggedException<SdkDelegatedAdminAccountLimitExceededException>;
export type EventDataStoreARNInvalidException =
  TaggedException<SdkEventDataStoreARNInvalidException>;
export type EventDataStoreAlreadyExistsException =
  TaggedException<SdkEventDataStoreAlreadyExistsException>;
export type EventDataStoreFederationEnabledException =
  TaggedException<SdkEventDataStoreFederationEnabledException>;
export type EventDataStoreHasOngoingImportException =
  TaggedException<SdkEventDataStoreHasOngoingImportException>;
export type EventDataStoreMaxLimitExceededException =
  TaggedException<SdkEventDataStoreMaxLimitExceededException>;
export type EventDataStoreNotFoundException =
  TaggedException<SdkEventDataStoreNotFoundException>;
export type EventDataStoreTerminationProtectedException =
  TaggedException<SdkEventDataStoreTerminationProtectedException>;
export type ImportNotFoundException =
  TaggedException<SdkImportNotFoundException>;
export type InactiveEventDataStoreException =
  TaggedException<SdkInactiveEventDataStoreException>;
export type InactiveQueryException = TaggedException<SdkInactiveQueryException>;
export type InsightNotEnabledException =
  TaggedException<SdkInsightNotEnabledException>;
export type InsufficientDependencyServiceAccessPermissionException =
  TaggedException<SdkInsufficientDependencyServiceAccessPermissionException>;
export type InsufficientEncryptionPolicyException =
  TaggedException<SdkInsufficientEncryptionPolicyException>;
export type InsufficientS3BucketPolicyException =
  TaggedException<SdkInsufficientS3BucketPolicyException>;
export type InsufficientSnsTopicPolicyException =
  TaggedException<SdkInsufficientSnsTopicPolicyException>;
export type InvalidCloudWatchLogsLogGroupArnException =
  TaggedException<SdkInvalidCloudWatchLogsLogGroupArnException>;
export type InvalidCloudWatchLogsRoleArnException =
  TaggedException<SdkInvalidCloudWatchLogsRoleArnException>;
export type InvalidDateRangeException =
  TaggedException<SdkInvalidDateRangeException>;
export type InvalidEventCategoryException =
  TaggedException<SdkInvalidEventCategoryException>;
export type InvalidEventDataStoreCategoryException =
  TaggedException<SdkInvalidEventDataStoreCategoryException>;
export type InvalidEventDataStoreStatusException =
  TaggedException<SdkInvalidEventDataStoreStatusException>;
export type InvalidEventSelectorsException =
  TaggedException<SdkInvalidEventSelectorsException>;
export type InvalidHomeRegionException =
  TaggedException<SdkInvalidHomeRegionException>;
export type InvalidImportSourceException =
  TaggedException<SdkInvalidImportSourceException>;
export type InvalidInsightSelectorsException =
  TaggedException<SdkInvalidInsightSelectorsException>;
export type InvalidKmsKeyIdException =
  TaggedException<SdkInvalidKmsKeyIdException>;
export type InvalidLookupAttributesException =
  TaggedException<SdkInvalidLookupAttributesException>;
export type InvalidMaxResultsException =
  TaggedException<SdkInvalidMaxResultsException>;
export type InvalidNextTokenException =
  TaggedException<SdkInvalidNextTokenException>;
export type InvalidParameterCombinationException =
  TaggedException<SdkInvalidParameterCombinationException>;
export type InvalidParameterException =
  TaggedException<SdkInvalidParameterException>;
export type InvalidQueryStatementException =
  TaggedException<SdkInvalidQueryStatementException>;
export type InvalidQueryStatusException =
  TaggedException<SdkInvalidQueryStatusException>;
export type InvalidS3BucketNameException =
  TaggedException<SdkInvalidS3BucketNameException>;
export type InvalidS3PrefixException =
  TaggedException<SdkInvalidS3PrefixException>;
export type InvalidSnsTopicNameException =
  TaggedException<SdkInvalidSnsTopicNameException>;
export type InvalidSourceException = TaggedException<SdkInvalidSourceException>;
export type InvalidTagParameterException =
  TaggedException<SdkInvalidTagParameterException>;
export type InvalidTimeRangeException =
  TaggedException<SdkInvalidTimeRangeException>;
export type InvalidTokenException = TaggedException<SdkInvalidTokenException>;
export type InvalidTrailNameException =
  TaggedException<SdkInvalidTrailNameException>;
export type KmsException = TaggedException<SdkKmsException>;
export type KmsKeyDisabledException =
  TaggedException<SdkKmsKeyDisabledException>;
export type KmsKeyNotFoundException =
  TaggedException<SdkKmsKeyNotFoundException>;
export type MaxConcurrentQueriesException =
  TaggedException<SdkMaxConcurrentQueriesException>;
export type MaximumNumberOfTrailsExceededException =
  TaggedException<SdkMaximumNumberOfTrailsExceededException>;
export type NoManagementAccountSLRExistsException =
  TaggedException<SdkNoManagementAccountSLRExistsException>;
export type NotOrganizationManagementAccountException =
  TaggedException<SdkNotOrganizationManagementAccountException>;
export type NotOrganizationMasterAccountException =
  TaggedException<SdkNotOrganizationMasterAccountException>;
export type OperationNotPermittedException =
  TaggedException<SdkOperationNotPermittedException>;
export type OrganizationNotInAllFeaturesModeException =
  TaggedException<SdkOrganizationNotInAllFeaturesModeException>;
export type OrganizationsNotInUseException =
  TaggedException<SdkOrganizationsNotInUseException>;
export type QueryIdNotFoundException =
  TaggedException<SdkQueryIdNotFoundException>;
export type ResourceARNNotValidException =
  TaggedException<SdkResourceARNNotValidException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type ResourcePolicyNotFoundException =
  TaggedException<SdkResourcePolicyNotFoundException>;
export type ResourcePolicyNotValidException =
  TaggedException<SdkResourcePolicyNotValidException>;
export type ResourceTypeNotSupportedException =
  TaggedException<SdkResourceTypeNotSupportedException>;
export type S3BucketDoesNotExistException =
  TaggedException<SdkS3BucketDoesNotExistException>;
export type TagsLimitExceededException =
  TaggedException<SdkTagsLimitExceededException>;
export type ThrottlingException = TaggedException<SdkThrottlingException>;
export type TrailAlreadyExistsException =
  TaggedException<SdkTrailAlreadyExistsException>;
export type TrailNotFoundException = TaggedException<SdkTrailNotFoundException>;
export type TrailNotProvidedException =
  TaggedException<SdkTrailNotProvidedException>;
export type UnsupportedOperationException =
  TaggedException<SdkUnsupportedOperationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
