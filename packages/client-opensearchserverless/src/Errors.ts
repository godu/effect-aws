import type {
  ConflictException as SdkConflictException,
  InternalServerException as SdkInternalServerException,
  OcuLimitExceededException as SdkOcuLimitExceededException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  ServiceQuotaExceededException as SdkServiceQuotaExceededException,
  ValidationException as SdkValidationException,
} from "@aws-sdk/client-opensearchserverless";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConflictException = TaggedException<SdkConflictException>;
export type InternalServerException =
  TaggedException<SdkInternalServerException>;
export type OcuLimitExceededException =
  TaggedException<SdkOcuLimitExceededException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type ServiceQuotaExceededException =
  TaggedException<SdkServiceQuotaExceededException>;
export type ValidationException = TaggedException<SdkValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
