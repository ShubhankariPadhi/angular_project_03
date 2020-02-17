import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-edit-child',
  template: `
    <p>
      student-edit-child works!
    </p>
  {{markId}}
  `,
  styles: []
})
export class StudentEditChildComponent implements OnInit {
@Input() markId;
  constructor() { }

  ngOnInit() {
  }

}
