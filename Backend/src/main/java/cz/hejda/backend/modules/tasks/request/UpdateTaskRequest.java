package cz.hejda.backend.modules.tasks.request;


import lombok.Data;

@Data
public class UpdateTaskRequest extends TaskRequest {
    Long id;
}
