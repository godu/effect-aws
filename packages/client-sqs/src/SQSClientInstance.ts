/**
 * @since 1.0.0
 */
import { SQSClient } from "@aws-sdk/client-sqs";
import { Context, Effect, Layer } from "effect";
import { DefaultSQSClientConfigLayer, SQSClientInstanceConfig } from "./SQSClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SQSClientInstance extends Context.Tag(
  "@effect-aws/client-sqs/SQSClientInstance",
)<SQSClientInstance, SQSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSQSClientInstance = Effect.flatMap(
  SQSClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SQSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SQSClientInstanceLayer = Layer.scoped(
  SQSClientInstance,
  makeSQSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSQSClientInstanceLayer = SQSClientInstanceLayer.pipe(
  Layer.provide(DefaultSQSClientConfigLayer),
);
