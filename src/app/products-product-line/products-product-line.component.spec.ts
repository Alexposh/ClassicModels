import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsProductLineComponent } from './products-product-line.component';

describe('ProductsProductLineComponent', () => {
  let component: ProductsProductLineComponent;
  let fixture: ComponentFixture<ProductsProductLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsProductLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsProductLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
