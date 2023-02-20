import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CamundaRestService } from "../camunda-rest.service";
import { Invoice } from '../schemas/Invoice';
import { Task } from '../schemas/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public tasks!: Task[];
  public invoices!: Invoice[];
  constructor(private router:Router,
              private camundaRestService: CamundaRestService
              ){}

  ngOnInit(): void {
    // this.camundaRestService.getTasks().subscribe((tasks) => {
    //   this.tasks = tasks;
    //   console.log("Fetched tasks", this.tasks);
    //   this.invoices = [];
    //   // var invoice:Invoice = new Invoice();

    //   this.tasks.forEach(task => {
    //     var invoice:Invoice = new Invoice();
    //     invoice.id = task.id;
    //     this.camundaRestService.getVariableForTask(task.id, "invoiceCategory").subscribe(variable => {
    //       invoice.category = variable.invoiceCategory.value;
    //     });
    //     this.camundaRestService.getVariableForTask(task.id, "amount").subscribe(variable => {
    //       invoice.amount = variable.amount.value;
    //     });
    //     this.camundaRestService.getVariableForTask(task.id, "invoiceNumber").subscribe(variable => {
    //       invoice.number = variable.invoiceNumber.value;
    //     });
    //     this.camundaRestService.getVariableForTask(task.id, "creditor").subscribe(variable => {
    //       invoice.creditor = variable.creditor.value;
    //     });

    //     this.invoices.push(invoice);
    //   });

    //   console.log("invoices: ", this.invoices);
    // })


    // this.camundaRestService.getTasks().subscribe(tasks => {
    //   console.log("called", tasks);
    // });

    this.camundaRestService.testCall().subscribe(task => {
      console.log("called");
    });
  }

  openCreatePaymentRequest(){
    this.router.navigateByUrl("/request");
  }
}
