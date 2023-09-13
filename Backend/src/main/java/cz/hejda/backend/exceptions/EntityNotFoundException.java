package cz.hejda.backend.exceptions;

import lombok.Getter;

@Getter
public class EntityNotFoundException extends RuntimeException {
    private final Class<?> clazz;
    private final Object criteria;

    public EntityNotFoundException(Class<?> clazz, Object criteria) {
        super(String.format("%s not found with criteria: %s", clazz.getSimpleName(), criteria));
        this.clazz = clazz;
        this.criteria = criteria;
    }

}
