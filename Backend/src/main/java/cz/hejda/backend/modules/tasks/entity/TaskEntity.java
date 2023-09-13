package cz.hejda.backend.modules.tasks.entity;

import cz.hejda.backend.modules.tasks.enums.TaskImportance;
import cz.hejda.backend.modules.tasks.enums.TaskStateEnum;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "tasks")
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String author;
    private String modifiedBy;
    private String subject;
    private String description;
    private String deadline;
    @Enumerated(EnumType.STRING)
    private TaskImportance importance;
    private String assignee;
    @Enumerated(EnumType.STRING)
    private TaskStateEnum state;
    private String notes;
}
