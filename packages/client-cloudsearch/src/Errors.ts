import type {
  BaseException as SdkBaseException,
  DisabledOperationException as SdkDisabledOperationException,
  InternalException as SdkInternalException,
  InvalidTypeException as SdkInvalidTypeException,
  LimitExceededException as SdkLimitExceededException,
  ResourceAlreadyExistsException as SdkResourceAlreadyExistsException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  ValidationException as SdkValidationException,
} from "@aws-sdk/client-cloudsearch";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type BaseException = TaggedException<SdkBaseException>;
export type DisabledOperationException =
  TaggedException<SdkDisabledOperationException>;
export type InternalException = TaggedException<SdkInternalException>;
export type InvalidTypeException = TaggedException<SdkInvalidTypeException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type ResourceAlreadyExistsException =
  TaggedException<SdkResourceAlreadyExistsException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type ValidationException = TaggedException<SdkValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
