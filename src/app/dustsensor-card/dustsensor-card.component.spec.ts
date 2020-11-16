import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DustsensorCardComponent } from './dustsensor-card.component';

describe('DustsensorCardComponent', () => {
  let component: DustsensorCardComponent;
  let fixture: ComponentFixture<DustsensorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustsensorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DustsensorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
