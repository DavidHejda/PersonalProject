package cz.hejda.backend.modules.tasks.controller;

import cz.hejda.backend.modules.tasks.request.BusinessTaskRequest;
import cz.hejda.backend.modules.tasks.response.BusinessTaskResponse;

import cz.hejda.backend.modules.tasks.services.BusinessTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class BusinessTaskRestController {
    @Autowired
    private final BusinessTaskService businessTaskService;

    public BusinessTaskRestController(BusinessTaskService businessTaskService) {
        this.businessTaskService = businessTaskService;
    }

    @GetMapping("/getAllBusinessTasks")
    public List<BusinessTaskResponse> getAllTasks() {
        return businessTaskService.getAllTasks();
    }

    @GetMapping("/getBusinessTaskById")
    public BusinessTaskResponse getTaskById(String id) {
        return businessTaskService.getTaskById(id);
    }

    @PostMapping("/createBusinessTask")
    public BusinessTaskResponse createTask(@RequestBody BusinessTaskRequest task) {
        return businessTaskService.createTask(task);
    }

}
