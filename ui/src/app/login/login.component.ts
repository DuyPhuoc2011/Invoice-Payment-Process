import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CamundaRestService } from '../services/rest.service';
import { AuthenticationService } from "../services/Authenticate.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(private router: Router,
              private camundaRestService: CamundaRestService,
              private authenticateService: AuthenticationService) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    var credentials = {
        userName: this.loginForm.controls['userName'].value,
        password: this.loginForm.controls['password'].value
    }

    this.camundaRestService.authenticate(credentials).subscribe(token => {
      if(token.length != 0){
        this.authenticateService.authenticate(token, credentials.userName).then(() => {
          this.router.navigateByUrl("/home");
        });
      } else {
        
      }
    });
    // this.router.navigateByUrl();
  }

}
