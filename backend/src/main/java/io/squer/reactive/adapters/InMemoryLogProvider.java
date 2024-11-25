package io.squer.reactive.adapters;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.model.LogLevel;
import io.squer.reactive.service.LogProvider;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.OffsetDateTime;

@Component
public class InMemoryLogProvider implements LogProvider {

    @Override
    public Flux<LogEntry> getLogs() {
        return Flux.interval(Duration.ofSeconds(1))
            .map(i -> new LogEntry(LogLevel.DEBUG, OffsetDateTime.now(), "Debug from in-memory log provider: " + i));
    }
}
