import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditChildComponent } from './student-edit-child.component';

describe('StudentEditChildComponent', () => {
  let component: StudentEditChildComponent;
  let fixture: ComponentFixture<StudentEditChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
