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

@Slf4j
@Service
public class LogProducer {

    private static final String TOPIC = "your_topic";

    public LogProducer(KafkaSender<String, LogEntry> kafkaSender) {
        var outbound = Flux.interval(Duration.ofSeconds(1))
            .map(__ -> new LogEntry(
                    LogLevel.DEBUG,
                    OffsetDateTime.now(),
                    "Test from reactive Kafka")
            )
            .map(logEntry -> SenderRecord.create(
                    TOPIC,
                    0,
                    logEntry.timestamp().toEpochSecond(),
                    logEntry.timestamp().toString(),
                    logEntry, logEntry.timestamp()
            ));
        
        kafkaSender.send(outbound)
            .doOnError(e -> log.error("Send failed", e))
            .doOnNext(r -> log.info("Message sent: " + r.recordMetadata()))
            .subscribe();
    }

}
