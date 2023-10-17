package cz.hejda.backend.modules.tasks.converters;

import cz.hejda.backend.modules.tasks.entity.BusinessTaskDocument;
import cz.hejda.backend.modules.tasks.request.BusinessTaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateBusinessTaskRequest;
import cz.hejda.backend.modules.tasks.response.BusinessTaskResponse;
import org.springframework.stereotype.Component;

@Component
public class BusinessTaskConverters {
    public BusinessTaskDocument getDocument(BusinessTaskRequest businessTaskRequest) {
        return BusinessTaskDocument.builder()
                .author("David Hejda")
                .subject(businessTaskRequest.getSubject())
                .description(businessTaskRequest.getDescription())
                .deadline(businessTaskRequest.getDeadline())
                .importance(businessTaskRequest.getImportance())
                .assignee(businessTaskRequest.getAssignee())
                .state(businessTaskRequest.getState())
                .notes(businessTaskRequest.getNotes())
                .build();
    }

    public BusinessTaskDocument getDocument(UpdateBusinessTaskRequest updateBusinessTaskRequest, BusinessTaskDocument oldTask) {
        return oldTask.toBuilder()
                .id(oldTask.getId())
                .author(oldTask.getAuthor())
                .modifiedBy("David Hejda")
                .subject(updateBusinessTaskRequest.getSubject() != null ? updateBusinessTaskRequest.getSubject() : oldTask.getSubject())
                .description(updateBusinessTaskRequest.getDescription() != null ? updateBusinessTaskRequest.getDescription() : oldTask.getDescription())
                .deadline(updateBusinessTaskRequest.getDeadline() != null ? updateBusinessTaskRequest.getDeadline() : oldTask.getDeadline())
                .importance(updateBusinessTaskRequest.getImportance() != null ? updateBusinessTaskRequest.getImportance() : oldTask.getImportance())
                .assignee(updateBusinessTaskRequest.getAssignee() != null ? updateBusinessTaskRequest.getAssignee() : oldTask.getAssignee())
                .state(updateBusinessTaskRequest.getState() != null ? updateBusinessTaskRequest.getState() : oldTask.getState())
                .notes(updateBusinessTaskRequest.getNotes() != null ? updateBusinessTaskRequest.getNotes() : oldTask.getNotes())
                .build();
    }

    public BusinessTaskResponse getResponse(BusinessTaskDocument businessTaskDocument) {
        return BusinessTaskResponse.builder()
                .id(businessTaskDocument.getId())
                .subject(businessTaskDocument.getSubject())
                .description(businessTaskDocument.getDescription())
                .deadline(businessTaskDocument.getDeadline())
                .importance(businessTaskDocument.getImportance().getCode())
                .assignee(businessTaskDocument.getAssignee())
                .state(businessTaskDocument.getState().getCode())
                .notes(businessTaskDocument.getNotes())
                .build();
    }
}
