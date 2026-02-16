package org.example.todoapp2.service;

import org.example.todoapp2.model.model;
import org.example.todoapp2.repository.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class service {

    @Autowired
    private repository todoRepository;

    // Get all todos
    public List<model> getAllTodos() {
        return todoRepository.findAll();
    }

    // Get single todo
    public model getTodoById(String id) {
        return todoRepository.findById(id).orElse(null);
    }

    // Create todo
    public model createTodo(model todo) {
        return todoRepository.save(todo);
    }

    // Update todo
    public model updateTodo(String id, model updatedTodo) {
        model existing = todoRepository.findById(id).orElse(null);

        if (existing != null) {
            existing.setTitle(updatedTodo.getTitle());
            existing.setDescription(updatedTodo.getDescription());
            existing.setCompleted(updatedTodo.isCompleted());
            return todoRepository.save(existing);
        }
        return null;
    }

    // Delete todo
    public void deleteTodo(String id) {
        todoRepository.deleteById(id);
    }
}