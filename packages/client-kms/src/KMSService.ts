/**
 * @since 1.0.0
 */
import {
  KMSServiceException as SdkKMSServiceException,
  CancelKeyDeletionCommand,
  ConnectCustomKeyStoreCommand,
  CreateAliasCommand,
  CreateCustomKeyStoreCommand,
  CreateGrantCommand,
  CreateKeyCommand,
  DecryptCommand,
  DeleteAliasCommand,
  DeleteCustomKeyStoreCommand,
  DeleteImportedKeyMaterialCommand,
  DescribeCustomKeyStoresCommand,
  DescribeKeyCommand,
  DisableKeyCommand,
  DisableKeyRotationCommand,
  DisconnectCustomKeyStoreCommand,
  EnableKeyCommand,
  EnableKeyRotationCommand,
  EncryptCommand,
  GenerateDataKeyCommand,
  GenerateDataKeyPairCommand,
  GenerateDataKeyPairWithoutPlaintextCommand,
  GenerateDataKeyWithoutPlaintextCommand,
  GenerateMacCommand,
  GenerateRandomCommand,
  GetKeyPolicyCommand,
  GetKeyRotationStatusCommand,
  GetParametersForImportCommand,
  GetPublicKeyCommand,
  ImportKeyMaterialCommand,
  ListAliasesCommand,
  ListGrantsCommand,
  ListKeyPoliciesCommand,
  ListKeyRotationsCommand,
  ListKeysCommand,
  ListResourceTagsCommand,
  ListRetirableGrantsCommand,
  PutKeyPolicyCommand,
  ReEncryptCommand,
  ReplicateKeyCommand,
  RetireGrantCommand,
  RevokeGrantCommand,
  RotateKeyOnDemandCommand,
  ScheduleKeyDeletionCommand,
  SignCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCustomKeyStoreCommand,
  UpdateKeyDescriptionCommand,
  UpdatePrimaryRegionCommand,
  VerifyCommand,
  VerifyMacCommand,
  type CancelKeyDeletionRequest,
  type CancelKeyDeletionResponse,
  type ConnectCustomKeyStoreRequest,
  type ConnectCustomKeyStoreResponse,
  type CreateAliasRequest,
  type CreateCustomKeyStoreRequest,
  type CreateCustomKeyStoreResponse,
  type CreateGrantRequest,
  type CreateGrantResponse,
  type CreateKeyRequest,
  type CreateKeyResponse,
  type DecryptRequest,
  type DecryptResponse,
  type DeleteAliasRequest,
  type DeleteCustomKeyStoreRequest,
  type DeleteCustomKeyStoreResponse,
  type DeleteImportedKeyMaterialRequest,
  type DescribeCustomKeyStoresRequest,
  type DescribeCustomKeyStoresResponse,
  type DescribeKeyRequest,
  type DescribeKeyResponse,
  type DisableKeyRequest,
  type DisableKeyRotationRequest,
  type DisconnectCustomKeyStoreRequest,
  type DisconnectCustomKeyStoreResponse,
  type EnableKeyRequest,
  type EnableKeyRotationRequest,
  type EncryptRequest,
  type EncryptResponse,
  type GenerateDataKeyRequest,
  type GenerateDataKeyResponse,
  type GenerateDataKeyPairRequest,
  type GenerateDataKeyPairResponse,
  type GenerateDataKeyPairWithoutPlaintextRequest,
  type GenerateDataKeyPairWithoutPlaintextResponse,
  type GenerateDataKeyWithoutPlaintextRequest,
  type GenerateDataKeyWithoutPlaintextResponse,
  type GenerateMacRequest,
  type GenerateMacResponse,
  type GenerateRandomRequest,
  type GenerateRandomResponse,
  type GetKeyPolicyRequest,
  type GetKeyPolicyResponse,
  type GetKeyRotationStatusRequest,
  type GetKeyRotationStatusResponse,
  type GetParametersForImportRequest,
  type GetParametersForImportResponse,
  type GetPublicKeyRequest,
  type GetPublicKeyResponse,
  type ImportKeyMaterialRequest,
  type ImportKeyMaterialResponse,
  type ListAliasesRequest,
  type ListAliasesResponse,
  type ListGrantsRequest,
  type ListGrantsResponse,
  type ListKeyPoliciesRequest,
  type ListKeyPoliciesResponse,
  type ListKeyRotationsRequest,
  type ListKeyRotationsResponse,
  type ListKeysRequest,
  type ListKeysResponse,
  type ListResourceTagsRequest,
  type ListResourceTagsResponse,
  type ListRetirableGrantsRequest,
  type PutKeyPolicyRequest,
  type ReEncryptRequest,
  type ReEncryptResponse,
  type ReplicateKeyRequest,
  type ReplicateKeyResponse,
  type RetireGrantRequest,
  type RevokeGrantRequest,
  type RotateKeyOnDemandRequest,
  type RotateKeyOnDemandResponse,
  type ScheduleKeyDeletionRequest,
  type ScheduleKeyDeletionResponse,
  type SignRequest,
  type SignResponse,
  type TagResourceRequest,
  type UntagResourceRequest,
  type UpdateAliasRequest,
  type UpdateCustomKeyStoreRequest,
  type UpdateCustomKeyStoreResponse,
  type UpdateKeyDescriptionRequest,
  type UpdatePrimaryRegionRequest,
  type VerifyRequest,
  type VerifyResponse,
  type VerifyMacRequest,
  type VerifyMacResponse,
} from "@aws-sdk/client-kms";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type DependencyTimeoutException,
  type InvalidArnException,
  type KMSInternalException,
  type KMSInvalidStateException,
  type NotFoundException,
  type CloudHsmClusterInvalidConfigurationException,
  type CloudHsmClusterNotActiveException,
  type CustomKeyStoreInvalidStateException,
  type CustomKeyStoreNotFoundException,
  type AlreadyExistsException,
  type InvalidAliasNameException,
  type LimitExceededException,
  type CloudHsmClusterInUseException,
  type CloudHsmClusterNotFoundException,
  type CustomKeyStoreNameInUseException,
  type IncorrectTrustAnchorException,
  type XksProxyIncorrectAuthenticationCredentialException,
  type XksProxyInvalidConfigurationException,
  type XksProxyInvalidResponseException,
  type XksProxyUriEndpointInUseException,
  type XksProxyUriInUseException,
  type XksProxyUriUnreachableException,
  type XksProxyVpcEndpointServiceInUseException,
  type XksProxyVpcEndpointServiceInvalidConfigurationException,
  type XksProxyVpcEndpointServiceNotFoundException,
  type DisabledException,
  type DryRunOperationException,
  type InvalidGrantTokenException,
  type MalformedPolicyDocumentException,
  type TagException,
  type UnsupportedOperationException,
  type XksKeyAlreadyInUseException,
  type XksKeyInvalidConfigurationException,
  type XksKeyNotFoundException,
  type IncorrectKeyException,
  type InvalidCiphertextException,
  type InvalidKeyUsageException,
  type KeyUnavailableException,
  type CustomKeyStoreHasCMKsException,
  type InvalidMarkerException,
  type ExpiredImportTokenException,
  type IncorrectKeyMaterialException,
  type InvalidImportTokenException,
  type InvalidGrantIdException,
  type ConflictException,
  type CloudHsmClusterNotRelatedException,
  type KMSInvalidSignatureException,
  type KMSInvalidMacException,
  type TaggedException,
  SdkError,
} from "./Errors";
import { KMSClientInstance, KMSClientInstanceLayer } from "./KMSClientInstance";
import { DefaultKMSClientConfigLayer } from "./KMSClientInstanceConfig";

const commands = {
  CancelKeyDeletionCommand,
  ConnectCustomKeyStoreCommand,
  CreateAliasCommand,
  CreateCustomKeyStoreCommand,
  CreateGrantCommand,
  CreateKeyCommand,
  DecryptCommand,
  DeleteAliasCommand,
  DeleteCustomKeyStoreCommand,
  DeleteImportedKeyMaterialCommand,
  DescribeCustomKeyStoresCommand,
  DescribeKeyCommand,
  DisableKeyCommand,
  DisableKeyRotationCommand,
  DisconnectCustomKeyStoreCommand,
  EnableKeyCommand,
  EnableKeyRotationCommand,
  EncryptCommand,
  GenerateDataKeyCommand,
  GenerateDataKeyPairCommand,
  GenerateDataKeyPairWithoutPlaintextCommand,
  GenerateDataKeyWithoutPlaintextCommand,
  GenerateMacCommand,
  GenerateRandomCommand,
  GetKeyPolicyCommand,
  GetKeyRotationStatusCommand,
  GetParametersForImportCommand,
  GetPublicKeyCommand,
  ImportKeyMaterialCommand,
  ListAliasesCommand,
  ListGrantsCommand,
  ListKeyPoliciesCommand,
  ListKeyRotationsCommand,
  ListKeysCommand,
  ListResourceTagsCommand,
  ListRetirableGrantsCommand,
  PutKeyPolicyCommand,
  ReEncryptCommand,
  ReplicateKeyCommand,
  RetireGrantCommand,
  RevokeGrantCommand,
  RotateKeyOnDemandCommand,
  ScheduleKeyDeletionCommand,
  SignCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCustomKeyStoreCommand,
  UpdateKeyDescriptionCommand,
  UpdatePrimaryRegionCommand,
  VerifyCommand,
  VerifyMacCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface KMSService {
  readonly _: unique symbol;

  /**
   * @see {@link CancelKeyDeletionCommand}
   */
  cancelKeyDeletion(
    args: CancelKeyDeletionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelKeyDeletionResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link ConnectCustomKeyStoreCommand}
   */
  connectCustomKeyStore(
    args: ConnectCustomKeyStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ConnectCustomKeyStoreResponse,
    | SdkError
    | CloudHsmClusterInvalidConfigurationException
    | CloudHsmClusterNotActiveException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
  >;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AlreadyExistsException
    | DependencyTimeoutException
    | InvalidAliasNameException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
  >;

  /**
   * @see {@link CreateCustomKeyStoreCommand}
   */
  createCustomKeyStore(
    args: CreateCustomKeyStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomKeyStoreResponse,
    | SdkError
    | CloudHsmClusterInUseException
    | CloudHsmClusterInvalidConfigurationException
    | CloudHsmClusterNotActiveException
    | CloudHsmClusterNotFoundException
    | CustomKeyStoreNameInUseException
    | IncorrectTrustAnchorException
    | KMSInternalException
    | LimitExceededException
    | XksProxyIncorrectAuthenticationCredentialException
    | XksProxyInvalidConfigurationException
    | XksProxyInvalidResponseException
    | XksProxyUriEndpointInUseException
    | XksProxyUriInUseException
    | XksProxyUriUnreachableException
    | XksProxyVpcEndpointServiceInUseException
    | XksProxyVpcEndpointServiceInvalidConfigurationException
    | XksProxyVpcEndpointServiceNotFoundException
  >;

  /**
   * @see {@link CreateGrantCommand}
   */
  createGrant(
    args: CreateGrantRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateGrantResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidArnException
    | InvalidGrantTokenException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
  >;

  /**
   * @see {@link CreateKeyCommand}
   */
  createKey(
    args: CreateKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateKeyResponse,
    | SdkError
    | CloudHsmClusterInvalidConfigurationException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | TagException
    | UnsupportedOperationException
    | XksKeyAlreadyInUseException
    | XksKeyInvalidConfigurationException
    | XksKeyNotFoundException
  >;

  /**
   * @see {@link DecryptCommand}
   */
  decrypt(
    args: DecryptRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DecryptResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | IncorrectKeyException
    | InvalidCiphertextException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(
    args: DeleteAliasRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link DeleteCustomKeyStoreCommand}
   */
  deleteCustomKeyStore(
    args: DeleteCustomKeyStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomKeyStoreResponse,
    | SdkError
    | CustomKeyStoreHasCMKsException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
  >;

  /**
   * @see {@link DeleteImportedKeyMaterialCommand}
   */
  deleteImportedKeyMaterial(
    args: DeleteImportedKeyMaterialRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DescribeCustomKeyStoresCommand}
   */
  describeCustomKeyStores(
    args: DescribeCustomKeyStoresRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCustomKeyStoresResponse,
    | SdkError
    | CustomKeyStoreNotFoundException
    | InvalidMarkerException
    | KMSInternalException
  >;

  /**
   * @see {@link DescribeKeyCommand}
   */
  describeKey(
    args: DescribeKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeKeyResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | NotFoundException
  >;

  /**
   * @see {@link DisableKeyCommand}
   */
  disableKey(
    args: DisableKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link DisableKeyRotationCommand}
   */
  disableKeyRotation(
    args: DisableKeyRotationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link DisconnectCustomKeyStoreCommand}
   */
  disconnectCustomKeyStore(
    args: DisconnectCustomKeyStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisconnectCustomKeyStoreResponse,
    | SdkError
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
  >;

  /**
   * @see {@link EnableKeyCommand}
   */
  enableKey(
    args: EnableKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
  >;

  /**
   * @see {@link EnableKeyRotationCommand}
   */
  enableKeyRotation(
    args: EnableKeyRotationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link EncryptCommand}
   */
  encrypt(
    args: EncryptRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EncryptResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link GenerateDataKeyCommand}
   */
  generateDataKey(
    args: GenerateDataKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link GenerateDataKeyPairCommand}
   */
  generateDataKeyPair(
    args: GenerateDataKeyPairRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyPairResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GenerateDataKeyPairWithoutPlaintextCommand}
   */
  generateDataKeyPairWithoutPlaintext(
    args: GenerateDataKeyPairWithoutPlaintextRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyPairWithoutPlaintextResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GenerateDataKeyWithoutPlaintextCommand}
   */
  generateDataKeyWithoutPlaintext(
    args: GenerateDataKeyWithoutPlaintextRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyWithoutPlaintextResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link GenerateMacCommand}
   */
  generateMac(
    args: GenerateMacRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateMacResponse,
    | SdkError
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link GenerateRandomCommand}
   */
  generateRandom(
    args: GenerateRandomRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateRandomResponse,
    | SdkError
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNotFoundException
    | DependencyTimeoutException
    | KMSInternalException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetKeyPolicyCommand}
   */
  getKeyPolicy(
    args: GetKeyPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetKeyPolicyResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link GetKeyRotationStatusCommand}
   */
  getKeyRotationStatus(
    args: GetKeyRotationStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetKeyRotationStatusResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetParametersForImportCommand}
   */
  getParametersForImport(
    args: GetParametersForImportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetParametersForImportResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link GetPublicKeyCommand}
   */
  getPublicKey(
    args: GetPublicKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPublicKeyResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ImportKeyMaterialCommand}
   */
  importKeyMaterial(
    args: ImportKeyMaterialRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ImportKeyMaterialResponse,
    | SdkError
    | DependencyTimeoutException
    | ExpiredImportTokenException
    | IncorrectKeyMaterialException
    | InvalidArnException
    | InvalidCiphertextException
    | InvalidImportTokenException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(
    args: ListAliasesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAliasesResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | NotFoundException
  >;

  /**
   * @see {@link ListGrantsCommand}
   */
  listGrants(
    args: ListGrantsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListGrantsResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | InvalidGrantIdException
    | InvalidMarkerException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link ListKeyPoliciesCommand}
   */
  listKeyPolicies(
    args: ListKeyPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListKeyPoliciesResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link ListKeyRotationsCommand}
   */
  listKeyRotations(
    args: ListKeyRotationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListKeyRotationsResponse,
    | SdkError
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ListKeysCommand}
   */
  listKeys(
    args: ListKeysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListKeysResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidMarkerException
    | KMSInternalException
  >;

  /**
   * @see {@link ListResourceTagsCommand}
   */
  listResourceTags(
    args: ListResourceTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceTagsResponse,
    | SdkError
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | NotFoundException
  >;

  /**
   * @see {@link ListRetirableGrantsCommand}
   */
  listRetirableGrants(
    args: ListRetirableGrantsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListGrantsResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | InvalidMarkerException
    | KMSInternalException
    | NotFoundException
  >;

  /**
   * @see {@link PutKeyPolicyCommand}
   */
  putKeyPolicy(
    args: PutKeyPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ReEncryptCommand}
   */
  reEncrypt(
    args: ReEncryptRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReEncryptResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | IncorrectKeyException
    | InvalidCiphertextException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link ReplicateKeyCommand}
   */
  replicateKey(
    args: ReplicateKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReplicateKeyResponse,
    | SdkError
    | AlreadyExistsException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NotFoundException
    | TagException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link RetireGrantCommand}
   */
  retireGrant(
    args: RetireGrantRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | DryRunOperationException
    | InvalidArnException
    | InvalidGrantIdException
    | InvalidGrantTokenException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link RevokeGrantCommand}
   */
  revokeGrant(
    args: RevokeGrantRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | DryRunOperationException
    | InvalidArnException
    | InvalidGrantIdException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link RotateKeyOnDemandCommand}
   */
  rotateKeyOnDemand(
    args: RotateKeyOnDemandRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RotateKeyOnDemandResponse,
    | SdkError
    | ConflictException
    | DependencyTimeoutException
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link ScheduleKeyDeletionCommand}
   */
  scheduleKeyDeletion(
    args: ScheduleKeyDeletionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ScheduleKeyDeletionResponse,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link SignCommand}
   */
  sign(
    args: SignRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SignResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
    | TagException
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | TagException
  >;

  /**
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(
    args: UpdateAliasRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | KMSInternalException
    | KMSInvalidStateException
    | LimitExceededException
    | NotFoundException
  >;

  /**
   * @see {@link UpdateCustomKeyStoreCommand}
   */
  updateCustomKeyStore(
    args: UpdateCustomKeyStoreRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCustomKeyStoreResponse,
    | SdkError
    | CloudHsmClusterInvalidConfigurationException
    | CloudHsmClusterNotActiveException
    | CloudHsmClusterNotFoundException
    | CloudHsmClusterNotRelatedException
    | CustomKeyStoreInvalidStateException
    | CustomKeyStoreNameInUseException
    | CustomKeyStoreNotFoundException
    | KMSInternalException
    | XksProxyIncorrectAuthenticationCredentialException
    | XksProxyInvalidConfigurationException
    | XksProxyInvalidResponseException
    | XksProxyUriEndpointInUseException
    | XksProxyUriInUseException
    | XksProxyUriUnreachableException
    | XksProxyVpcEndpointServiceInUseException
    | XksProxyVpcEndpointServiceInvalidConfigurationException
    | XksProxyVpcEndpointServiceNotFoundException
  >;

  /**
   * @see {@link UpdateKeyDescriptionCommand}
   */
  updateKeyDescription(
    args: UpdateKeyDescriptionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DependencyTimeoutException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link UpdatePrimaryRegionCommand}
   */
  updatePrimaryRegion(
    args: UpdatePrimaryRegionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DisabledException
    | InvalidArnException
    | KMSInternalException
    | KMSInvalidStateException
    | NotFoundException
    | UnsupportedOperationException
  >;

  /**
   * @see {@link VerifyCommand}
   */
  verify(
    args: VerifyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    VerifyResponse,
    | SdkError
    | DependencyTimeoutException
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidSignatureException
    | KMSInvalidStateException
    | NotFoundException
  >;

  /**
   * @see {@link VerifyMacCommand}
   */
  verifyMac(
    args: VerifyMacRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    VerifyMacResponse,
    | SdkError
    | DisabledException
    | DryRunOperationException
    | InvalidGrantTokenException
    | InvalidKeyUsageException
    | KeyUnavailableException
    | KMSInternalException
    | KMSInvalidMacException
    | KMSInvalidStateException
    | NotFoundException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const KMSService = Context.GenericTag<KMSService>(
  "@effect-aws/client-kms/KMSService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKMSService = Effect.gen(function* (_) {
  const client = yield* _(KMSClientInstance);

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
          if (e instanceof SdkKMSServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkKMSServiceException>
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
  }, {}) as KMSService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseKMSServiceLayer = Layer.effect(KMSService, makeKMSService);

/**
 * @since 1.0.0
 * @category layers
 */
export const KMSServiceLayer = BaseKMSServiceLayer.pipe(
  Layer.provide(KMSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultKMSServiceLayer = KMSServiceLayer.pipe(
  Layer.provide(DefaultKMSClientConfigLayer),
);
