package io.squer.reactive_poc.adapters;

import io.squer.reactive_poc.model.LogEntry;
import io.squer.reactive_poc.model.LogLevel;
import io.squer.reactive_poc.service.LogProvider;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.OffsetDateTime;

@Component
public class LogProvider1 implements LogProvider {

    @Override
    public Flux<LogEntry> getLogs() {
        return Flux.interval(Duration.ofSeconds(1))
            .map(i -> new LogEntry(LogLevel.DEBUG, OffsetDateTime.now(), "Test"));
    }
}
