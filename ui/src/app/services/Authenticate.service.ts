import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { CamundaRestService } from "./rest.service";


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private restService: CamundaRestService) {}
// Provide username and password for authentication, and once authentication is successful, 
// store JWT token in session
  authenticate(token:String, username:string) {
    return new Promise<void>((resolve, reject) => {
      sessionStorage.setItem("username", username);
      let tokenStr = "Bearer " + token;
      sessionStorage.setItem("token", tokenStr);
      resolve();
    });
  }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
  }
}