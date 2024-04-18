import type {
  ConcurrentModificationException as SdkConcurrentModificationException,
  DashboardInvalidInputError as SdkDashboardInvalidInputError,
  DashboardNotFoundError as SdkDashboardNotFoundError,
  InternalServiceFault as SdkInternalServiceFault,
  InvalidFormatFault as SdkInvalidFormatFault,
  InvalidNextToken as SdkInvalidNextToken,
  InvalidParameterCombinationException as SdkInvalidParameterCombinationException,
  InvalidParameterValueException as SdkInvalidParameterValueException,
  LimitExceededException as SdkLimitExceededException,
  LimitExceededFault as SdkLimitExceededFault,
  MissingRequiredParameterException as SdkMissingRequiredParameterException,
  ResourceNotFound as SdkResourceNotFound,
  ResourceNotFoundException as SdkResourceNotFoundException,
} from "@aws-sdk/client-cloudwatch";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConcurrentModificationException =
  TaggedException<SdkConcurrentModificationException>;
export type DashboardInvalidInputError =
  TaggedException<SdkDashboardInvalidInputError>;
export type DashboardNotFoundError = TaggedException<SdkDashboardNotFoundError>;
export type InternalServiceFault = TaggedException<SdkInternalServiceFault>;
export type InvalidFormatFault = TaggedException<SdkInvalidFormatFault>;
export type InvalidNextToken = TaggedException<SdkInvalidNextToken>;
export type InvalidParameterCombinationException =
  TaggedException<SdkInvalidParameterCombinationException>;
export type InvalidParameterValueException =
  TaggedException<SdkInvalidParameterValueException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type LimitExceededFault = TaggedException<SdkLimitExceededFault>;
export type MissingRequiredParameterException =
  TaggedException<SdkMissingRequiredParameterException>;
export type ResourceNotFound = TaggedException<SdkResourceNotFound>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
