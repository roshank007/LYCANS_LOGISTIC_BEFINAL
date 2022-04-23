import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterWaysComponent } from './water-ways.component';

describe('WaterWaysComponent', () => {
  let component: WaterWaysComponent;
  let fixture: ComponentFixture<WaterWaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterWaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
