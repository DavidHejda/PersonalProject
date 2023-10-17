package cz.hejda.backend.modules.tasks.request;

import cz.hejda.backend.modules.tasks.enums.TaskImportance;
import cz.hejda.backend.modules.tasks.enums.TaskStateEnum;
import lombok.Data;

@Data
public class BusinessTaskRequest extends TaskRequest {
    private String deadline;
    private TaskImportance importance;
    private String assignee;
    private TaskStateEnum state;

}
