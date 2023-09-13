package cz.hejda.backend.modules.tasks.controller;

import cz.hejda.backend.modules.tasks.request.TaskRequest;
import cz.hejda.backend.modules.tasks.request.UpdateTaskRequest;
import cz.hejda.backend.modules.tasks.response.TaskResponse;
import cz.hejda.backend.modules.tasks.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TaskGraphqlController {
    @Autowired
    private final TaskService taskService;

    public TaskGraphqlController(TaskService taskService) {
        this.taskService = taskService;
    }

    @QueryMapping
    public List<TaskResponse> getAllTasks() {
        return taskService.getAllTasks();
    }

    @QueryMapping
    public TaskResponse getTaskById(@Argument Long id) {
        return taskService.getTaskById(id);
    }

    @MutationMapping
    public TaskResponse createTask(@Argument TaskRequest input) {
        // Here you would need to construct a TaskRequest from the given arguments and pass it to createTask
        return taskService.createTask(input);
    }

    @MutationMapping
    public TaskResponse updateTask(@Argument UpdateTaskRequest updateTask) {
        return taskService.updateTask(updateTask);
    }

    @MutationMapping
    public boolean deleteTask(@Argument Long id) {
        return taskService.deleteTask(id);
    }


}
