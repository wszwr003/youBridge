import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobsterResourceViewComponent } from './lobster-resource-view.component';

describe('LobsterResourceViewComponent', () => {
  let component: LobsterResourceViewComponent;
  let fixture: ComponentFixture<LobsterResourceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobsterResourceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobsterResourceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
