package org.example.todoapp2.repository;

import org.example.todoapp2.model.model;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface repository extends MongoRepository<model ,String> {
}
