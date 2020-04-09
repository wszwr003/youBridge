import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPieChartComponent } from './new-pie-chart.component';

describe('NewPieChartComponent', () => {
  let component: NewPieChartComponent;
  let fixture: ComponentFixture<NewPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
