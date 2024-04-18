import type {
  AccessDeniedException as SdkAccessDeniedException,
  ConflictException as SdkConflictException,
  InternalServerException as SdkInternalServerException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  TooManyRequestsException as SdkTooManyRequestsException,
  ValidationException as SdkValidationException,
} from "@aws-sdk/client-account";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedException = TaggedException<SdkAccessDeniedException>;
export type ConflictException = TaggedException<SdkConflictException>;
export type InternalServerException =
  TaggedException<SdkInternalServerException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type TooManyRequestsException =
  TaggedException<SdkTooManyRequestsException>;
export type ValidationException = TaggedException<SdkValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
