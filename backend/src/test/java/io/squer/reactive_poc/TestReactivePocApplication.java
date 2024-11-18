package io.squer.reactive_poc;

import org.springframework.boot.SpringApplication;

public class TestReactivePocApplication {

	public static void main(String[] args) {
		SpringApplication.from(ReactivePocApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
