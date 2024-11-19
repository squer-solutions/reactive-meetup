package io.squer.reactive.model;

import lombok.Getter;

public enum LogLevel {
    TRACE("TRACE"),
    DEBUG("DEBUG"),
    INFO("INFO"),
    WARN("WARN"),
    ERROR("ERROR");

    @Getter
    private final String levelName;

    LogLevel(String levelName) {
        this.levelName = levelName;
    }
}
