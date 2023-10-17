package cz.hejda.backend.modules.tasks.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TaskResponse {
    private String id;
    private String subject;
    private String description;
    private String notes;
}
