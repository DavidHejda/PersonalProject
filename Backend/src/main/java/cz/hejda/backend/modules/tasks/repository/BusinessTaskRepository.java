package cz.hejda.backend.modules.tasks.repository;

import cz.hejda.backend.modules.tasks.entity.BusinessTaskDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BusinessTaskRepository extends MongoRepository<BusinessTaskDocument, String> {

    BusinessTaskDocument findTaskById(String id);
}
