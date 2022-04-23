import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadWaysComponent } from './road-ways.component';

describe('RoadWaysComponent', () => {
  let component: RoadWaysComponent;
  let fixture: ComponentFixture<RoadWaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadWaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
