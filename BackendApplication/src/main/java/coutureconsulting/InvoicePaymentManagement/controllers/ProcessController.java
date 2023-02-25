package coutureconsulting.InvoicePaymentManagement.controllers;
import coutureconsulting.InvoicePaymentManagement.services.CamundaRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProcessController {
    @Autowired
    private CamundaRestService camundaRestService;

    @GetMapping("/processDefinitions")
    String getProcessDefinitions(){
        return this.camundaRestService.getProcessDefinitions();
    }

    @PostMapping("/startProcessInstance")
    String startProcessInstance(@RequestBody String variable){
        return this.camundaRestService.startProcessInstance(variable);
    }
}
