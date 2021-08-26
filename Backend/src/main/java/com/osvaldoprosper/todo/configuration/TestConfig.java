package com.osvaldoprosper.todo.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.osvaldoprosper.todo.services.DBService;

@Configuration
@Profile("test")
public class TestConfig {
	
	@Autowired
	private DBService dbservice;
	
	@Bean
	public boolean instancia() throws Exception {
		this.dbservice.instanciaBasedeDados();
		return true;
	}
}
