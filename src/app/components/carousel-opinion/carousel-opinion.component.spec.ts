import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOpinionComponent } from './carousel-opinion.component';

describe('CarouselOpinionComponent', () => {
  let component: CarouselOpinionComponent;
  let fixture: ComponentFixture<CarouselOpinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselOpinionComponent]
    });
    fixture = TestBed.createComponent(CarouselOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
