package coutureconsulting.InvoicePaymentManagement.services;

public interface CamundaRestService {
    String getTasks();
    String getVariableForTask(String taskId, String variable);
    String getProcessDefinitions();
    String startProcessInstance(String variable);
    String completeTask(String taskId, String variable);
}
