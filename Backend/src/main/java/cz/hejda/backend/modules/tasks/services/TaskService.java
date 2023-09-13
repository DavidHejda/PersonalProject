package cz.hejda.backend.modules.tasks.services;

import cz.hejda.backend.modules.tasks.request.TaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateTaskRequest;
import cz.hejda.backend.modules.tasks.response.TaskResponse;
import org.springframework.scheduling.config.Task;

import java.util.List;

public interface TaskService {

    List<TaskResponse> getAllTasks();

    TaskResponse getTaskById(Long id);

    TaskResponse createTask(TaskRequest taskRequest);

    TaskResponse updateTask(UpdateTaskRequest updateTaskRequest);

    boolean deleteTask(Long id);
}
