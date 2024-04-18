import type {
  AccessDeniedException as SdkAccessDeniedException,
  ExpiredIteratorException as SdkExpiredIteratorException,
  ExpiredNextTokenException as SdkExpiredNextTokenException,
  InternalFailureException as SdkInternalFailureException,
  InvalidArgumentException as SdkInvalidArgumentException,
  KMSAccessDeniedException as SdkKMSAccessDeniedException,
  KMSDisabledException as SdkKMSDisabledException,
  KMSInvalidStateException as SdkKMSInvalidStateException,
  KMSNotFoundException as SdkKMSNotFoundException,
  KMSOptInRequired as SdkKMSOptInRequired,
  KMSThrottlingException as SdkKMSThrottlingException,
  LimitExceededException as SdkLimitExceededException,
  ProvisionedThroughputExceededException as SdkProvisionedThroughputExceededException,
  ResourceInUseException as SdkResourceInUseException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  ValidationException as SdkValidationException,
} from "@aws-sdk/client-kinesis";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedException = TaggedException<SdkAccessDeniedException>;
export type ExpiredIteratorException =
  TaggedException<SdkExpiredIteratorException>;
export type ExpiredNextTokenException =
  TaggedException<SdkExpiredNextTokenException>;
export type InternalFailureException =
  TaggedException<SdkInternalFailureException>;
export type InvalidArgumentException =
  TaggedException<SdkInvalidArgumentException>;
export type KMSAccessDeniedException =
  TaggedException<SdkKMSAccessDeniedException>;
export type KMSDisabledException = TaggedException<SdkKMSDisabledException>;
export type KMSInvalidStateException =
  TaggedException<SdkKMSInvalidStateException>;
export type KMSNotFoundException = TaggedException<SdkKMSNotFoundException>;
export type KMSOptInRequired = TaggedException<SdkKMSOptInRequired>;
export type KMSThrottlingException = TaggedException<SdkKMSThrottlingException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type ProvisionedThroughputExceededException =
  TaggedException<SdkProvisionedThroughputExceededException>;
export type ResourceInUseException = TaggedException<SdkResourceInUseException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type ValidationException = TaggedException<SdkValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
