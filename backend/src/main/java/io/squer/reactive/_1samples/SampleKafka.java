package io.squer.reactive._1samples;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.kafka.receiver.KafkaReceiver;
import reactor.kafka.sender.KafkaSender;
import reactor.kafka.sender.SenderRecord;

import java.time.OffsetDateTime;
import java.util.function.Function;

//@Component
@RequiredArgsConstructor
public class SampleKafka {

    private final KafkaReceiver<String, UserRegistered> kafkaReceiver;
    private final KafkaSender<String, UserCreated> kafkaSender;

    private final String topic = "topic";
    private final int partition = 0;


    private record User(String name, int age) {}
    private record UserRegistered(User user, OffsetDateTime createdAt) {}
    private record UserCreated(User user, OffsetDateTime createdAt) {}

    private SenderRecord<String, UserCreated, OffsetDateTime> createSenderRecord(UserCreated userCreated) {
        return SenderRecord.create(topic, partition, OffsetDateTime.now().toEpochSecond(), userCreated.user().name(), userCreated, OffsetDateTime.now());
    }

    private Mono<User> saveUser(User user) {
        return Mono.just(user);
    }

    public void createPipeline() {

        Flux<UserRegistered> userRegisteredEvents = kafkaReceiver.receiveAutoAck()
            .flatMap(Function.identity())
            .map(ConsumerRecord::value);

        Flux<UserCreated> userCreatedEvents = userRegisteredEvents
            .map(UserRegistered::user)
            .flatMap(this::saveUser)
            .map(user -> new UserCreated(user, OffsetDateTime.now()));

        kafkaSender.send(userCreatedEvents.map(this::createSenderRecord))
            .subscribe();
    }
}
