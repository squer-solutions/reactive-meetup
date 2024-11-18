package io.squer.reactive_poc;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
@SpringBootTest
class ReactivePocApplicationTests {

	@Test
	void contextLoads() {
	}

}
