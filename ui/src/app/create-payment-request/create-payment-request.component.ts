import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-payment-request',
  templateUrl: './create-payment-request.component.html',
  styleUrls: ['./create-payment-request.component.css']
})
export class CreatePaymentRequestComponent {
  constructor(private router:Router){}

  back():void{
    this.router.navigateByUrl("/dashboard");
  }
}
