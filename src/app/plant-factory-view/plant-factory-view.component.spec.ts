import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantFactoryViewComponent } from './plant-factory-view.component';

describe('PlantFactoryViewComponent', () => {
  let component: PlantFactoryViewComponent;
  let fixture: ComponentFixture<PlantFactoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantFactoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantFactoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
