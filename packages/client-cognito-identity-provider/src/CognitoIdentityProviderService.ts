/**
 * @since 1.0.0
 */
import {
  CognitoIdentityProviderServiceException as SdkCognitoIdentityProviderServiceException,
  AddCustomAttributesCommand,
  AdminAddUserToGroupCommand,
  AdminConfirmSignUpCommand,
  AdminCreateUserCommand,
  AdminDeleteUserCommand,
  AdminDeleteUserAttributesCommand,
  AdminDisableProviderForUserCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  AdminForgetDeviceCommand,
  AdminGetDeviceCommand,
  AdminGetUserCommand,
  AdminInitiateAuthCommand,
  AdminLinkProviderForUserCommand,
  AdminListDevicesCommand,
  AdminListGroupsForUserCommand,
  AdminListUserAuthEventsCommand,
  AdminRemoveUserFromGroupCommand,
  AdminResetUserPasswordCommand,
  AdminRespondToAuthChallengeCommand,
  AdminSetUserMFAPreferenceCommand,
  AdminSetUserPasswordCommand,
  AdminSetUserSettingsCommand,
  AdminUpdateAuthEventFeedbackCommand,
  AdminUpdateDeviceStatusCommand,
  AdminUpdateUserAttributesCommand,
  AdminUserGlobalSignOutCommand,
  AssociateSoftwareTokenCommand,
  ChangePasswordCommand,
  ConfirmDeviceCommand,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  CreateGroupCommand,
  CreateIdentityProviderCommand,
  CreateResourceServerCommand,
  CreateUserImportJobCommand,
  CreateUserPoolCommand,
  CreateUserPoolClientCommand,
  CreateUserPoolDomainCommand,
  DeleteGroupCommand,
  DeleteIdentityProviderCommand,
  DeleteResourceServerCommand,
  DeleteUserCommand,
  DeleteUserAttributesCommand,
  DeleteUserPoolCommand,
  DeleteUserPoolClientCommand,
  DeleteUserPoolDomainCommand,
  DescribeIdentityProviderCommand,
  DescribeResourceServerCommand,
  DescribeRiskConfigurationCommand,
  DescribeUserImportJobCommand,
  DescribeUserPoolCommand,
  DescribeUserPoolClientCommand,
  DescribeUserPoolDomainCommand,
  ForgetDeviceCommand,
  ForgotPasswordCommand,
  GetCSVHeaderCommand,
  GetDeviceCommand,
  GetGroupCommand,
  GetIdentityProviderByIdentifierCommand,
  GetLogDeliveryConfigurationCommand,
  GetSigningCertificateCommand,
  GetUICustomizationCommand,
  GetUserCommand,
  GetUserAttributeVerificationCodeCommand,
  GetUserPoolMfaConfigCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  ListDevicesCommand,
  ListGroupsCommand,
  ListIdentityProvidersCommand,
  ListResourceServersCommand,
  ListTagsForResourceCommand,
  ListUserImportJobsCommand,
  ListUserPoolClientsCommand,
  ListUserPoolsCommand,
  ListUsersCommand,
  ListUsersInGroupCommand,
  ResendConfirmationCodeCommand,
  RespondToAuthChallengeCommand,
  RevokeTokenCommand,
  SetLogDeliveryConfigurationCommand,
  SetRiskConfigurationCommand,
  SetUICustomizationCommand,
  SetUserMFAPreferenceCommand,
  SetUserPoolMfaConfigCommand,
  SetUserSettingsCommand,
  SignUpCommand,
  StartUserImportJobCommand,
  StopUserImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAuthEventFeedbackCommand,
  UpdateDeviceStatusCommand,
  UpdateGroupCommand,
  UpdateIdentityProviderCommand,
  UpdateResourceServerCommand,
  UpdateUserAttributesCommand,
  UpdateUserPoolCommand,
  UpdateUserPoolClientCommand,
  UpdateUserPoolDomainCommand,
  VerifySoftwareTokenCommand,
  VerifyUserAttributeCommand,
  type AddCustomAttributesRequest,
  type AddCustomAttributesResponse,
  type AdminAddUserToGroupRequest,
  type AdminConfirmSignUpRequest,
  type AdminConfirmSignUpResponse,
  type AdminCreateUserRequest,
  type AdminCreateUserResponse,
  type AdminDeleteUserRequest,
  type AdminDeleteUserAttributesRequest,
  type AdminDeleteUserAttributesResponse,
  type AdminDisableProviderForUserRequest,
  type AdminDisableProviderForUserResponse,
  type AdminDisableUserRequest,
  type AdminDisableUserResponse,
  type AdminEnableUserRequest,
  type AdminEnableUserResponse,
  type AdminForgetDeviceRequest,
  type AdminGetDeviceRequest,
  type AdminGetDeviceResponse,
  type AdminGetUserRequest,
  type AdminGetUserResponse,
  type AdminInitiateAuthRequest,
  type AdminInitiateAuthResponse,
  type AdminLinkProviderForUserRequest,
  type AdminLinkProviderForUserResponse,
  type AdminListDevicesRequest,
  type AdminListDevicesResponse,
  type AdminListGroupsForUserRequest,
  type AdminListGroupsForUserResponse,
  type AdminListUserAuthEventsRequest,
  type AdminListUserAuthEventsResponse,
  type AdminRemoveUserFromGroupRequest,
  type AdminResetUserPasswordRequest,
  type AdminResetUserPasswordResponse,
  type AdminRespondToAuthChallengeRequest,
  type AdminRespondToAuthChallengeResponse,
  type AdminSetUserMFAPreferenceRequest,
  type AdminSetUserMFAPreferenceResponse,
  type AdminSetUserPasswordRequest,
  type AdminSetUserPasswordResponse,
  type AdminSetUserSettingsRequest,
  type AdminSetUserSettingsResponse,
  type AdminUpdateAuthEventFeedbackRequest,
  type AdminUpdateAuthEventFeedbackResponse,
  type AdminUpdateDeviceStatusRequest,
  type AdminUpdateDeviceStatusResponse,
  type AdminUpdateUserAttributesRequest,
  type AdminUpdateUserAttributesResponse,
  type AdminUserGlobalSignOutRequest,
  type AdminUserGlobalSignOutResponse,
  type AssociateSoftwareTokenRequest,
  type AssociateSoftwareTokenResponse,
  type ChangePasswordRequest,
  type ChangePasswordResponse,
  type ConfirmDeviceRequest,
  type ConfirmDeviceResponse,
  type ConfirmForgotPasswordRequest,
  type ConfirmForgotPasswordResponse,
  type ConfirmSignUpRequest,
  type ConfirmSignUpResponse,
  type CreateGroupRequest,
  type CreateGroupResponse,
  type CreateIdentityProviderRequest,
  type CreateIdentityProviderResponse,
  type CreateResourceServerRequest,
  type CreateResourceServerResponse,
  type CreateUserImportJobRequest,
  type CreateUserImportJobResponse,
  type CreateUserPoolRequest,
  type CreateUserPoolResponse,
  type CreateUserPoolClientRequest,
  type CreateUserPoolClientResponse,
  type CreateUserPoolDomainRequest,
  type CreateUserPoolDomainResponse,
  type DeleteGroupRequest,
  type DeleteIdentityProviderRequest,
  type DeleteResourceServerRequest,
  type DeleteUserRequest,
  type DeleteUserAttributesRequest,
  type DeleteUserAttributesResponse,
  type DeleteUserPoolRequest,
  type DeleteUserPoolClientRequest,
  type DeleteUserPoolDomainRequest,
  type DeleteUserPoolDomainResponse,
  type DescribeIdentityProviderRequest,
  type DescribeIdentityProviderResponse,
  type DescribeResourceServerRequest,
  type DescribeResourceServerResponse,
  type DescribeRiskConfigurationRequest,
  type DescribeRiskConfigurationResponse,
  type DescribeUserImportJobRequest,
  type DescribeUserImportJobResponse,
  type DescribeUserPoolRequest,
  type DescribeUserPoolResponse,
  type DescribeUserPoolClientRequest,
  type DescribeUserPoolClientResponse,
  type DescribeUserPoolDomainRequest,
  type DescribeUserPoolDomainResponse,
  type ForgetDeviceRequest,
  type ForgotPasswordRequest,
  type ForgotPasswordResponse,
  type GetCSVHeaderRequest,
  type GetCSVHeaderResponse,
  type GetDeviceRequest,
  type GetDeviceResponse,
  type GetGroupRequest,
  type GetGroupResponse,
  type GetIdentityProviderByIdentifierRequest,
  type GetIdentityProviderByIdentifierResponse,
  type GetLogDeliveryConfigurationRequest,
  type GetLogDeliveryConfigurationResponse,
  type GetSigningCertificateRequest,
  type GetSigningCertificateResponse,
  type GetUICustomizationRequest,
  type GetUICustomizationResponse,
  type GetUserRequest,
  type GetUserResponse,
  type GetUserAttributeVerificationCodeRequest,
  type GetUserAttributeVerificationCodeResponse,
  type GetUserPoolMfaConfigRequest,
  type GetUserPoolMfaConfigResponse,
  type GlobalSignOutRequest,
  type GlobalSignOutResponse,
  type InitiateAuthRequest,
  type InitiateAuthResponse,
  type ListDevicesRequest,
  type ListDevicesResponse,
  type ListGroupsRequest,
  type ListGroupsResponse,
  type ListIdentityProvidersRequest,
  type ListIdentityProvidersResponse,
  type ListResourceServersRequest,
  type ListResourceServersResponse,
  type ListTagsForResourceRequest,
  type ListTagsForResourceResponse,
  type ListUserImportJobsRequest,
  type ListUserImportJobsResponse,
  type ListUserPoolClientsRequest,
  type ListUserPoolClientsResponse,
  type ListUserPoolsRequest,
  type ListUserPoolsResponse,
  type ListUsersRequest,
  type ListUsersResponse,
  type ListUsersInGroupRequest,
  type ListUsersInGroupResponse,
  type ResendConfirmationCodeRequest,
  type ResendConfirmationCodeResponse,
  type RespondToAuthChallengeRequest,
  type RespondToAuthChallengeResponse,
  type RevokeTokenRequest,
  type RevokeTokenResponse,
  type SetLogDeliveryConfigurationRequest,
  type SetLogDeliveryConfigurationResponse,
  type SetRiskConfigurationRequest,
  type SetRiskConfigurationResponse,
  type SetUICustomizationRequest,
  type SetUICustomizationResponse,
  type SetUserMFAPreferenceRequest,
  type SetUserMFAPreferenceResponse,
  type SetUserPoolMfaConfigRequest,
  type SetUserPoolMfaConfigResponse,
  type SetUserSettingsRequest,
  type SetUserSettingsResponse,
  type SignUpRequest,
  type SignUpResponse,
  type StartUserImportJobRequest,
  type StartUserImportJobResponse,
  type StopUserImportJobRequest,
  type StopUserImportJobResponse,
  type TagResourceRequest,
  type TagResourceResponse,
  type UntagResourceRequest,
  type UntagResourceResponse,
  type UpdateAuthEventFeedbackRequest,
  type UpdateAuthEventFeedbackResponse,
  type UpdateDeviceStatusRequest,
  type UpdateDeviceStatusResponse,
  type UpdateGroupRequest,
  type UpdateGroupResponse,
  type UpdateIdentityProviderRequest,
  type UpdateIdentityProviderResponse,
  type UpdateResourceServerRequest,
  type UpdateResourceServerResponse,
  type UpdateUserAttributesRequest,
  type UpdateUserAttributesResponse,
  type UpdateUserPoolRequest,
  type UpdateUserPoolResponse,
  type UpdateUserPoolClientRequest,
  type UpdateUserPoolClientResponse,
  type UpdateUserPoolDomainRequest,
  type UpdateUserPoolDomainResponse,
  type VerifySoftwareTokenRequest,
  type VerifySoftwareTokenResponse,
  type VerifyUserAttributeRequest,
  type VerifyUserAttributeResponse,
} from "@aws-sdk/client-cognito-identity-provider";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  CognitoIdentityProviderClientInstance,
  CognitoIdentityProviderClientInstanceLayer,
} from "./CognitoIdentityProviderClientInstance";
import { DefaultCognitoIdentityProviderClientConfigLayer } from "./CognitoIdentityProviderClientInstanceConfig";
import {
  type InternalErrorException,
  type InvalidParameterException,
  type NotAuthorizedException,
  type ResourceNotFoundException,
  type TooManyRequestsException,
  type UserImportInProgressException,
  type UserNotFoundException,
  type InvalidLambdaResponseException,
  type LimitExceededException,
  type TooManyFailedAttemptsException,
  type UnexpectedLambdaException,
  type UserLambdaValidationException,
  type CodeDeliveryFailureException,
  type InvalidPasswordException,
  type InvalidSmsRoleAccessPolicyException,
  type InvalidSmsRoleTrustRelationshipException,
  type PreconditionNotMetException,
  type UnsupportedUserStateException,
  type UsernameExistsException,
  type AliasExistsException,
  type InvalidUserPoolConfigurationException,
  type MFAMethodNotFoundException,
  type PasswordResetRequiredException,
  type UserNotConfirmedException,
  type UserPoolAddOnNotEnabledException,
  type InvalidEmailRoleAccessPolicyException,
  type CodeMismatchException,
  type ExpiredCodeException,
  type SoftwareTokenMFANotFoundException,
  type ConcurrentModificationException,
  type ForbiddenException,
  type GroupExistsException,
  type DuplicateProviderException,
  type UserPoolTaggingException,
  type InvalidOAuthFlowException,
  type ScopeDoesNotExistException,
  type UnsupportedIdentityProviderException,
  type UnauthorizedException,
  type UnsupportedOperationException,
  type UnsupportedTokenTypeException,
  type EnableSoftwareTokenMFAException,
  type TaggedException,
  SdkError,
} from "./Errors";

const commands = {
  AddCustomAttributesCommand,
  AdminAddUserToGroupCommand,
  AdminConfirmSignUpCommand,
  AdminCreateUserCommand,
  AdminDeleteUserCommand,
  AdminDeleteUserAttributesCommand,
  AdminDisableProviderForUserCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  AdminForgetDeviceCommand,
  AdminGetDeviceCommand,
  AdminGetUserCommand,
  AdminInitiateAuthCommand,
  AdminLinkProviderForUserCommand,
  AdminListDevicesCommand,
  AdminListGroupsForUserCommand,
  AdminListUserAuthEventsCommand,
  AdminRemoveUserFromGroupCommand,
  AdminResetUserPasswordCommand,
  AdminRespondToAuthChallengeCommand,
  AdminSetUserMFAPreferenceCommand,
  AdminSetUserPasswordCommand,
  AdminSetUserSettingsCommand,
  AdminUpdateAuthEventFeedbackCommand,
  AdminUpdateDeviceStatusCommand,
  AdminUpdateUserAttributesCommand,
  AdminUserGlobalSignOutCommand,
  AssociateSoftwareTokenCommand,
  ChangePasswordCommand,
  ConfirmDeviceCommand,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  CreateGroupCommand,
  CreateIdentityProviderCommand,
  CreateResourceServerCommand,
  CreateUserImportJobCommand,
  CreateUserPoolCommand,
  CreateUserPoolClientCommand,
  CreateUserPoolDomainCommand,
  DeleteGroupCommand,
  DeleteIdentityProviderCommand,
  DeleteResourceServerCommand,
  DeleteUserCommand,
  DeleteUserAttributesCommand,
  DeleteUserPoolCommand,
  DeleteUserPoolClientCommand,
  DeleteUserPoolDomainCommand,
  DescribeIdentityProviderCommand,
  DescribeResourceServerCommand,
  DescribeRiskConfigurationCommand,
  DescribeUserImportJobCommand,
  DescribeUserPoolCommand,
  DescribeUserPoolClientCommand,
  DescribeUserPoolDomainCommand,
  ForgetDeviceCommand,
  ForgotPasswordCommand,
  GetCSVHeaderCommand,
  GetDeviceCommand,
  GetGroupCommand,
  GetIdentityProviderByIdentifierCommand,
  GetLogDeliveryConfigurationCommand,
  GetSigningCertificateCommand,
  GetUICustomizationCommand,
  GetUserCommand,
  GetUserAttributeVerificationCodeCommand,
  GetUserPoolMfaConfigCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  ListDevicesCommand,
  ListGroupsCommand,
  ListIdentityProvidersCommand,
  ListResourceServersCommand,
  ListTagsForResourceCommand,
  ListUserImportJobsCommand,
  ListUserPoolClientsCommand,
  ListUserPoolsCommand,
  ListUsersCommand,
  ListUsersInGroupCommand,
  ResendConfirmationCodeCommand,
  RespondToAuthChallengeCommand,
  RevokeTokenCommand,
  SetLogDeliveryConfigurationCommand,
  SetRiskConfigurationCommand,
  SetUICustomizationCommand,
  SetUserMFAPreferenceCommand,
  SetUserPoolMfaConfigCommand,
  SetUserSettingsCommand,
  SignUpCommand,
  StartUserImportJobCommand,
  StopUserImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAuthEventFeedbackCommand,
  UpdateDeviceStatusCommand,
  UpdateGroupCommand,
  UpdateIdentityProviderCommand,
  UpdateResourceServerCommand,
  UpdateUserAttributesCommand,
  UpdateUserPoolCommand,
  UpdateUserPoolClientCommand,
  UpdateUserPoolDomainCommand,
  VerifySoftwareTokenCommand,
  VerifyUserAttributeCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface CognitoIdentityProviderService {
  readonly _: unique symbol;

  /**
   * @see {@link AddCustomAttributesCommand}
   */
  addCustomAttributes(
    args: AddCustomAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AddCustomAttributesResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserImportInProgressException
  >;

  /**
   * @see {@link AdminAddUserToGroupCommand}
   */
  adminAddUserToGroup(
    args: AdminAddUserToGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminConfirmSignUpCommand}
   */
  adminConfirmSignUp(
    args: AdminConfirmSignUpRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminConfirmSignUpResponse,
    | SdkError
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyFailedAttemptsException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminCreateUserCommand}
   */
  adminCreateUser(
    args: AdminCreateUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminCreateUserResponse,
    | SdkError
    | CodeDeliveryFailureException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UnsupportedUserStateException
    | UserLambdaValidationException
    | UsernameExistsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminDeleteUserCommand}
   */
  adminDeleteUser(
    args: AdminDeleteUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminDeleteUserAttributesCommand}
   */
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminDeleteUserAttributesResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminDisableProviderForUserCommand}
   */
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminDisableProviderForUserResponse,
    | SdkError
    | AliasExistsException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminDisableUserCommand}
   */
  adminDisableUser(
    args: AdminDisableUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminDisableUserResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminEnableUserCommand}
   */
  adminEnableUser(
    args: AdminEnableUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminEnableUserResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminForgetDeviceCommand}
   */
  adminForgetDevice(
    args: AdminForgetDeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminGetDeviceCommand}
   */
  adminGetDevice(
    args: AdminGetDeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminGetDeviceResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link AdminGetUserCommand}
   */
  adminGetUser(
    args: AdminGetUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminGetUserResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminInitiateAuthCommand}
   */
  adminInitiateAuth(
    args: AdminInitiateAuthRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminInitiateAuthResponse,
    | SdkError
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | MFAMethodNotFoundException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminLinkProviderForUserCommand}
   */
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminLinkProviderForUserResponse,
    | SdkError
    | AliasExistsException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminListDevicesCommand}
   */
  adminListDevices(
    args: AdminListDevicesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminListDevicesResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link AdminListGroupsForUserCommand}
   */
  adminListGroupsForUser(
    args: AdminListGroupsForUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminListGroupsForUserResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminListUserAuthEventsCommand}
   */
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminListUserAuthEventsResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
  >;

  /**
   * @see {@link AdminRemoveUserFromGroupCommand}
   */
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminResetUserPasswordCommand}
   */
  adminResetUserPassword(
    args: AdminResetUserPasswordRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminResetUserPasswordResponse,
    | SdkError
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminRespondToAuthChallengeCommand}
   */
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminRespondToAuthChallengeResponse,
    | SdkError
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | MFAMethodNotFoundException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminSetUserMFAPreferenceCommand}
   */
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminSetUserMFAPreferenceResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminSetUserPasswordCommand}
   */
  adminSetUserPassword(
    args: AdminSetUserPasswordRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminSetUserPasswordResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | InvalidPasswordException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminSetUserSettingsCommand}
   */
  adminSetUserSettings(
    args: AdminSetUserSettingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminSetUserSettingsResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminUpdateAuthEventFeedbackCommand}
   */
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminUpdateAuthEventFeedbackResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
  >;

  /**
   * @see {@link AdminUpdateDeviceStatusCommand}
   */
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminUpdateDeviceStatusResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminUpdateUserAttributesCommand}
   */
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminUpdateUserAttributesResponse,
    | SdkError
    | AliasExistsException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
  >;

  /**
   * @see {@link AdminUserGlobalSignOutCommand}
   */
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AdminUserGlobalSignOutResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
  >;

  /**
   * @see {@link AssociateSoftwareTokenCommand}
   */
  associateSoftwareToken(
    args: AssociateSoftwareTokenRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AssociateSoftwareTokenResponse,
    | SdkError
    | ConcurrentModificationException
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
  >;

  /**
   * @see {@link ChangePasswordCommand}
   */
  changePassword(
    args: ChangePasswordRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ChangePasswordResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidPasswordException
    | LimitExceededException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link ConfirmDeviceCommand}
   */
  confirmDevice(
    args: ConfirmDeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmDeviceResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UsernameExistsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link ConfirmForgotPasswordCommand}
   */
  confirmForgotPassword(
    args: ConfirmForgotPasswordRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmForgotPasswordResponse,
    | SdkError
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyFailedAttemptsException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link ConfirmSignUpCommand}
   */
  confirmSignUp(
    args: ConfirmSignUpRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmSignUpResponse,
    | SdkError
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyFailedAttemptsException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
  >;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateGroupResponse,
    | SdkError
    | GroupExistsException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link CreateIdentityProviderCommand}
   */
  createIdentityProvider(
    args: CreateIdentityProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateIdentityProviderResponse,
    | SdkError
    | DuplicateProviderException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link CreateResourceServerCommand}
   */
  createResourceServer(
    args: CreateResourceServerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateResourceServerResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link CreateUserImportJobCommand}
   */
  createUserImportJob(
    args: CreateUserImportJobRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserImportJobResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link CreateUserPoolCommand}
   */
  createUserPool(
    args: CreateUserPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserPoolResponse,
    | SdkError
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | TooManyRequestsException
    | UserPoolTaggingException
  >;

  /**
   * @see {@link CreateUserPoolClientCommand}
   */
  createUserPoolClient(
    args: CreateUserPoolClientRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserPoolClientResponse,
    | SdkError
    | InternalErrorException
    | InvalidOAuthFlowException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | ScopeDoesNotExistException
    | TooManyRequestsException
  >;

  /**
   * @see {@link CreateUserPoolDomainCommand}
   */
  createUserPoolDomain(
    args: CreateUserPoolDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserPoolDomainResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link DeleteIdentityProviderCommand}
   */
  deleteIdentityProvider(
    args: DeleteIdentityProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedIdentityProviderException
  >;

  /**
   * @see {@link DeleteResourceServerCommand}
   */
  deleteResourceServer(
    args: DeleteResourceServerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link DeleteUserAttributesCommand}
   */
  deleteUserAttributes(
    args: DeleteUserAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserAttributesResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link DeleteUserPoolCommand}
   */
  deleteUserPool(
    args: DeleteUserPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserImportInProgressException
  >;

  /**
   * @see {@link DeleteUserPoolClientCommand}
   */
  deleteUserPoolClient(
    args: DeleteUserPoolClientRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link DeleteUserPoolDomainCommand}
   */
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserPoolDomainResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link DescribeIdentityProviderCommand}
   */
  describeIdentityProvider(
    args: DescribeIdentityProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIdentityProviderResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link DescribeResourceServerCommand}
   */
  describeResourceServer(
    args: DescribeResourceServerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeResourceServerResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link DescribeRiskConfigurationCommand}
   */
  describeRiskConfiguration(
    args: DescribeRiskConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRiskConfigurationResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolAddOnNotEnabledException
  >;

  /**
   * @see {@link DescribeUserImportJobCommand}
   */
  describeUserImportJob(
    args: DescribeUserImportJobRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserImportJobResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link DescribeUserPoolCommand}
   */
  describeUserPool(
    args: DescribeUserPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserPoolResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolTaggingException
  >;

  /**
   * @see {@link DescribeUserPoolClientCommand}
   */
  describeUserPoolClient(
    args: DescribeUserPoolClientRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserPoolClientResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link DescribeUserPoolDomainCommand}
   */
  describeUserPoolDomain(
    args: DescribeUserPoolDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserPoolDomainResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link ForgetDeviceCommand}
   */
  forgetDevice(
    args: ForgetDeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link ForgotPasswordCommand}
   */
  forgotPassword(
    args: ForgotPasswordRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ForgotPasswordResponse,
    | SdkError
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
  >;

  /**
   * @see {@link GetCSVHeaderCommand}
   */
  getCSVHeader(
    args: GetCSVHeaderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetCSVHeaderResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(
    args: GetDeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeviceResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(
    args: GetGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetGroupResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link GetIdentityProviderByIdentifierCommand}
   */
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetIdentityProviderByIdentifierResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link GetLogDeliveryConfigurationCommand}
   */
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetLogDeliveryConfigurationResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link GetSigningCertificateCommand}
   */
  getSigningCertificate(
    args: GetSigningCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSigningCertificateResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
  >;

  /**
   * @see {@link GetUICustomizationCommand}
   */
  getUICustomization(
    args: GetUICustomizationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUICustomizationResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUserResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link GetUserAttributeVerificationCodeCommand}
   */
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUserAttributeVerificationCodeResponse,
    | SdkError
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link GetUserPoolMfaConfigCommand}
   */
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUserPoolMfaConfigResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link GlobalSignOutCommand}
   */
  globalSignOut(
    args: GlobalSignOutRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GlobalSignOutResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
  >;

  /**
   * @see {@link InitiateAuthCommand}
   */
  initiateAuth(
    args: InitiateAuthRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    InitiateAuthResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(
    args: ListDevicesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDevicesResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListGroupsResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ListIdentityProvidersCommand}
   */
  listIdentityProviders(
    args: ListIdentityProvidersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListIdentityProvidersResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ListResourceServersCommand}
   */
  listResourceServers(
    args: ListResourceServersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceServersResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ListUserImportJobsCommand}
   */
  listUserImportJobs(
    args: ListUserImportJobsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListUserImportJobsResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ListUserPoolClientsCommand}
   */
  listUserPoolClients(
    args: ListUserPoolClientsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListUserPoolClientsResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ListUserPoolsCommand}
   */
  listUserPools(
    args: ListUserPoolsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListUserPoolsResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
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
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ListUsersInGroupCommand}
   */
  listUsersInGroup(
    args: ListUsersInGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListUsersInGroupResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link ResendConfirmationCodeCommand}
   */
  resendConfirmationCode(
    args: ResendConfirmationCodeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ResendConfirmationCodeResponse,
    | SdkError
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
  >;

  /**
   * @see {@link RespondToAuthChallengeCommand}
   */
  respondToAuthChallenge(
    args: RespondToAuthChallengeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RespondToAuthChallengeResponse,
    | SdkError
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | MFAMethodNotFoundException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link RevokeTokenCommand}
   */
  revokeToken(
    args: RevokeTokenRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RevokeTokenResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | TooManyRequestsException
    | UnauthorizedException
    | UnsupportedOperationException
    | UnsupportedTokenTypeException
  >;

  /**
   * @see {@link SetLogDeliveryConfigurationCommand}
   */
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SetLogDeliveryConfigurationResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link SetRiskConfigurationCommand}
   */
  setRiskConfiguration(
    args: SetRiskConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SetRiskConfigurationResponse,
    | SdkError
    | CodeDeliveryFailureException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolAddOnNotEnabledException
  >;

  /**
   * @see {@link SetUICustomizationCommand}
   */
  setUICustomization(
    args: SetUICustomizationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SetUICustomizationResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link SetUserMFAPreferenceCommand}
   */
  setUserMFAPreference(
    args: SetUserMFAPreferenceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SetUserMFAPreferenceResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link SetUserPoolMfaConfigCommand}
   */
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SetUserPoolMfaConfigResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link SetUserSettingsCommand}
   */
  setUserSettings(
    args: SetUserSettingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SetUserSettingsResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link SignUpCommand}
   */
  signUp(
    args: SignUpRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SignUpResponse,
    | SdkError
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UsernameExistsException
  >;

  /**
   * @see {@link StartUserImportJobCommand}
   */
  startUserImportJob(
    args: StartUserImportJobRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartUserImportJobResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link StopUserImportJobCommand}
   */
  stopUserImportJob(
    args: StopUserImportJobRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopUserImportJobResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
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
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
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
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link UpdateAuthEventFeedbackCommand}
   */
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAuthEventFeedbackResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
  >;

  /**
   * @see {@link UpdateDeviceStatusCommand}
   */
  updateDeviceStatus(
    args: UpdateDeviceStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeviceStatusResponse,
    | SdkError
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGroupResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link UpdateIdentityProviderCommand}
   */
  updateIdentityProvider(
    args: UpdateIdentityProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIdentityProviderResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedIdentityProviderException
  >;

  /**
   * @see {@link UpdateResourceServerCommand}
   */
  updateResourceServer(
    args: UpdateResourceServerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateResourceServerResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link UpdateUserAttributesCommand}
   */
  updateUserAttributes(
    args: UpdateUserAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserAttributesResponse,
    | SdkError
    | AliasExistsException
    | CodeDeliveryFailureException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link UpdateUserPoolCommand}
   */
  updateUserPool(
    args: UpdateUserPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserPoolResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserImportInProgressException
    | UserPoolTaggingException
  >;

  /**
   * @see {@link UpdateUserPoolClientCommand}
   */
  updateUserPoolClient(
    args: UpdateUserPoolClientRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserPoolClientResponse,
    | SdkError
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidOAuthFlowException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | ScopeDoesNotExistException
    | TooManyRequestsException
  >;

  /**
   * @see {@link UpdateUserPoolDomainCommand}
   */
  updateUserPoolDomain(
    args: UpdateUserPoolDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserPoolDomainResponse,
    | SdkError
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
  >;

  /**
   * @see {@link VerifySoftwareTokenCommand}
   */
  verifySoftwareToken(
    args: VerifySoftwareTokenRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    VerifySoftwareTokenResponse,
    | SdkError
    | CodeMismatchException
    | EnableSoftwareTokenMFAException
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;

  /**
   * @see {@link VerifyUserAttributeCommand}
   */
  verifyUserAttribute(
    args: VerifyUserAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    VerifyUserAttributeResponse,
    | SdkError
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const CognitoIdentityProviderService =
  Context.GenericTag<CognitoIdentityProviderService>(
    "@effect-aws/client-cognito-identity-provider/CognitoIdentityProviderService",
  );

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCognitoIdentityProviderService = Effect.gen(function* (_) {
  const client = yield* _(CognitoIdentityProviderClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkCognitoIdentityProviderServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkCognitoIdentityProviderServiceException>
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
  }, {}) as CognitoIdentityProviderService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseCognitoIdentityProviderServiceLayer = Layer.effect(
  CognitoIdentityProviderService,
  makeCognitoIdentityProviderService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CognitoIdentityProviderServiceLayer =
  BaseCognitoIdentityProviderServiceLayer.pipe(
    Layer.provide(CognitoIdentityProviderClientInstanceLayer),
  );

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCognitoIdentityProviderServiceLayer =
  CognitoIdentityProviderServiceLayer.pipe(
    Layer.provide(DefaultCognitoIdentityProviderClientConfigLayer),
  );
