import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryStatisticsComponent } from './library-statistics.component';

describe('LibraryStatisticsComponent', () => {
  let component: LibraryStatisticsComponent;
  let fixture: ComponentFixture<LibraryStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
