import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidefstAFAappcompComponent } from './insidefst-afaappcomp.component';

describe('InsidefstAFAappcompComponent', () => {
  let component: InsidefstAFAappcompComponent;
  let fixture: ComponentFixture<InsidefstAFAappcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidefstAFAappcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidefstAFAappcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
