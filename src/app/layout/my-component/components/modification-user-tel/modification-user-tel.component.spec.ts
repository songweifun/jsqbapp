import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationUserTelComponent } from './modification-user-tel.component';

describe('ModificationUserTelComponent', () => {
  let component: ModificationUserTelComponent;
  let fixture: ComponentFixture<ModificationUserTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationUserTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationUserTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
