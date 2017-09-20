import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpWhiteComponent } from './ip-white.component';

describe('IpWhiteComponent', () => {
  let component: IpWhiteComponent;
  let fixture: ComponentFixture<IpWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
