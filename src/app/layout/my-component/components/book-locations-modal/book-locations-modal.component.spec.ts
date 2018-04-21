import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLocationsModalComponent } from './book-locations-modal.component';

describe('BookLocationsModalComponent', () => {
  let component: BookLocationsModalComponent;
  let fixture: ComponentFixture<BookLocationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLocationsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLocationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
