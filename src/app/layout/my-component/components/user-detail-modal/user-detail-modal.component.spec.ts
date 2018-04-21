import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailModalComponent } from './user-detail-modal.component';

describe('UserDetailModalComponent', () => {
  let component: UserDetailModalComponent;
  let fixture: ComponentFixture<UserDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
