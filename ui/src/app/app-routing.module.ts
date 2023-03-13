import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreatePaymentRequestComponent } from "./create-payment-request/create-payment-request.component";
import { ParameterConfigurationComponent } from "./parameter-configuration/parameter-configuration.component";
import { ExportComponent } from "./export/export.component";
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', 
    component: HomeComponent,
    children: [
      {
        path:'', component: DashboardComponent
      },
      {
        path:'dashboard', component: DashboardComponent
      },
      {
        path:'request', component: CreatePaymentRequestComponent
      },
      {
        path:'configuration', component: ParameterConfigurationComponent
      },
      {
        path:'export', component: ExportComponent
      },
      {
        path:'paymentDetails/:formKey/:taskId', component: PaymentDetailsComponent
      }
      
    ]
  },
  // { path: 'dashboard', component: DashboardComponent, outlet: 'main'},
  // { path: 'request', component: CreatePaymentRequestComponent , outlet: 'main' },
  // { path: 'configuration', component: ParameterConfigurationComponent, outlet: 'main' },
  // { path: 'export', component: ExportComponent, outlet: 'main' },
  // { path: 'paymentDetails/:formKey/:taskId', component: PaymentDetailsComponent, outlet: 'main' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }