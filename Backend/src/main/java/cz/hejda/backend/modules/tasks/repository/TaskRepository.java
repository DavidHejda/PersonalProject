package cz.hejda.backend.modules.tasks.repository;

import cz.hejda.backend.modules.tasks.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

    TaskEntity findTaskById(Long id);
}
