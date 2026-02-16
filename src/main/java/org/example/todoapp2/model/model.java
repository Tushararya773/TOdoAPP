package org.example.todoapp2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection="todo")
public class model {

    @Id
    private String id;
    private String title;
    private String description;
    private boolean completed;
}
