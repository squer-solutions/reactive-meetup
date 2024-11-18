package io.squer.reactive.service;

import io.squer.reactive.model.LogEntry;
import reactor.core.publisher.Flux;

public interface LogProvider {

    Flux<LogEntry> getLogs();

}
