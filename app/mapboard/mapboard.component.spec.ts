import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboardComponent } from './mapboard.component';

describe('MapboardComponent', () => {
  let component: MapboardComponent;
  let fixture: ComponentFixture<MapboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
