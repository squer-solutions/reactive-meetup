package io.squer.reactive_poc.service;

import io.squer.reactive_poc.model.LogEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LogService {

    private final List<LogProvider> logProviders;

    public Flux<LogEntry> getLogs() {
        return Flux.merge(
            logProviders.stream()
                .map(LogProvider::getLogs)
                .toList()
        );
    }

}
