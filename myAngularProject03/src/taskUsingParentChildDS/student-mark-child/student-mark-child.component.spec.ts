import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarkChildComponent } from './student-mark-child.component';

describe('StudentMarkChildComponent', () => {
  let component: StudentMarkChildComponent;
  let fixture: ComponentFixture<StudentMarkChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMarkChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMarkChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
