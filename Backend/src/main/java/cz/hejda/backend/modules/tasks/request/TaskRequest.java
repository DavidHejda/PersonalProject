package cz.hejda.backend.modules.tasks.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class TaskRequest {
    private String subject;
    private String description;
    private String notes;
}
