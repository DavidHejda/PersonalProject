package cz.hejda.backend.modules.tasks.request;

import lombok.Data;

@Data
public class UpdatePersonalTaskRequest extends PersonalTaskRequest{
    private String id;
}
