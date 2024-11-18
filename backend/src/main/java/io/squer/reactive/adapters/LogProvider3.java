package io.squer.reactive.adapters;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.model.LogLevel;
import io.squer.reactive.service.LogProvider;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.OffsetDateTime;

@Component
public class LogProvider3 implements LogProvider {

    @Override
    public Flux<LogEntry> getLogs() {
        return Flux.interval(Duration.ofMillis(600))
            .filter(i -> i % 3 == 0 || i % 5 == 0)
            .skipUntil(i -> i > 20)
            .map(i -> new LogEntry(LogLevel.ERROR, OffsetDateTime.now(), "Error"));
    }
}
