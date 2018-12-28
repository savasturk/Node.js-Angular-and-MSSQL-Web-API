import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassRegistrationComponent } from './pass-registration.component';

describe('PassRegistrationComponent', () => {
  let component: PassRegistrationComponent;
  let fixture: ComponentFixture<PassRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
