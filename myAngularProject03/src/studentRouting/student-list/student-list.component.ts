import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-student-list',
  template: `
    <h3>
      Student List
    </h3><router-outlet></router-outlet>
    <ul class="items">
      <li *ngFor="let student of students" (click)="onSelect(student)">
        <span class="badge">{{student.id}}</span> {{student.name}} Address: {{student.address.area}}
        <button (click)="view(student)"> view </button> <button> edit</button>
      </li>
    </ul>  
  `,
  styles: []
})
export class StudentListComponent {
  public selectedId;
students = [];
marks=[];
  constructor(private router: Router, private route: ActivatedRoute,private studentServiceArray: StudentServiceService,private markArray: StudentServiceService) { }

  ngOnInit() {
    this.marks=this.markArray.getStudentMarks();
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
  view(stu){
    console.log(stu.id);
    this.router.navigate([stu.id], { relativeTo: this.route });

  }
}
