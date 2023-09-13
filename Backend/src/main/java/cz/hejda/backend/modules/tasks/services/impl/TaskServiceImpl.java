package cz.hejda.backend.modules.tasks.services.impl;

import cz.hejda.backend.exceptions.EntityNotFoundException;
import cz.hejda.backend.modules.tasks.converters.TaskConverters;
import cz.hejda.backend.modules.tasks.entity.TaskEntity;
import cz.hejda.backend.modules.tasks.repository.TaskRepository;
import cz.hejda.backend.modules.tasks.request.TaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateTaskRequest;
import cz.hejda.backend.modules.tasks.response.TaskResponse;
import cz.hejda.backend.modules.tasks.services.TaskService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final TaskConverters taskConverters;

    public TaskServiceImpl(TaskRepository taskRepository, TaskConverters taskConverters) {
        this.taskRepository = taskRepository;
        this.taskConverters = taskConverters;
    }

    @Override
    public List<TaskResponse> getAllTasks() {
        log.info("Getting all tasks");
        var taskEntities = taskRepository.findAll();
        return taskEntities.stream()
                .map(taskConverters::getResponse)
                .toList();
    }

    @Override
    public TaskResponse getTaskById(Long id) {
        log.info("Getting task by id {}", id);
        var taskEntity = taskRepository.findTaskById(id);
        if(taskEntity == null) {
            throw new EntityNotFoundException(TaskEntity.class, id);
        }
        return taskConverters.getResponse(taskEntity);
    }

    @Override
    public TaskResponse createTask(TaskRequest taskRequest) {
        log.info("Creating task {}", taskRequest);
        var taskEntity = taskRepository.save(taskConverters.getEntity(taskRequest));
        return taskConverters.getResponse(taskEntity);
    }

    @Override
    public TaskResponse updateTask(UpdateTaskRequest updateTaskRequest) {
        log.info("Updating task {}", updateTaskRequest);
        log.debug("... Getting task with id {} ...", updateTaskRequest.getId());
        var taskEntity = taskRepository.findTaskById(updateTaskRequest.getId());
        if(taskEntity == null) {
            log.error("Task with id {} not found", updateTaskRequest.getId());
            throw new EntityNotFoundException(TaskEntity.class, updateTaskRequest.getId());
        }
        log.debug("... Updating task {} ...", taskEntity);
        var taskEntityUpdated = taskConverters.getEntity(updateTaskRequest, taskEntity);
        log.debug("... Saving task {} ...", taskEntityUpdated);
        var taskEntitySaved = taskRepository.save(taskEntityUpdated);
        log.debug("... Converting updatedTask to updateTaskResponse ...");
        return taskConverters.getResponse(taskEntitySaved);
    }

    @Override
    public boolean deleteTask(Long id) {
        log.info("Deleting task {}", id);
        log.debug("Getting task with id {}", id);
        var taskEntity = taskRepository.findTaskById(id);
        if(taskEntity == null) {
            log.error("Task with id {} not found", id);
            throw new EntityNotFoundException(TaskEntity.class, id);
        }
        taskRepository.delete(taskEntity);
        return true;
    }


}
