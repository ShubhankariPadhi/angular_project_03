import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChildCompComponent } from './view-child-child-comp.component';

describe('ViewChildChildCompComponent', () => {
  let component: ViewChildChildCompComponent;
  let fixture: ComponentFixture<ViewChildChildCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildChildCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
