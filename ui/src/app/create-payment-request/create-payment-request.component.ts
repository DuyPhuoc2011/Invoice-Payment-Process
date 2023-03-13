import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CamundaRestService } from '../services/rest.service';

@Component({
  selector: 'app-create-payment-request',
  templateUrl: './create-payment-request.component.html',
  styleUrls: ['./create-payment-request.component.css']
})
export class CreatePaymentRequestComponent {
  public invoiceDocument!: String;
  public creditor!:String;
  public amount!: Number;
  public invoiceCategory!: String;
  public invoiceNumber!: String;
  constructor(private router:Router,
              private camundaRestService: CamundaRestService){}

  back():void{
    this.router.navigateByUrl("/dashboard");
  }

  submit():void{
    console.log("Clicked");
    var variable = {
      "variables": {
        "invoiceDocument": {"value": this.invoiceDocument,"type":"String"},
        "creditor": {"value": this.creditor,"type":"String"},
        "amount":{"value": this.amount,"type":"Double"},
        "invoiceCategory": {"value": this.invoiceCategory,"type":"String"},
        "invoiceNumber":{"value": this.invoiceNumber,"type":"String"}
      }
    };
    this.camundaRestService.startProcessInstance(variable).subscribe(instanceID => {
      console.log("instanceID: ", instanceID);
    });
  }
}
