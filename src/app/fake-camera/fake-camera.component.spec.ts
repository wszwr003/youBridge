import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeCameraComponent } from './fake-camera.component';

describe('FakeCameraComponent', () => {
  let component: FakeCameraComponent;
  let fixture: ComponentFixture<FakeCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
