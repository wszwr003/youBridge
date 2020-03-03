import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutisensorViewComponent } from './mutisensor-view.component';

describe('MutisensorViewComponent', () => {
  let component: MutisensorViewComponent;
  let fixture: ComponentFixture<MutisensorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutisensorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutisensorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
