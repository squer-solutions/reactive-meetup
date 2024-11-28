package io.squer.reactive.ports;

import io.squer.reactive.model.LogEntry;
import io.squer.reactive.service.LogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class LogController {

    private final LogService logService;

    @CrossOrigin("*")
    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<LogEntry> getLogs(@RequestParam(required = false) String message) {
        return logService.getLogs(message);
    }

}
