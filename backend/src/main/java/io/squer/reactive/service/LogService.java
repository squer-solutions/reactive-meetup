package io.squer.reactive.service;

import io.squer.reactive.model.LogEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LogService {

    private final List<LogProvider> logProviders;

    public Flux<LogEntry> getLogs(String filterText) {
        List<Flux<LogEntry>> logStreamList = logProviders.stream()
            .map(LogProvider::getLogs)
            .toList();
        return Flux.merge(logStreamList).filter(logEntry ->
            !StringUtils.hasLength(filterText) ||
            logEntry.message().toLowerCase().contains(filterText.toLowerCase())
        );
    }

}
