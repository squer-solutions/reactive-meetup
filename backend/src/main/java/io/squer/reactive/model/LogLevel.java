package io.squer.reactive.model;

import lombok.Getter;

import java.util.Random;

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

    private static final Random random = new Random();

    public static LogLevel randomLogLevel() {
        return LogLevel.values()[random.nextInt(LogLevel.values().length)];
    }
}
