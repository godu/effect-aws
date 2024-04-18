/**
 * @since 1.0.0
 */
import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudWatchClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-cloudwatch/CloudWatchClientInstanceConfig",
)<CloudWatchClientInstanceConfig, CloudWatchClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultCloudWatchClientInstanceConfig: Effect.Effect<CloudWatchClientConfig> =
  Effect.gen(function* (_) {
    const runtime = yield* _(Effect.runtime<never>());
    const runSync = Runtime.runSync(runtime);

    return {
      logger: {
        info(m) {
          Effect.logInfo(m).pipe(runSync);
        },
        warn(m) {
          Effect.logWarning(m).pipe(runSync);
        },
        error(m) {
          Effect.logError(m).pipe(runSync);
        },
        debug(m) {
          Effect.logDebug(m).pipe(runSync);
        },
        trace(m) {
          Effect.logTrace(m).pipe(runSync);
        },
      },
    };
  });

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchClientConfigLayer = Layer.effect(
  CloudWatchClientInstanceConfig,
  makeDefaultCloudWatchClientInstanceConfig,
);
