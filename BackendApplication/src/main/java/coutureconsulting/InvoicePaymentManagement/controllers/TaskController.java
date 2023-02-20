package coutureconsulting.InvoicePaymentManagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TaskController {
    @Autowired
    private Environment env;
    @Autowired
    private RestTemplate RestTemplate;

    @GetMapping("/tasks")
    public String getTasks(){
        return this.RestTemplate.getForObject(env.getProperty("camundaRestEngineUrl") + "/task?sortBy=created&sortOrder=desc&maxResults=100", String.class);
    }
}
