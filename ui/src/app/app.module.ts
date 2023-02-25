import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamundaRestService } from './camunda-rest.service';
import { GenericForm } from './generic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePaymentRequestComponent } from './create-payment-request/create-payment-request.component';
import { ParameterConfigurationComponent } from './parameter-configuration/parameter-configuration.component';
import { ExportComponent } from './export/export.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ApproveInvoiceComponent } from './approve-invoice/approve-invoice.component';
import { ReviewInvoiceComponent } from './review-invoice/review-invoice.component';
import { PrepareBankTransferComponent } from './prepare-bank-transfer/prepare-bank-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericForm,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    CreatePaymentRequestComponent,
    ParameterConfigurationComponent,
    ExportComponent,
    PaymentDetailsComponent,
    ApproveInvoiceComponent,
    ReviewInvoiceComponent,
    PrepareBankTransferComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CamundaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }