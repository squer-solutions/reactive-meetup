package io.squer.reactive.service;

import io.squer.reactive.model.LogEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import reactor.core.publisher.Flux;

@Service
@RequiredArgsConstructor
public class LogService {

    public Flux<LogEntry> getLogs(String filterText) {
        throw new UnsupportedOperationException("Not implemented");
    }

    public Flux<LogEntry> getLogs() {
        throw new UnsupportedOperationException("Not implemented");
    }

}
