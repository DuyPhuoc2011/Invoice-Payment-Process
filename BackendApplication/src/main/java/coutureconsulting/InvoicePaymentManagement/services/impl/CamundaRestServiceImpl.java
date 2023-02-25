package coutureconsulting.InvoicePaymentManagement.services.impl;

import coutureconsulting.InvoicePaymentManagement.services.CamundaRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CamundaRestServiceImpl implements CamundaRestService {
    @Autowired
    private Environment env;
    @Autowired
    private RestTemplate RestTemplate;

    @Override
    public String getTasks() {
        return this.RestTemplate.getForObject(env.getProperty("camundaRestEngineUrl") + "/task?sortBy=created&sortOrder=desc&maxResults=100", String.class);
    }

    @Override
    public String getVariableForTask(String taskId, String variable) {
        return this.RestTemplate.getForObject(env.getProperty("camundaRestEngineUrl") + "/task/" + taskId + "/form-variables?variableNames=" + variable, String.class);
    }

    @Override
    public String getProcessDefinitions() {
        return this.RestTemplate.getForObject(env.getProperty("camundaRestEngineUrl") + "/process-definition?latestVersion=true", String.class);
    }

    @Override
    public String startProcessInstance(String variable) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(variable, headers);
        return this.RestTemplate.postForObject(env.getProperty("camundaRestEngineUrl") + "/process-definition/key/"+ env.getProperty("processDefinitionKey") +"/submit-form",
                request ,
                String.class);
    }

    @Override
    public String completeTask(String taskId, String variable) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(variable, headers);
        return this.RestTemplate.postForObject(env.getProperty("camundaRestEngineUrl") + "/task/" + taskId + "/complete",
                request ,
                String.class);
    }
}
