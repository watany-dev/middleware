import { NodeSDK } from "@opentelemetry/sdk-node";
import { ConsoleSpanExporter } from "@opentelemetry/sdk-trace-node";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";

interface TracingOptions {
  serviceName: string;
  exporter?: any;
  additionalAttributes?: Record<string, any>;
}

export const initializeTracing = (options: TracingOptions) => {
  const {
    serviceName,
    exporter = new ConsoleSpanExporter(),
    additionalAttributes = {},
  } = options;

  const resource = new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    ...additionalAttributes,
  });

  const sdk = new NodeSDK({
    resource: resource,
    traceExporter: exporter,
  });

  sdk.start();
};
