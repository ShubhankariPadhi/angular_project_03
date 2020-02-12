import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-student-list',
  template: `
    <h3>
      Student List
    </h3>
    <ul class="items">
      <li *ngFor="let student of students" (click)="onSelect(student)">
        <span class="badge">{{student.id}}</span> {{student.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class StudentListComponent {
  public selectedId;
students = [];
  constructor(private router: Router, private route: ActivatedRoute,private studentServiceArray: StudentServiceService) { }

  ngOnInit() {
    this.students= this.studentServiceArray.getStudentData();
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      this.selectedId = id;
    });
  }


  onSelect(student) {
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([student.id], { relativeTo: this.route });
  }
}
