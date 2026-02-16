package org.example.todoapp2.service;

import lombok.RequiredArgsConstructor;
import org.example.todoapp2.model.model;
import org.example.todoapp2.repository.repository;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor

@Service
public class service {
    private final repository todoRepository;

    public model createTodo(model todo) {
        return todoRepository.save(todo);
    }

    public List<model> getAllTodos() {
        return todoRepository.findAll();
    }

    public void deleteTodo(String id) {
        todoRepository.deleteById(id);
    }


}
