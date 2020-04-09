import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLineChartComponent } from './new-line-chart.component';

describe('NewLineChartComponent', () => {
  let component: NewLineChartComponent;
  let fixture: ComponentFixture<NewLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
