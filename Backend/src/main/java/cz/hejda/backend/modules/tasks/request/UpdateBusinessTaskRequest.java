package cz.hejda.backend.modules.tasks.request;


import lombok.Data;

@Data
public class UpdateBusinessTaskRequest extends BusinessTaskRequest {
    String id;
}
