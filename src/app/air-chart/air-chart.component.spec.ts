import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirChartComponent } from './air-chart.component';

describe('AirChartComponent', () => {
  let component: AirChartComponent;
  let fixture: ComponentFixture<AirChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
