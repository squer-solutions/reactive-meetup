package io.squer.reactive;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

public class BasicReactiveTest {
    @Test
    void testBasicReactive() {
        Sinks.Many<Integer> numberSink = Sinks.many().multicast().onBackpressureBuffer();
        Flux<Integer> numberFlux = numberSink.asFlux();

        numberFlux
                .map(num -> num * num)
                .subscribe(result -> System.out.println("Result: " + result));

        numberSink.tryEmitNext(2);
        numberSink.tryEmitNext(4);
        numberSink.tryEmitNext(5);
    }
}
