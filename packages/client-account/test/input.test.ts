import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import { describe, expect, it, vi } from "vitest";
import { program } from "../src/input";
import {
  ListRegionsService,
} from "../src";

describe("input", () => {
  it("default", async () => {
    const listRegionsServiceMock = {
      listRegions: vi.fn().mockImplementation(() => Effect.succeed({})),
    } as unknown as ListRegionsService;

    const result = await pipe(
      program,
      Effect.provide(Layer.succeed(ListRegionsService, listRegionsServiceMock)),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(listRegionsServiceMock.listRegions).toHaveBeenNthCalledWith(1, {});
  });
});
