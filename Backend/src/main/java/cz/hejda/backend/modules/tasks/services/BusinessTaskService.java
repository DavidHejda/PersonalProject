package cz.hejda.backend.modules.tasks.services;

import cz.hejda.backend.modules.tasks.request.BusinessTaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateBusinessTaskRequest;
import cz.hejda.backend.modules.tasks.response.BusinessTaskResponse;

import java.util.List;

public interface BusinessTaskService {

    List<BusinessTaskResponse> getAllTasks();

    BusinessTaskResponse getTaskById(String id);

    BusinessTaskResponse createTask(BusinessTaskRequest businessTaskRequest);

    BusinessTaskResponse updateTask(UpdateBusinessTaskRequest updateBusinessTaskRequest);

    boolean deleteTask(String id);
}
