## OpenTelemetry Tracer for Hono
This package provides an OpenTelemetry tracing middleware for the Hono framework. By using this middleware, you can trace HTTP requests in your Hono application and perform performance measurement and error monitoring.

### Features
- Trace HTTP requests
- Support for custom trace attributes
- Error monitoring and recording
- Measurement of request processing time

### Usage
First, import the otelTracer middleware and add it to your Hono application.

Basic Setup

```typescript
import { Hono } from 'hono';
import { otelTracer } from '@hono/otel';

const app = new Hono();

// Configure the OpenTelemetry tracer
app.use('*', otelTracer('my-service-name'));
```

### Adding Custom Attributes
To set additional trace attributes, pass a function that returns custom attributes to otelTracer.

```typescript
const customAttributes = (context) => {
  return {
    'user.id': context.req.headers['user-id'] || 'unknown',
  };
};

app.use('*', otelTracer('my-service-name', customAttributes));
```
This function takes a Hono Context object and returns an object with key-value pairs to be included in the trace.

### Error Handling
The recordError function records caught errors in the trace. It is used internally by the tracer middleware.

```typescript
try {
  // Process the request...
} catch (error) {
  recordError(span, error);
  // Additional error handling...
}
```

If the error is an Error object, the stack trace and error message are recorded. Otherwise, the string representation of the error is recorded.