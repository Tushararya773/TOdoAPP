package org.example.todoapp2.controller;

import org.example.todoapp2.model.model;
import org.example.todoapp2.service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api/todos")
public class controller {

    @Autowired
    private service todoService;

    // Get all
    @GetMapping
    public List<model> getAllTodos() {
        return todoService.getAllTodos();
    }

    // Get by id
    @GetMapping("/{id}")
    public model getTodo(@PathVariable String id) {
        return todoService.getTodoById(id);
    }

    // Create
    @PostMapping
    public model createTodo(@RequestBody model todo) {
        return todoService.createTodo(todo);
    }

    // Update
    @PutMapping("/{id}")
    public model updateTodo(@PathVariable String id,
                            @RequestBody model todo) {
        return todoService.updateTodo(id, todo);
    }

    // Delete
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable String id) {
        todoService.deleteTodo(id);
    }
}