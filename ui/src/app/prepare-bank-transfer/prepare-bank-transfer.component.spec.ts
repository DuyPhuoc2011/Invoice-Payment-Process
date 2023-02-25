import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareBankTransferComponent } from './prepare-bank-transfer.component';

describe('PrepareBankTransferComponent', () => {
  let component: PrepareBankTransferComponent;
  let fixture: ComponentFixture<PrepareBankTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareBankTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepareBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
