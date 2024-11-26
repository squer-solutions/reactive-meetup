package io.squer.reactive;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class MonoAndFluxTest {

    @Test
    void testBasicMono() {
        Mono<String> greeting$ = Mono.just("Hello from SQUER!");

        greeting$.subscribe(
                value -> System.out.println("Received: " + value),
                error -> System.out.println("Error: " + error),
                () -> System.out.println("Completed!")
        );
    }

    @Test
    void testBasicFlux() {
        Flux<String> names$ = Flux.just("Nelli", "Emmy", "Loofah", "Neo");

        names$.subscribe(
                value -> System.out.println("Received: " + value),
                error -> System.out.println("Error: " + error),
                () -> System.out.println("Completed!")
        );
    }
}
