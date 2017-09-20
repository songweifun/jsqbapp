import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBlackComponent } from './ip-black.component';

describe('IpBlackComponent', () => {
  let component: IpBlackComponent;
  let fixture: ComponentFixture<IpBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
