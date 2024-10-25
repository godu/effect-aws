import type {
  AlreadyExistsException as SdkAlreadyExistsException,
  CloudHsmClusterInUseException as SdkCloudHsmClusterInUseException,
  CloudHsmClusterInvalidConfigurationException as SdkCloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterNotActiveException as SdkCloudHsmClusterNotActiveException,
  CloudHsmClusterNotFoundException as SdkCloudHsmClusterNotFoundException,
  CloudHsmClusterNotRelatedException as SdkCloudHsmClusterNotRelatedException,
  ConflictException as SdkConflictException,
  CustomKeyStoreHasCMKsException as SdkCustomKeyStoreHasCMKsException,
  CustomKeyStoreInvalidStateException as SdkCustomKeyStoreInvalidStateException,
  CustomKeyStoreNameInUseException as SdkCustomKeyStoreNameInUseException,
  CustomKeyStoreNotFoundException as SdkCustomKeyStoreNotFoundException,
  DependencyTimeoutException as SdkDependencyTimeoutException,
  DisabledException as SdkDisabledException,
  DryRunOperationException as SdkDryRunOperationException,
  ExpiredImportTokenException as SdkExpiredImportTokenException,
  IncorrectKeyException as SdkIncorrectKeyException,
  IncorrectKeyMaterialException as SdkIncorrectKeyMaterialException,
  IncorrectTrustAnchorException as SdkIncorrectTrustAnchorException,
  InvalidAliasNameException as SdkInvalidAliasNameException,
  InvalidArnException as SdkInvalidArnException,
  InvalidCiphertextException as SdkInvalidCiphertextException,
  InvalidGrantIdException as SdkInvalidGrantIdException,
  InvalidGrantTokenException as SdkInvalidGrantTokenException,
  InvalidImportTokenException as SdkInvalidImportTokenException,
  InvalidKeyUsageException as SdkInvalidKeyUsageException,
  InvalidMarkerException as SdkInvalidMarkerException,
  KMSInternalException as SdkKMSInternalException,
  KMSInvalidMacException as SdkKMSInvalidMacException,
  KMSInvalidSignatureException as SdkKMSInvalidSignatureException,
  KMSInvalidStateException as SdkKMSInvalidStateException,
  KeyUnavailableException as SdkKeyUnavailableException,
  LimitExceededException as SdkLimitExceededException,
  MalformedPolicyDocumentException as SdkMalformedPolicyDocumentException,
  NotFoundException as SdkNotFoundException,
  TagException as SdkTagException,
  UnsupportedOperationException as SdkUnsupportedOperationException,
  XksKeyAlreadyInUseException as SdkXksKeyAlreadyInUseException,
  XksKeyInvalidConfigurationException as SdkXksKeyInvalidConfigurationException,
  XksKeyNotFoundException as SdkXksKeyNotFoundException,
  XksProxyIncorrectAuthenticationCredentialException as SdkXksProxyIncorrectAuthenticationCredentialException,
  XksProxyInvalidConfigurationException as SdkXksProxyInvalidConfigurationException,
  XksProxyInvalidResponseException as SdkXksProxyInvalidResponseException,
  XksProxyUriEndpointInUseException as SdkXksProxyUriEndpointInUseException,
  XksProxyUriInUseException as SdkXksProxyUriInUseException,
  XksProxyUriUnreachableException as SdkXksProxyUriUnreachableException,
  XksProxyVpcEndpointServiceInUseException as SdkXksProxyVpcEndpointServiceInUseException,
  XksProxyVpcEndpointServiceInvalidConfigurationException as SdkXksProxyVpcEndpointServiceInvalidConfigurationException,
  XksProxyVpcEndpointServiceNotFoundException as SdkXksProxyVpcEndpointServiceNotFoundException,
} from "@aws-sdk/client-kms";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AlreadyExistsException = TaggedException<SdkAlreadyExistsException>;
export type CloudHsmClusterInUseException =
  TaggedException<SdkCloudHsmClusterInUseException>;
export type CloudHsmClusterInvalidConfigurationException =
  TaggedException<SdkCloudHsmClusterInvalidConfigurationException>;
export type CloudHsmClusterNotActiveException =
  TaggedException<SdkCloudHsmClusterNotActiveException>;
export type CloudHsmClusterNotFoundException =
  TaggedException<SdkCloudHsmClusterNotFoundException>;
export type CloudHsmClusterNotRelatedException =
  TaggedException<SdkCloudHsmClusterNotRelatedException>;
export type ConflictException = TaggedException<SdkConflictException>;
export type CustomKeyStoreHasCMKsException =
  TaggedException<SdkCustomKeyStoreHasCMKsException>;
export type CustomKeyStoreInvalidStateException =
  TaggedException<SdkCustomKeyStoreInvalidStateException>;
export type CustomKeyStoreNameInUseException =
  TaggedException<SdkCustomKeyStoreNameInUseException>;
export type CustomKeyStoreNotFoundException =
  TaggedException<SdkCustomKeyStoreNotFoundException>;
export type DependencyTimeoutException =
  TaggedException<SdkDependencyTimeoutException>;
export type DisabledException = TaggedException<SdkDisabledException>;
export type DryRunOperationException =
  TaggedException<SdkDryRunOperationException>;
export type ExpiredImportTokenException =
  TaggedException<SdkExpiredImportTokenException>;
export type IncorrectKeyException = TaggedException<SdkIncorrectKeyException>;
export type IncorrectKeyMaterialException =
  TaggedException<SdkIncorrectKeyMaterialException>;
export type IncorrectTrustAnchorException =
  TaggedException<SdkIncorrectTrustAnchorException>;
export type InvalidAliasNameException =
  TaggedException<SdkInvalidAliasNameException>;
export type InvalidArnException = TaggedException<SdkInvalidArnException>;
export type InvalidCiphertextException =
  TaggedException<SdkInvalidCiphertextException>;
export type InvalidGrantIdException =
  TaggedException<SdkInvalidGrantIdException>;
export type InvalidGrantTokenException =
  TaggedException<SdkInvalidGrantTokenException>;
export type InvalidImportTokenException =
  TaggedException<SdkInvalidImportTokenException>;
export type InvalidKeyUsageException =
  TaggedException<SdkInvalidKeyUsageException>;
export type InvalidMarkerException = TaggedException<SdkInvalidMarkerException>;
export type KMSInternalException = TaggedException<SdkKMSInternalException>;
export type KMSInvalidMacException = TaggedException<SdkKMSInvalidMacException>;
export type KMSInvalidSignatureException =
  TaggedException<SdkKMSInvalidSignatureException>;
export type KMSInvalidStateException =
  TaggedException<SdkKMSInvalidStateException>;
export type KeyUnavailableException =
  TaggedException<SdkKeyUnavailableException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type MalformedPolicyDocumentException =
  TaggedException<SdkMalformedPolicyDocumentException>;
export type NotFoundException = TaggedException<SdkNotFoundException>;
export type TagException = TaggedException<SdkTagException>;
export type UnsupportedOperationException =
  TaggedException<SdkUnsupportedOperationException>;
export type XksKeyAlreadyInUseException =
  TaggedException<SdkXksKeyAlreadyInUseException>;
export type XksKeyInvalidConfigurationException =
  TaggedException<SdkXksKeyInvalidConfigurationException>;
export type XksKeyNotFoundException =
  TaggedException<SdkXksKeyNotFoundException>;
export type XksProxyIncorrectAuthenticationCredentialException =
  TaggedException<SdkXksProxyIncorrectAuthenticationCredentialException>;
export type XksProxyInvalidConfigurationException =
  TaggedException<SdkXksProxyInvalidConfigurationException>;
export type XksProxyInvalidResponseException =
  TaggedException<SdkXksProxyInvalidResponseException>;
export type XksProxyUriEndpointInUseException =
  TaggedException<SdkXksProxyUriEndpointInUseException>;
export type XksProxyUriInUseException =
  TaggedException<SdkXksProxyUriInUseException>;
export type XksProxyUriUnreachableException =
  TaggedException<SdkXksProxyUriUnreachableException>;
export type XksProxyVpcEndpointServiceInUseException =
  TaggedException<SdkXksProxyVpcEndpointServiceInUseException>;
export type XksProxyVpcEndpointServiceInvalidConfigurationException =
  TaggedException<SdkXksProxyVpcEndpointServiceInvalidConfigurationException>;
export type XksProxyVpcEndpointServiceNotFoundException =
  TaggedException<SdkXksProxyVpcEndpointServiceNotFoundException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
