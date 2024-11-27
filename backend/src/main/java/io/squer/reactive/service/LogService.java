package io.squer.reactive.service;

import io.squer.reactive.model.LogEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LogService {

    private final List<LogProvider> logProviders;

    public Flux<LogEntry> getLogs(String filterText) {
        throw new UnsupportedOperationException("Not implemented");
    }

    public Flux<LogEntry> getLogs() {
        throw new UnsupportedOperationException("Not implemented");
    }

}
