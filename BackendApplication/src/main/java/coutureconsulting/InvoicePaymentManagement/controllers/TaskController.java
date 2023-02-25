package coutureconsulting.InvoicePaymentManagement.controllers;

import coutureconsulting.InvoicePaymentManagement.services.CamundaRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TaskController {
    @Autowired
    private CamundaRestService camundaRestService;

    @GetMapping("/tasks")
    public String getTasks(){
        return this.camundaRestService.getTasks();
    }

    @GetMapping("/getVariableForTask")
    public String getVariableForTask(@RequestParam String taskId, @RequestParam String variable){
        return this.camundaRestService.getVariableForTask(taskId, variable);
    }

    @PostMapping("/completeTask")
    public String completeTask(@RequestParam String taskId, @RequestBody String variable){
        return this.camundaRestService.completeTask(taskId, variable);
    }
}
