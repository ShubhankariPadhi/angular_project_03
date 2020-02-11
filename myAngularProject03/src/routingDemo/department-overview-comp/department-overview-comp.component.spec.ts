import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentOverviewCompComponent } from './department-overview-comp.component';

describe('DepartmentOverviewCompComponent', () => {
  let component: DepartmentOverviewCompComponent;
  let fixture: ComponentFixture<DepartmentOverviewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentOverviewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentOverviewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
