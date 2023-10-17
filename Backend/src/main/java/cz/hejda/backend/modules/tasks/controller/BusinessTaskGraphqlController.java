package cz.hejda.backend.modules.tasks.controller;

import cz.hejda.backend.modules.tasks.request.BusinessTaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateBusinessTaskRequest;
import cz.hejda.backend.modules.tasks.response.BusinessTaskResponse;
import cz.hejda.backend.modules.tasks.services.BusinessTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class BusinessTaskGraphqlController {
    @Autowired
    private final BusinessTaskService businessTaskService;

    public BusinessTaskGraphqlController(BusinessTaskService businessTaskService) {
        this.businessTaskService = businessTaskService;
    }

    //The name of the methods is the name of the query/mutation in the graphql schema - it has to match. Otherwise, it is not working.
    @QueryMapping
    public List<BusinessTaskResponse> getAllBusinessTasks() {
        return businessTaskService.getAllTasks();
    }

    @QueryMapping
    public BusinessTaskResponse getBusinessTaskById(@Argument String id) {
        return businessTaskService.getTaskById(id);
    }

    @MutationMapping
    public BusinessTaskResponse createBusinessTask(@Argument BusinessTaskRequest input) {
        // Here you would need to construct a TaskRequest from the given arguments and pass it to createTask
        return businessTaskService.createTask(input);
    }

    @MutationMapping
    public BusinessTaskResponse updateBusinessTask(@Argument UpdateBusinessTaskRequest updateTask) {
        return businessTaskService.updateTask(updateTask);
    }

    @MutationMapping
    public boolean deleteBusinessTask(@Argument String id) {
        return businessTaskService.deleteTask(id);
    }


}
