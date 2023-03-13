import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CamundaRestService } from "../services/rest.service";
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
    this.camundaRestService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log("Fetched tasks", this.tasks);
      this.invoices = [];
      // var invoice:Invoice = new Invoice();

      this.tasks.forEach(task => {
        var invoice:Invoice = new Invoice();
        invoice.id = task.id;
        this.camundaRestService.getVariableForTask(task.id, "invoiceCategory").subscribe(variable => {
          invoice.category = variable.invoiceCategory ? variable.invoiceCategory.value : null;
        });
        this.camundaRestService.getVariableForTask(task.id, "amount").subscribe(variable => {
          invoice.amount = variable.amount ? variable.amount.value : null;
        });
        this.camundaRestService.getVariableForTask(task.id, "invoiceNumber").subscribe(variable => {
          invoice.number = variable.invoiceNumber ? variable.invoiceNumber.value : null;
        });
        this.camundaRestService.getVariableForTask(task.id, "creditor").subscribe(variable => {
          invoice.creditor = variable.creditor ? variable.creditor.value : null;
        });
        invoice.formKey = task.formKey;
        invoice.name = task.name;
        this.invoices.push(invoice);
      });

      console.log("invoices: ", this.invoices);
    })
  }

  openCreatePaymentRequest(){
    this.router.navigateByUrl("/request");
  }
}
