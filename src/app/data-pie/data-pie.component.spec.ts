import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPieComponent } from './data-pie.component';

describe('DataPieComponent', () => {
  let component: DataPieComponent;
  let fixture: ComponentFixture<DataPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
