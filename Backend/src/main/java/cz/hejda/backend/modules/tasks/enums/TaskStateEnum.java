package cz.hejda.backend.modules.tasks.enums;

public enum TaskStateEnum {
    NEW("new"),
    IN_PROGRESS("in_progress"),
    DONE("done");

    private final String code;

    TaskStateEnum(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

}
