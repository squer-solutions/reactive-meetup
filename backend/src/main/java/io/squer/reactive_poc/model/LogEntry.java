package io.squer.reactive_poc.model;

import java.time.OffsetDateTime;

public record LogEntry(LogLevel level, OffsetDateTime timestamp, String message) {}
