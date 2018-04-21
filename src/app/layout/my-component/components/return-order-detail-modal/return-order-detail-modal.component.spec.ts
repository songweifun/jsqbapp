import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrderDetailModalComponent } from './return-order-detail-modal.component';

describe('ReturnOrderDetailModalComponent', () => {
  let component: ReturnOrderDetailModalComponent;
  let fixture: ComponentFixture<ReturnOrderDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOrderDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOrderDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
