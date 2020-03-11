import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildParentCompComponent } from './view-child-parent-comp.component';

describe('ViewChildParentCompComponent', () => {
  let component: ViewChildParentCompComponent;
  let fixture: ComponentFixture<ViewChildParentCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildParentCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildParentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
