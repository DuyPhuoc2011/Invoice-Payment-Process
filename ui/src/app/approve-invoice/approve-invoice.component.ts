import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaRestService } from '../camunda-rest.service';

@Component({
  selector: 'app-approve-invoice',
  templateUrl: './approve-invoice.component.html',
  styleUrls: ['./approve-invoice.component.css']
})
export class ApproveInvoiceComponent implements OnInit{
  public approval:Boolean = false;
  private taskId!:String;
  public document!:String;
  public creditor!:String;
  public amount!:String;
  public invoiceCategory!:String;
  public invoiceNumber!:String;
  
  constructor(private route : ActivatedRoute,
              private camundaRestService: CamundaRestService){}

  ngOnInit(): void {
    if(this.route.params != null){
      this.route.params.subscribe(params => {
        this.taskId = params['taskId'];
      });
    }

    this.camundaRestService.getVariableForTask(this.taskId, "invoiceDocument").subscribe(variable => {
      this.document = variable.invoiceDocument ? variable.invoiceDocument.value : null;
    });
    this.camundaRestService.getVariableForTask(this.taskId, "invoiceCategory").subscribe(variable => {
      this.invoiceCategory = variable.invoiceCategory ? variable.invoiceCategory.value : null;
    });
    this.camundaRestService.getVariableForTask(this.taskId, "amount").subscribe(variable => {
      this.amount = variable.amount ? variable.amount.value : null;
    });
    this.camundaRestService.getVariableForTask(this.taskId, "invoiceNumber").subscribe(variable => {
      this.invoiceNumber = variable.invoiceNumber ? variable.invoiceNumber.value : null;
    });
    this.camundaRestService.getVariableForTask(this.taskId, "creditor").subscribe(variable => {
      this.creditor = variable.creditor ? variable.creditor.value : null;
    });
  }

  submit():void{
    var variables = {
      "variables": {
        approved: {"value": this.approval,"type":"Boolean"}
      }
    }

    this.camundaRestService.postCompleteTask(this.taskId, variables).subscribe(result => {
      console.log("result", result);
    });
  }
}
