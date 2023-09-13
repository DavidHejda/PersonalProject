package cz.hejda.backend.modules.tasks.response;

import cz.hejda.backend.modules.tasks.enums.TaskImportance;
import cz.hejda.backend.modules.tasks.enums.TaskStateEnum;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TaskResponse {
    private Long id;
    private String subject;
    private String description;
    private String deadline;
    private TaskImportance importance;
    private String assignee;
    private TaskStateEnum state;
    private String notes;
}
