package io.squer.reactive.adapters;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.service.LogProvider;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.kafka.receiver.KafkaReceiver;

import java.util.function.Function;

@Component
@RequiredArgsConstructor
public class KafkaLogProvider implements LogProvider {

    private final KafkaReceiver<String, LogEntry> kafkaReceiver;

    @Override
    public Flux<LogEntry> getLogs() {
        return kafkaReceiver.receiveAutoAck()
            .flatMap(Function.identity())
            .map(ConsumerRecord::value);
    }
}
