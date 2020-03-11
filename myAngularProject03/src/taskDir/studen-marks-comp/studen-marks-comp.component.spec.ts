import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenMarksCompComponent } from './studen-marks-comp.component';

describe('StudenMarksCompComponent', () => {
  let component: StudenMarksCompComponent;
  let fixture: ComponentFixture<StudenMarksCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenMarksCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenMarksCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
