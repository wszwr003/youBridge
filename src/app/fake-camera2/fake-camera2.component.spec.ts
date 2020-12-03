import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeCamera2Component } from './fake-camera2.component';

describe('FakeCamera2Component', () => {
  let component: FakeCamera2Component;
  let fixture: ComponentFixture<FakeCamera2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeCamera2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeCamera2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
