/**
 * @since 1.0.0
 */
import { AutoScalingClient } from "@aws-sdk/client-auto-scaling";
import { Context, Effect, Layer } from "effect";
import {
  AutoScalingClientInstanceConfig,
  DefaultAutoScalingClientConfigLayer,
} from "./AutoScalingClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class AutoScalingClientInstance extends Context.Tag(
  "@effect-aws/client-auto-scaling/AutoScalingClientInstance",
)<AutoScalingClientInstance, AutoScalingClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeAutoScalingClientInstance = Effect.flatMap(
  AutoScalingClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new AutoScalingClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const AutoScalingClientInstanceLayer = Layer.scoped(
  AutoScalingClientInstance,
  makeAutoScalingClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultAutoScalingClientInstanceLayer = AutoScalingClientInstanceLayer.pipe(
  Layer.provide(DefaultAutoScalingClientConfigLayer),
);
