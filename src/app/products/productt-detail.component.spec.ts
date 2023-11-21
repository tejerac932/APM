import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttDetailComponent } from './productt-detail.component';

describe('ProducttDetailComponent', () => {
  let component: ProducttDetailComponent;
  let fixture: ComponentFixture<ProducttDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
