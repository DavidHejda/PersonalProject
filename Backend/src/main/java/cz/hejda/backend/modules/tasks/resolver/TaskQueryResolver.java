//package cz.hejda.backend.modules.tasks.resolver;
//
//
//
//import cz.hejda.backend.modules.tasks.response.TaskResponse;
//import cz.hejda.backend.modules.tasks.services.TaskService;
//import graphql.kickstart.tools.GraphQLQueryResolver;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//
//@Component
//public class TaskQueryResolver implements GraphQLQueryResolver {
//    @Autowired
//    private TaskService taskService;
//
//    public List<TaskResponse> getAllTasks() {
//        return taskService.getAllTasks();
//    }
//
//    public TaskResponse getTaskById(Long id) {
//        return taskService.getTaskById(id);
//    }
//}
