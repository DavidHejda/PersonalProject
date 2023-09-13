package cz.hejda.backend.modules.tasks.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tasks")
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String author;
    private String subject;
    private String description;
    private String deadline;
    private String importance;
    private String assignee;
    private String notes;
}
