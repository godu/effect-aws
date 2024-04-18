import type {
  ExpiredTokenException as SdkExpiredTokenException,
  IDPCommunicationErrorException as SdkIDPCommunicationErrorException,
  IDPRejectedClaimException as SdkIDPRejectedClaimException,
  InvalidAuthorizationMessageException as SdkInvalidAuthorizationMessageException,
  InvalidIdentityTokenException as SdkInvalidIdentityTokenException,
  MalformedPolicyDocumentException as SdkMalformedPolicyDocumentException,
  PackedPolicyTooLargeException as SdkPackedPolicyTooLargeException,
  RegionDisabledException as SdkRegionDisabledException,
} from "@aws-sdk/client-sts";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ExpiredTokenException = TaggedException<SdkExpiredTokenException>;
export type IDPCommunicationErrorException =
  TaggedException<SdkIDPCommunicationErrorException>;
export type IDPRejectedClaimException =
  TaggedException<SdkIDPRejectedClaimException>;
export type InvalidAuthorizationMessageException =
  TaggedException<SdkInvalidAuthorizationMessageException>;
export type InvalidIdentityTokenException =
  TaggedException<SdkInvalidIdentityTokenException>;
export type MalformedPolicyDocumentException =
  TaggedException<SdkMalformedPolicyDocumentException>;
export type PackedPolicyTooLargeException =
  TaggedException<SdkPackedPolicyTooLargeException>;
export type RegionDisabledException =
  TaggedException<SdkRegionDisabledException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
