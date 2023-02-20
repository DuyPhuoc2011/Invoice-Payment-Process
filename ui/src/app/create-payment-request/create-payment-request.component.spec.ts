import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentRequestComponent } from './create-payment-request.component';

describe('CreatePaymentRequestComponent', () => {
  let component: CreatePaymentRequestComponent;
  let fixture: ComponentFixture<CreatePaymentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaymentRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePaymentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
