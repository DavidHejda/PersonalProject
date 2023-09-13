package cz.hejda.backend.modules.tasks.controller;

import cz.hejda.backend.modules.tasks.request.TaskRequest;
import cz.hejda.backend.modules.tasks.response.TaskResponse;

import cz.hejda.backend.modules.tasks.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class TaskController {

    @Autowired
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/getAllTasks")
    public List<TaskResponse> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/getTaskById")
    public TaskResponse getTaskById(Long id) {
        return taskService.getTaskById(id);
    }

    @PostMapping("/createTask")
    public TaskResponse createTask(@RequestBody TaskRequest task) {
        return taskService.createTask(task);
    }

}
