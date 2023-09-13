package cz.hejda.backend.modules.tasks.request;

import cz.hejda.backend.modules.tasks.enums.TaskImportance;
import cz.hejda.backend.modules.tasks.enums.TaskStateEnum;
import lombok.Data;

@Data
public class TaskRequest {

    private String subject;
    private String description;
    private String deadline;
    private TaskImportance importance;
    private String assignee;
    private TaskStateEnum state;
    private String notes;
}
