import { Component, OnInit,
    ViewChild, ViewContainerRef,
    OnChanges, SimpleChange, Input, Type, ViewChildren} from '@angular/core';
import { NotFoundComponent } from "./not-found/not-found.component";
import { ApproveInvoiceComponent } from "./approve-invoice/approve-invoice.component";
import { ReviewInvoiceComponent } from "./review-invoice/review-invoice.component";
import { PrepareBankTransferComponent } from "./prepare-bank-transfer/prepare-bank-transfer.component";

  @Component({
    selector: 'generic-form',
    templateUrl: './generic-form.component.html',
    styleUrls: []
  })
  export class GenericForm implements OnChanges {
    @ViewChild('dynamic', { read: ViewContainerRef })
      viewContainerRef!: ViewContainerRef;
  
    @Input() formKey:String = "";
    private rootViewContainer!: ViewContainerRef;
  
    constructor() {
  
    }
  
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      for (let propName in changes) {
        if (propName === 'formKey' && changes[propName].currentValue != null) {
          this.loadForm(changes[propName].currentValue);
        }
      }
    }

    ngAfterViewInit() {
      this.loadForm(this.formKey);
    }
  
    loadForm(formKey: String): void {
      this.rootViewContainer = this.viewContainerRef;
      console.log("this.viewContainerRef", this.viewContainerRef);
      this.addDynamicComponent(formKey);
    }
  
    public addDynamicComponent(formKey: String) {
      if(this.rootViewContainer != undefined){
        let componentName:String = this.formKey + "Component";
        this.rootViewContainer.clear();
        this.rootViewContainer.createComponent(this.getComponentType(componentName));
      }
    }

    getComponentType(name:String) : Type<any>{
      let type: Type<any>;
      switch (name) {
        case "ApproveInvoiceComponent":
          type = ApproveInvoiceComponent;
          break;
        case "ReviewInvoiceComponent":
          type = ReviewInvoiceComponent;
          break;
        case "PrepareBankTransferComponent":
          type = PrepareBankTransferComponent;
          break;
        default:
          type = NotFoundComponent;
          break;
      }
      return type;
    }
  }