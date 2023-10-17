package cz.hejda.backend.modules.tasks.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class BusinessTaskResponse extends TaskResponse {
    private String deadline;
    private String importance;
    private String assignee;
    private String state;

}
