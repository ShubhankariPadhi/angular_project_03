import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingCompComponent } from './databinding-comp.component';

describe('DatabindingCompComponent', () => {
  let component: DatabindingCompComponent;
  let fixture: ComponentFixture<DatabindingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
