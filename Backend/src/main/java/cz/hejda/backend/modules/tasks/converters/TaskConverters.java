package cz.hejda.backend.modules.tasks.converters;

import cz.hejda.backend.modules.tasks.entity.TaskEntity;
import cz.hejda.backend.modules.tasks.request.TaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateTaskRequest;
import cz.hejda.backend.modules.tasks.response.TaskResponse;
import org.springframework.stereotype.Component;

@Component
public class TaskConverters {
    public TaskEntity getEntity(TaskRequest taskRequest) {
        return TaskEntity.builder()
                .author("David Hejda")
                .subject(taskRequest.getSubject())
                .description(taskRequest.getDescription())
                .deadline(taskRequest.getDeadline())
                .importance(taskRequest.getImportance())
                .assignee(taskRequest.getAssignee())
                .state(taskRequest.getState())
                .notes(taskRequest.getNotes())
                .build();
    }

    public TaskEntity getEntity(UpdateTaskRequest updateTaskRequest, TaskEntity oldTask) {
        return oldTask.toBuilder()
                .id(oldTask.getId())
                .author(oldTask.getAuthor())
                .modifiedBy("David Hejda")
                .subject(updateTaskRequest.getSubject() != null ? updateTaskRequest.getSubject() : oldTask.getSubject())
                .description(updateTaskRequest.getDescription() != null ? updateTaskRequest.getDescription() : oldTask.getDescription())
                .deadline(updateTaskRequest.getDeadline() != null ? updateTaskRequest.getDeadline() : oldTask.getDeadline())
                .importance(updateTaskRequest.getImportance() != null ? updateTaskRequest.getImportance() : oldTask.getImportance())
                .assignee(updateTaskRequest.getAssignee() != null ? updateTaskRequest.getAssignee() : oldTask.getAssignee())
                .state(updateTaskRequest.getState() != null ? updateTaskRequest.getState() : oldTask.getState())
                .notes(updateTaskRequest.getNotes() != null ? updateTaskRequest.getNotes() : oldTask.getNotes())
                .build();
    }

    public TaskResponse getResponse(TaskEntity taskEntity) {
        return TaskResponse.builder()
                .id(taskEntity.getId())
                .subject(taskEntity.getSubject())
                .description(taskEntity.getDescription())
                .deadline(taskEntity.getDeadline())
                .importance(taskEntity.getImportance())
                .assignee(taskEntity.getAssignee())
                .state(taskEntity.getState())
                .notes(taskEntity.getNotes())
                .build();
    }
}
