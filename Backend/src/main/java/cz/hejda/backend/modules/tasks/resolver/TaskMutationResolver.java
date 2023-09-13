//package cz.hejda.backend.modules.tasks.resolver;
//
//
//
//import cz.hejda.backend.modules.tasks.enums.TaskImportance;
//import cz.hejda.backend.modules.tasks.enums.TaskStateEnum;
//import cz.hejda.backend.modules.tasks.request.TaskRequest;
//import cz.hejda.backend.modules.tasks.response.TaskResponse;
//import cz.hejda.backend.modules.tasks.services.TaskService;
//import graphql.kickstart.tools.GraphQLMutationResolver;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//
//@Component
//public class TaskMutationResolver implements GraphQLMutationResolver {
//    @Autowired
//    private TaskService taskService;
//
//    public TaskResponse createTask(String subject, String description, String deadline, TaskImportance importance, String assignee, TaskStateEnum state, String notes) {
//        TaskRequest taskRequest = new TaskRequest();
//        taskRequest.setSubject(subject);
//        taskRequest.setDescription(description);
//        taskRequest.setDeadline(deadline);
//        taskRequest.setImportance(importance);
//        taskRequest.setAssignee(assignee);
//        taskRequest.setState(state);
//        taskRequest.setNotes(notes);
//        return taskService.createTask(taskRequest);
//    }
//}
