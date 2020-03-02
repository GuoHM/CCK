import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacnNRICComponent } from './sacn-nric.component';

describe('SacnNRICComponent', () => {
  let component: SacnNRICComponent;
  let fixture: ComponentFixture<SacnNRICComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacnNRICComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacnNRICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
