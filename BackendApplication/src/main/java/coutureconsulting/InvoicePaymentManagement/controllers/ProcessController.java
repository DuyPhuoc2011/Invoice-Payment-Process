package coutureconsulting.InvoicePaymentManagement.controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
public class ProcessController {
    @Autowired
    private RestTemplate RestTemplate;
    @Autowired
    private Environment env;

    @GetMapping("/processDefinitions")
    String getProcessDefinitions(){
        return this.RestTemplate.getForObject(env.getProperty("camundaRestEngineUrl") + "/process-definition?latestVersion=true", String.class);
    }

    @PostMapping("/startProcessInstance")
    String startProcessInstance(@RequestBody String variable){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(variable, headers);
        return this.RestTemplate.postForObject(env.getProperty("camundaRestEngineUrl") + "/process-definition/key/"+ env.getProperty("processDefinitionKey") +"/submit-form", request ,String.class);
    }
}
