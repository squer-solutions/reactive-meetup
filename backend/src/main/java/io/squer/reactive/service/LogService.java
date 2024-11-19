package io.squer.reactive.service;

import io.squer.reactive.model.FilterParams;
import io.squer.reactive.model.LogEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LogService {

    private final List<LogProvider> logProviders;

    public Flux<LogEntry> getLogs(FilterParams filterParams) {
        return Flux.merge(
            logProviders.stream()
                .map(provider -> provider.getLogs()
                        .filter(log -> {
                            final var statusCheck = checkStatusFilter(filterParams.status(), log);
                            final var messageCheck = checkMessageFilter(filterParams.message(), log);
                            return statusCheck && messageCheck;
                        })
                )
                .toList()
        );
    }

    private boolean checkStatusFilter(String status, LogEntry log) {
        return status == null || status.equals(log.level().name());
    }

    private boolean checkMessageFilter(String message, LogEntry log) {
        return message == null || log.message().toLowerCase().contains(message.toLowerCase());
    }

}
