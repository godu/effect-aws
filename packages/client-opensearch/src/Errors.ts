import type {
  AccessDeniedException as SdkAccessDeniedException,
  BaseException as SdkBaseException,
  ConflictException as SdkConflictException,
  DependencyFailureException as SdkDependencyFailureException,
  DisabledOperationException as SdkDisabledOperationException,
  InternalException as SdkInternalException,
  InvalidPaginationTokenException as SdkInvalidPaginationTokenException,
  InvalidTypeException as SdkInvalidTypeException,
  LimitExceededException as SdkLimitExceededException,
  ResourceAlreadyExistsException as SdkResourceAlreadyExistsException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  SlotNotAvailableException as SdkSlotNotAvailableException,
  ValidationException as SdkValidationException,
} from "@aws-sdk/client-opensearch";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedException = TaggedException<SdkAccessDeniedException>;
export type BaseException = TaggedException<SdkBaseException>;
export type ConflictException = TaggedException<SdkConflictException>;
export type DependencyFailureException =
  TaggedException<SdkDependencyFailureException>;
export type DisabledOperationException =
  TaggedException<SdkDisabledOperationException>;
export type InternalException = TaggedException<SdkInternalException>;
export type InvalidPaginationTokenException =
  TaggedException<SdkInvalidPaginationTokenException>;
export type InvalidTypeException = TaggedException<SdkInvalidTypeException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type ResourceAlreadyExistsException =
  TaggedException<SdkResourceAlreadyExistsException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type SlotNotAvailableException =
  TaggedException<SdkSlotNotAvailableException>;
export type ValidationException = TaggedException<SdkValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
