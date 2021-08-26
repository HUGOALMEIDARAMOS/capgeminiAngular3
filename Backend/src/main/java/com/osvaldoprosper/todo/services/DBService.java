package com.osvaldoprosper.todo.services;

import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.osvaldoprosper.todo.domain.Todo;
import com.osvaldoprosper.todo.repositories.TodoRepository;


@Service
public class DBService {
	
	@Autowired
	private TodoRepository todoRepository;
	
	
	public  void instanciaBasedeDados() throws Exception {
		
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyy");
		
		Todo t1 = new Todo(null, "Estudar", "Estudar Angular 12 e Spring Boot 2", sdf.parse("25/03/2022"), false);
		
		Todo t2 = new Todo(null, "Trabalhar", "trabalhar amanhã", sdf.parse("20/03/2022"), false);
		
		Todo t3 = new Todo(null, "Médico", "Ir ao cardiologista", sdf.parse("25/12/2021"), true);
		
		Todo t4 = new Todo(null, "Malhar", "malhar pela manhã", sdf.parse("23/11/2021"), true);
		
		Todo t5 = new Todo(null, "Remedio", "Tomar vitamina", sdf.parse("23/08/2021"), true);

		todoRepository.saveAll(Arrays.asList(t1, t2, t3, t4, t5));
	}
	
}
