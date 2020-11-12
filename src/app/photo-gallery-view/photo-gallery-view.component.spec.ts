import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryViewComponent } from './photo-gallery-view.component';

describe('PhotoGalleryViewComponent', () => {
  let component: PhotoGalleryViewComponent;
  let fixture: ComponentFixture<PhotoGalleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGalleryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
