import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePieChartComponent } from './advance-pie-chart.component';

describe('AdvancePieChartComponent', () => {
  let component: AdvancePieChartComponent;
  let fixture: ComponentFixture<AdvancePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
