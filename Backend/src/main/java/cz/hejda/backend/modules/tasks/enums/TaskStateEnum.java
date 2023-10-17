package cz.hejda.backend.modules.tasks.enums;

public enum TaskStateEnum {
    NEW("New"),
    IN_PROGRESS("In progress"),
    DONE("Done");

    private final String code;

    TaskStateEnum(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

}
