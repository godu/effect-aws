import type {
  AliasExistsException as SdkAliasExistsException,
  CodeDeliveryFailureException as SdkCodeDeliveryFailureException,
  CodeMismatchException as SdkCodeMismatchException,
  ConcurrentModificationException as SdkConcurrentModificationException,
  DuplicateProviderException as SdkDuplicateProviderException,
  EnableSoftwareTokenMFAException as SdkEnableSoftwareTokenMFAException,
  ExpiredCodeException as SdkExpiredCodeException,
  ForbiddenException as SdkForbiddenException,
  GroupExistsException as SdkGroupExistsException,
  InternalErrorException as SdkInternalErrorException,
  InvalidEmailRoleAccessPolicyException as SdkInvalidEmailRoleAccessPolicyException,
  InvalidLambdaResponseException as SdkInvalidLambdaResponseException,
  InvalidOAuthFlowException as SdkInvalidOAuthFlowException,
  InvalidParameterException as SdkInvalidParameterException,
  InvalidPasswordException as SdkInvalidPasswordException,
  InvalidSmsRoleAccessPolicyException as SdkInvalidSmsRoleAccessPolicyException,
  InvalidSmsRoleTrustRelationshipException as SdkInvalidSmsRoleTrustRelationshipException,
  InvalidUserPoolConfigurationException as SdkInvalidUserPoolConfigurationException,
  LimitExceededException as SdkLimitExceededException,
  MFAMethodNotFoundException as SdkMFAMethodNotFoundException,
  NotAuthorizedException as SdkNotAuthorizedException,
  PasswordResetRequiredException as SdkPasswordResetRequiredException,
  PreconditionNotMetException as SdkPreconditionNotMetException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  ScopeDoesNotExistException as SdkScopeDoesNotExistException,
  SoftwareTokenMFANotFoundException as SdkSoftwareTokenMFANotFoundException,
  TooManyFailedAttemptsException as SdkTooManyFailedAttemptsException,
  TooManyRequestsException as SdkTooManyRequestsException,
  UnauthorizedException as SdkUnauthorizedException,
  UnexpectedLambdaException as SdkUnexpectedLambdaException,
  UnsupportedIdentityProviderException as SdkUnsupportedIdentityProviderException,
  UnsupportedOperationException as SdkUnsupportedOperationException,
  UnsupportedTokenTypeException as SdkUnsupportedTokenTypeException,
  UnsupportedUserStateException as SdkUnsupportedUserStateException,
  UserImportInProgressException as SdkUserImportInProgressException,
  UserLambdaValidationException as SdkUserLambdaValidationException,
  UserNotConfirmedException as SdkUserNotConfirmedException,
  UserNotFoundException as SdkUserNotFoundException,
  UserPoolAddOnNotEnabledException as SdkUserPoolAddOnNotEnabledException,
  UserPoolTaggingException as SdkUserPoolTaggingException,
  UsernameExistsException as SdkUsernameExistsException,
} from "@aws-sdk/client-cognito-identity-provider";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AliasExistsException = TaggedException<SdkAliasExistsException>;
export type CodeDeliveryFailureException =
  TaggedException<SdkCodeDeliveryFailureException>;
export type CodeMismatchException = TaggedException<SdkCodeMismatchException>;
export type ConcurrentModificationException =
  TaggedException<SdkConcurrentModificationException>;
export type DuplicateProviderException =
  TaggedException<SdkDuplicateProviderException>;
export type EnableSoftwareTokenMFAException =
  TaggedException<SdkEnableSoftwareTokenMFAException>;
export type ExpiredCodeException = TaggedException<SdkExpiredCodeException>;
export type ForbiddenException = TaggedException<SdkForbiddenException>;
export type GroupExistsException = TaggedException<SdkGroupExistsException>;
export type InternalErrorException = TaggedException<SdkInternalErrorException>;
export type InvalidEmailRoleAccessPolicyException =
  TaggedException<SdkInvalidEmailRoleAccessPolicyException>;
export type InvalidLambdaResponseException =
  TaggedException<SdkInvalidLambdaResponseException>;
export type InvalidOAuthFlowException =
  TaggedException<SdkInvalidOAuthFlowException>;
export type InvalidParameterException =
  TaggedException<SdkInvalidParameterException>;
export type InvalidPasswordException =
  TaggedException<SdkInvalidPasswordException>;
export type InvalidSmsRoleAccessPolicyException =
  TaggedException<SdkInvalidSmsRoleAccessPolicyException>;
export type InvalidSmsRoleTrustRelationshipException =
  TaggedException<SdkInvalidSmsRoleTrustRelationshipException>;
export type InvalidUserPoolConfigurationException =
  TaggedException<SdkInvalidUserPoolConfigurationException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type MFAMethodNotFoundException =
  TaggedException<SdkMFAMethodNotFoundException>;
export type NotAuthorizedException = TaggedException<SdkNotAuthorizedException>;
export type PasswordResetRequiredException =
  TaggedException<SdkPasswordResetRequiredException>;
export type PreconditionNotMetException =
  TaggedException<SdkPreconditionNotMetException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type ScopeDoesNotExistException =
  TaggedException<SdkScopeDoesNotExistException>;
export type SoftwareTokenMFANotFoundException =
  TaggedException<SdkSoftwareTokenMFANotFoundException>;
export type TooManyFailedAttemptsException =
  TaggedException<SdkTooManyFailedAttemptsException>;
export type TooManyRequestsException =
  TaggedException<SdkTooManyRequestsException>;
export type UnauthorizedException = TaggedException<SdkUnauthorizedException>;
export type UnexpectedLambdaException =
  TaggedException<SdkUnexpectedLambdaException>;
export type UnsupportedIdentityProviderException =
  TaggedException<SdkUnsupportedIdentityProviderException>;
export type UnsupportedOperationException =
  TaggedException<SdkUnsupportedOperationException>;
export type UnsupportedTokenTypeException =
  TaggedException<SdkUnsupportedTokenTypeException>;
export type UnsupportedUserStateException =
  TaggedException<SdkUnsupportedUserStateException>;
export type UserImportInProgressException =
  TaggedException<SdkUserImportInProgressException>;
export type UserLambdaValidationException =
  TaggedException<SdkUserLambdaValidationException>;
export type UserNotConfirmedException =
  TaggedException<SdkUserNotConfirmedException>;
export type UserNotFoundException = TaggedException<SdkUserNotFoundException>;
export type UserPoolAddOnNotEnabledException =
  TaggedException<SdkUserPoolAddOnNotEnabledException>;
export type UserPoolTaggingException =
  TaggedException<SdkUserPoolTaggingException>;
export type UsernameExistsException =
  TaggedException<SdkUsernameExistsException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
