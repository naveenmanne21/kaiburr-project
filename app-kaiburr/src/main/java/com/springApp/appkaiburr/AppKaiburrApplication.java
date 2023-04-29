package com.springApp.appkaiburr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2

public class AppKaiburrApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppKaiburrApplication.class, args);
	}
	public Docket apis() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.springApp.ServerController")) // Replace with your controller package
				.build();
	}

}
