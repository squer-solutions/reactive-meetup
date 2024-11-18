package io.squer.reactive_poc.service;

import io.squer.reactive_poc.model.LogEntry;
import reactor.core.publisher.Flux;

public interface LogProvider {

    Flux<LogEntry> getLogs();

}
