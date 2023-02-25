import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreatePaymentRequestComponent } from "./create-payment-request/create-payment-request.component";
import { ParameterConfigurationComponent } from "./parameter-configuration/parameter-configuration.component";
import { ExportComponent } from "./export/export.component";
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'request', component: CreatePaymentRequestComponent },
  { path: 'configuration', component: ParameterConfigurationComponent },
  { path: 'export', component: ExportComponent },
  { path: 'paymentDetails/:formKey/:taskId', component: PaymentDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }