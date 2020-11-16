import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirsensorCardComponent } from './airsensor-card.component';

describe('AirsensorCardComponent', () => {
  let component: AirsensorCardComponent;
  let fixture: ComponentFixture<AirsensorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirsensorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirsensorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
