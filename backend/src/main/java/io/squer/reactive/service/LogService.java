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
        return Flux.merge(
            logProviders.stream()
                .map(LogProvider::getLogs)
                .toList()
        ).filter(logEntry -> filterText == null || logEntry.message().toLowerCase().contains(filterText.toLowerCase()));
    }

    public Flux<LogEntry> getLogs() {
        return Flux.merge(
            logProviders.stream()
                .map(LogProvider::getLogs)
                .toList()
        );
    }

}
