package io.squer.reactive.adapters;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.service.LogProvider;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.kafka.receiver.KafkaReceiver;

import java.util.function.Function;

@Component
public class KafkaLogProvider implements LogProvider {

    private final Flux<LogEntry> logs;

    public KafkaLogProvider(KafkaReceiver<String, LogEntry> kafkaReceiver) {
        logs = kafkaReceiver.receiveAutoAck()
            .flatMap(Function.identity())
            .map(ConsumerRecord::value)
            .share();
    }

    @Override
    public Flux<LogEntry> getLogs() {
        return logs;
    }
}
