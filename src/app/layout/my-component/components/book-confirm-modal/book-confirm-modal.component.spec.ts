import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConfirmModalComponent } from './book-confirm-modal.component';

describe('BookConfirmModalComponent', () => {
  let component: BookConfirmModalComponent;
  let fixture: ComponentFixture<BookConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
