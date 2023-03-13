import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaRestService } from '../services/rest.service';

@Component({
  selector: 'app-review-invoice',
  templateUrl: './review-invoice.component.html',
  styleUrls: ['./review-invoice.component.css']
})
export class ReviewInvoiceComponent {
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
        clarified: {"value": this.approval,"type":"Boolean"}
      }
    }

    this.camundaRestService.postCompleteTask(this.taskId, variables).subscribe(result => {
      console.log("result", result);
    });
  }
}
