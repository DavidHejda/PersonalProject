package cz.hejda.backend.modules.tasks.request;

import lombok.Data;

import java.time.Duration;
import java.time.LocalDateTime;

@Data
public class PersonalTaskRequest extends TaskRequest {
    private LocalDateTime creationDate;
    private LocalDateTime finishDate;
    private Duration timeEstimate;
    private Duration timeSpent;

}
