import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassGenerationComponent } from './pass-generation.component';

describe('PassGenerationComponent', () => {
  let component: PassGenerationComponent;
  let fixture: ComponentFixture<PassGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
