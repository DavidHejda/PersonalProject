package cz.hejda.backend.modules.tasks.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Duration;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Document(collection = "personalTasks")
public class PersonalTaskDocument {
    private LocalDateTime creationDate;
    private LocalDateTime finishDate;
    private Duration timeEstimate;
    private Duration timeSpent;
}
