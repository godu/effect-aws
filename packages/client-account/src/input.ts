import * as Effect from "effect/Effect";
import {
  ListRegionsService,
  DefaultListRegionsServiceLayer,
} from "./AccountService";

const { listRegions } = Effect.serviceFunctions(ListRegionsService);

export const program = Effect.gen(function* (_) {
  const result = yield* _(listRegions({}));
  return result;
});

Effect.runPromiseExit(
  program.pipe(Effect.provide(DefaultListRegionsServiceLayer)),
)
  .then(console.log)
  .catch(console.error);
