import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemQntyComponent } from './cart-item-qnty.component';

describe('CartItemQntyComponent', () => {
  let component: CartItemQntyComponent;
  let fixture: ComponentFixture<CartItemQntyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemQntyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemQntyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
