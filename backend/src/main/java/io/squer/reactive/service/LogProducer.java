package io.squer.reactive.service;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.model.LogLevel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.kafka.sender.KafkaSender;
import reactor.kafka.sender.SenderRecord;

import java.time.Duration;
import java.time.OffsetDateTime;

import static io.squer.reactive.util.LogStatementProvider.getRandomLogStatement;
import static java.lang.String.format;

@Slf4j
@Service
public class LogProducer {

    private static final String TOPIC = "your_topic";

    public LogProducer(KafkaSender<String, LogEntry> kafkaSender) {
        var outbound = Flux.interval(Duration.ofSeconds(1))
            .map(__ -> new LogEntry(
                LogLevel.randomLogLevel(),
                OffsetDateTime.now(),
                format("Kafka message: %s", getRandomLogStatement())
            )).map(this::createSenderRecord);
        kafkaSender.send(outbound)
            .doOnError(e -> log.error("Send failed", e))
            .doOnNext(r -> log.info("Message sent: " + r.recordMetadata()))
            .subscribe();
    }

    private SenderRecord<String, LogEntry, OffsetDateTime> createSenderRecord(LogEntry logEntry) {
        return SenderRecord.create(
            TOPIC,
            0,
            logEntry.timestamp().toEpochSecond(),
            logEntry.timestamp().toString(),
            logEntry,
            logEntry.timestamp()
        );
    }

}
