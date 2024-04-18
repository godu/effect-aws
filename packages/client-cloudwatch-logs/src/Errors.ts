import type {
  AccessDeniedException as SdkAccessDeniedException,
  ConflictException as SdkConflictException,
  DataAlreadyAcceptedException as SdkDataAlreadyAcceptedException,
  InvalidOperationException as SdkInvalidOperationException,
  InvalidParameterException as SdkInvalidParameterException,
  InvalidSequenceTokenException as SdkInvalidSequenceTokenException,
  LimitExceededException as SdkLimitExceededException,
  MalformedQueryException as SdkMalformedQueryException,
  OperationAbortedException as SdkOperationAbortedException,
  ResourceAlreadyExistsException as SdkResourceAlreadyExistsException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  ServiceQuotaExceededException as SdkServiceQuotaExceededException,
  ServiceUnavailableException as SdkServiceUnavailableException,
  SessionStreamingException as SdkSessionStreamingException,
  SessionTimeoutException as SdkSessionTimeoutException,
  ThrottlingException as SdkThrottlingException,
  TooManyTagsException as SdkTooManyTagsException,
  UnrecognizedClientException as SdkUnrecognizedClientException,
  ValidationException as SdkValidationException,
} from "@aws-sdk/client-cloudwatch-logs";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedException = TaggedException<SdkAccessDeniedException>;
export type ConflictException = TaggedException<SdkConflictException>;
export type DataAlreadyAcceptedException =
  TaggedException<SdkDataAlreadyAcceptedException>;
export type InvalidOperationException =
  TaggedException<SdkInvalidOperationException>;
export type InvalidParameterException =
  TaggedException<SdkInvalidParameterException>;
export type InvalidSequenceTokenException =
  TaggedException<SdkInvalidSequenceTokenException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type MalformedQueryException =
  TaggedException<SdkMalformedQueryException>;
export type OperationAbortedException =
  TaggedException<SdkOperationAbortedException>;
export type ResourceAlreadyExistsException =
  TaggedException<SdkResourceAlreadyExistsException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type ServiceQuotaExceededException =
  TaggedException<SdkServiceQuotaExceededException>;
export type ServiceUnavailableException =
  TaggedException<SdkServiceUnavailableException>;
export type SessionStreamingException =
  TaggedException<SdkSessionStreamingException>;
export type SessionTimeoutException =
  TaggedException<SdkSessionTimeoutException>;
export type ThrottlingException = TaggedException<SdkThrottlingException>;
export type TooManyTagsException = TaggedException<SdkTooManyTagsException>;
export type UnrecognizedClientException =
  TaggedException<SdkUnrecognizedClientException>;
export type ValidationException = TaggedException<SdkValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
