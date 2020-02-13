import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from "../student-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-student-marks',
  template: `
    <p>
      student-marks works!{{studentId}}
    </p>
    <!--<ul>
      <li *ngFor="let mark of markArray" (click)="view(mark)">view</li>
    </ul>-->
  `,
  styles: []
})
export class StudentmarkMarksComponent implements OnInit {
  //public markArray=[];
  studentId;
  constructor(private marks: StudentServiceService,private route:ActivatedRoute) {
console.log("this is stu marks");
  }

  ngOnInit() {
    //this.markArray=this.marks.getStudentMarks();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = (params.get('id'));
      this.studentId = id;
    });
  console.log("this is child"+ this.studentId);
  }

}
