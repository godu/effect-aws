import type {
  BadRequestException as SdkBadRequestException,
  ConflictException as SdkConflictException,
  ForbiddenException as SdkForbiddenException,
  InternalServerErrorException as SdkInternalServerErrorException,
  NotFoundException as SdkNotFoundException,
  UnauthorizedException as SdkUnauthorizedException,
} from "@aws-sdk/client-mq";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type BadRequestException = TaggedException<SdkBadRequestException>;
export type ConflictException = TaggedException<SdkConflictException>;
export type ForbiddenException = TaggedException<SdkForbiddenException>;
export type InternalServerErrorException =
  TaggedException<SdkInternalServerErrorException>;
export type NotFoundException = TaggedException<SdkNotFoundException>;
export type UnauthorizedException = TaggedException<SdkUnauthorizedException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
