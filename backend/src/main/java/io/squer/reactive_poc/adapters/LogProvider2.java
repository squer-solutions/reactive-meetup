package io.squer.reactive_poc.adapters;

import io.squer.reactive_poc.model.LogEntry;
import io.squer.reactive_poc.service.LogProvider;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

@Component
public class LogProvider2 implements LogProvider {

    private final Flux<LogEntry> logs;
    private final Sinks.Many<LogEntry> sink;

    public LogProvider2() {
        this.sink = Sinks.many().multicast().onBackpressureBuffer();
        this.logs = this.sink.asFlux();
    }

    @KafkaListener(topics = "your_topic", groupId = "group_id")
    public void consume(LogEntry logEntry) {
        var result = sink.tryEmitNext(logEntry);
        result.orThrowWithCause(new Exception("Could not emit value"));
    }

    @Override
    public Flux<LogEntry> getLogs() {
        return logs;
    }
}
