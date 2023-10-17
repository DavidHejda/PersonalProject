package cz.hejda.backend.modules.tasks.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import java.time.Duration;
import java.time.LocalDateTime;

@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class PersonalTaskResponse extends TaskResponse {
    private LocalDateTime creationDate;
    private LocalDateTime finishDate;
    private Duration timeEstimate;
    private Duration timeSpent;
}
