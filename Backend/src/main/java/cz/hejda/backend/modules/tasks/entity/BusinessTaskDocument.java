package cz.hejda.backend.modules.tasks.entity;

import cz.hejda.backend.modules.tasks.enums.TaskImportance;
import cz.hejda.backend.modules.tasks.enums.TaskStateEnum;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.Delegate;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "businessTasks")
@SuperBuilder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BusinessTaskDocument extends Task {
    @Id
    private String id;
    private Task task;
    private String author;
    private String modifiedBy;
    private String deadline;
    private TaskImportance importance;
    private String assignee;
    private TaskStateEnum state;
}
