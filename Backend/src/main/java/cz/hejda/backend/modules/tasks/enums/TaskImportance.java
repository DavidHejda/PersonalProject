package cz.hejda.backend.modules.tasks.enums;

public enum TaskImportance {
    LOW("low"),
    MEDIUM("medium"),
    HIGH("high");

    private final String code;

    TaskImportance(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
