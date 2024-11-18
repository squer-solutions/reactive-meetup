package io.squer.reactive;

import org.springframework.boot.SpringApplication;

public class TestReactivePocApplication {

	public static void main(String[] args) {
		SpringApplication.from(ReactivePocApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
