package io.squer.reactive.service;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.model.LogLevel;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.OffsetDateTime;

@Service
public class LogProducer {

    private static final String TOPIC = "your_topic";

    public LogProducer(KafkaTemplate<String, LogEntry> kafkaTemplate) {
        Flux.interval(Duration.ofSeconds(1))
            .map(__ -> new LogEntry(LogLevel.DEBUG, OffsetDateTime.now(), "Test from Kafka"))
            .subscribe(entry -> kafkaTemplate.send(TOPIC, entry));
    }

}
