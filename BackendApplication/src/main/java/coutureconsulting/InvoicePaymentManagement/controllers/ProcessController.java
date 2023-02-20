package coutureconsulting.InvoicePaymentManagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
