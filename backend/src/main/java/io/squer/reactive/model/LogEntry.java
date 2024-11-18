package io.squer.reactive.model;

import java.time.OffsetDateTime;

public record LogEntry(LogLevel level, OffsetDateTime timestamp, String message) {}
