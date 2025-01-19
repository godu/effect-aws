/**
 * @since 1.0.0
 */
import { OpenSearchClient } from "@aws-sdk/client-opensearch";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultOpenSearchClientConfigLayer,
  OpenSearchClientInstanceConfig,
} from "./OpenSearchClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class OpenSearchClientInstance extends Context.Tag(
  "@effect-aws/client-opensearch/OpenSearchClientInstance",
)<OpenSearchClientInstance, OpenSearchClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOpenSearchClientInstance = Effect.flatMap(
  OpenSearchClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new OpenSearchClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const OpenSearchClientInstanceLayer = Layer.scoped(
  OpenSearchClientInstance,
  makeOpenSearchClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultOpenSearchClientInstanceLayer =
  OpenSearchClientInstanceLayer.pipe(
    Layer.provide(DefaultOpenSearchClientConfigLayer),
  );
