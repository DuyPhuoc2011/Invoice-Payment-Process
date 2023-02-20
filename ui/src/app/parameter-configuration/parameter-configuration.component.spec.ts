import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterConfigurationComponent } from './parameter-configuration.component';

describe('ParameterConfigurationComponent', () => {
  let component: ParameterConfigurationComponent;
  let fixture: ComponentFixture<ParameterConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
