package io.squer.reactive.adapters;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.model.LogLevel;
import io.squer.reactive.service.LogProvider;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.OffsetDateTime;

import static io.squer.reactive.util.LogStatementProvider.getRandomLogStatement;
import static java.lang.String.format;

@Component
public class InMemoryLogProvider implements LogProvider {

    private final Flux<LogEntry> logs;

    public InMemoryLogProvider() {
        this.logs = Flux.interval(Duration.ofSeconds(1))
            .map(i -> new LogEntry(
                LogLevel.randomLogLevel(),
                OffsetDateTime.now(),
                format("In Memory: %s", getRandomLogStatement())
            )).share();
    }

    @Override
    public Flux<LogEntry> getLogs() {
        return logs;
    }
}
