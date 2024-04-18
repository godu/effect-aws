import type {
  ConcurrentModificationException as SdkConcurrentModificationException,
  IllegalStatusException as SdkIllegalStatusException,
  InternalException as SdkInternalException,
  InvalidEventPatternException as SdkInvalidEventPatternException,
  InvalidStateException as SdkInvalidStateException,
  LimitExceededException as SdkLimitExceededException,
  ManagedRuleException as SdkManagedRuleException,
  OperationDisabledException as SdkOperationDisabledException,
  PolicyLengthExceededException as SdkPolicyLengthExceededException,
  ResourceAlreadyExistsException as SdkResourceAlreadyExistsException,
  ResourceNotFoundException as SdkResourceNotFoundException,
} from "@aws-sdk/client-cloudwatch-events";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConcurrentModificationException =
  TaggedException<SdkConcurrentModificationException>;
export type IllegalStatusException = TaggedException<SdkIllegalStatusException>;
export type InternalException = TaggedException<SdkInternalException>;
export type InvalidEventPatternException =
  TaggedException<SdkInvalidEventPatternException>;
export type InvalidStateException = TaggedException<SdkInvalidStateException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type ManagedRuleException = TaggedException<SdkManagedRuleException>;
export type OperationDisabledException =
  TaggedException<SdkOperationDisabledException>;
export type PolicyLengthExceededException =
  TaggedException<SdkPolicyLengthExceededException>;
export type ResourceAlreadyExistsException =
  TaggedException<SdkResourceAlreadyExistsException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
