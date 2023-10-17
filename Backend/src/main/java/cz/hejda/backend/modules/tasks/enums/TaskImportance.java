package cz.hejda.backend.modules.tasks.enums;

public enum TaskImportance {
    LOW("Low"),
    MEDIUM("Medium"),
    HIGH("High");

    private final String code;

    TaskImportance(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
