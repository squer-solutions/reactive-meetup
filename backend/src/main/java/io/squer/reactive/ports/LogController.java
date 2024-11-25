package io.squer.reactive.ports;

import io.squer.reactive.model.FilterParams;
import io.squer.reactive.model.LogEntry;
import io.squer.reactive.service.LogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class LogController {

    private final LogService logService;

    @CrossOrigin("*")
    @GetMapping()
    public Flux<LogEntry> getLogs(@RequestParam(required = false) String message) {
        return logService.getLogs(message);
    }

}
