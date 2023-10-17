package cz.hejda.backend.modules.tasks.services.impl;

import cz.hejda.backend.exceptions.EntityNotFoundException;
import cz.hejda.backend.modules.tasks.converters.BusinessTaskConverters;
import cz.hejda.backend.modules.tasks.entity.BusinessTaskDocument;
import cz.hejda.backend.modules.tasks.repository.BusinessTaskRepository;
import cz.hejda.backend.modules.tasks.request.BusinessTaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateBusinessTaskRequest;
import cz.hejda.backend.modules.tasks.response.BusinessTaskResponse;
import cz.hejda.backend.modules.tasks.services.BusinessTaskService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class BusinessTaskServiceImpl implements BusinessTaskService {
    private final BusinessTaskRepository businessTaskRepository;
    private final BusinessTaskConverters businessTaskConverters;

    public BusinessTaskServiceImpl(BusinessTaskRepository businessTaskRepository, BusinessTaskConverters businessTaskConverters) {
        this.businessTaskRepository = businessTaskRepository;
        this.businessTaskConverters = businessTaskConverters;
    }

    @Override
    public List<BusinessTaskResponse> getAllTasks() {
        log.info("Getting all tasks");
        var taskEntities = businessTaskRepository.findAll();
        return taskEntities.stream()
                .map(businessTaskConverters::getResponse)
                .toList();
    }

    @Override
    public BusinessTaskResponse getTaskById(String id) {
        log.info("Getting task by id {}", id);
        var taskEntity = businessTaskRepository.findTaskById(id);
        if(taskEntity == null) {
            throw new EntityNotFoundException(BusinessTaskDocument.class, id);
        }
        return businessTaskConverters.getResponse(taskEntity);
    }

    @Override
    public BusinessTaskResponse createTask(BusinessTaskRequest businessTaskRequest) {
        log.info("Creating task {}", businessTaskRequest);
        var taskEntity = businessTaskRepository.save(businessTaskConverters.getDocument(businessTaskRequest));
        return businessTaskConverters.getResponse(taskEntity);
    }

    @Override
    public BusinessTaskResponse updateTask(UpdateBusinessTaskRequest updateBusinessTaskRequest) {
        log.info("Updating task {}", updateBusinessTaskRequest);
        log.debug("... Getting task with id {} ...", updateBusinessTaskRequest.getId());
        var taskEntity = businessTaskRepository.findTaskById(updateBusinessTaskRequest.getId());
        if(taskEntity == null) {
            log.error("Task with id {} not found", updateBusinessTaskRequest.getId());
            throw new EntityNotFoundException(BusinessTaskDocument.class, updateBusinessTaskRequest.getId());
        }
        log.debug("... Updating task {} ...", taskEntity);
        var taskEntityUpdated = businessTaskConverters.getDocument(updateBusinessTaskRequest, taskEntity);
        log.debug("... Saving task {} ...", taskEntityUpdated);
        var taskEntitySaved = businessTaskRepository.save(taskEntityUpdated);
        log.debug("... Converting updatedTask to updateTaskResponse ...");
        return businessTaskConverters.getResponse(taskEntitySaved);
    }

    @Override
    public boolean deleteTask(String id) {
        log.info("Deleting task {}", id);
        log.debug("Getting task with id {}", id);
        var taskEntity = businessTaskRepository.findTaskById(id);
        if(taskEntity == null) {
            log.error("Task with id {} not found", id);
            throw new EntityNotFoundException(BusinessTaskDocument.class, id);
        }
        businessTaskRepository.delete(taskEntity);
        return true;
    }


}
