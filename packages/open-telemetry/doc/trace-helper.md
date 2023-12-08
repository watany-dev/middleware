## OpenTelemetry Tracing Initialization

This module provides OpenTelemetry tracing initialization helper. It allows easy setup of tracing configuration with customizable options.

### Features

Customizable trace configuration
Support for setting service name, exporter, and additional resource attributes

### Usage

Import the initializeTracing function and pass the options for tracing initialization.

#### Basic Setup

```typescript
import { initializeTracing } from '@hono/otel/helper';

initializeTracing({
  serviceName: 'my-node-service',
});
```

This basic setup uses the ConsoleSpanExporter to display traces to the standard output.

#### Using Custom Options

You can also customize the trace exporter and additional attributes.

```typescript
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';

initializeTracing({
  serviceName: 'my-node-service',
  exporter: new JaegerExporter({ /* Jaeger configuration */ }),
  additionalAttributes: {
    'environment': 'production',
  },
});

```
In this example, the Jaeger exporter is used, and the environment attribute is added.

### Note

- This initializeTracing function is designed for simple initialization of OpenTelemetry tracing.
- For more advanced settings or specific needs, please refer to the OpenTelemetry SDK documentation and follow the general Node.js initialization methods.
