import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCollectComponent } from './order-collect.component';

describe('OrderCollectComponent', () => {
  let component: OrderCollectComponent;
  let fixture: ComponentFixture<OrderCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
