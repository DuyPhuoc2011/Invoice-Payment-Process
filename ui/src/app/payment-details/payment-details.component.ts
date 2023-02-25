import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent {

  public formKey!:String;
  constructor(private router:Router,
              private route : ActivatedRoute){}

  ngOnInit(){
    if(this.route.params != null){
      this.route.params.subscribe(params => {
        this.formKey = params['formKey'];
      });
    } 
  }

  back():void{
    this.router.navigateByUrl("/dashboard");
  }
}
