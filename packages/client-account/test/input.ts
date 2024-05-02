import * as Effect from 'effect/Effect';
import {AccountService, DefaultAccountServiceLayer} from '../src/AccountService';


const {listRegions} = Effect.serviceFunctions(AccountService);

const program = Effect.gen(function* (_) {
  const result = yield* _(listRegions({}));
}).pipe(
  Effect.provide(DefaultAccountServiceLayer)
)

Effect.runPromiseExit(program).then(console.log).catch(console.error);
