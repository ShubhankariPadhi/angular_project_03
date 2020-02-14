import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentDataServService} from "../student-data-serv.service";

@Component({
  selector: 'app-studen-marks-comp',
  template: `
    <p>
      studen-marks-comp works!
    </p>
 <ng-container *ngFor="let mark of stuMarksArray ">
   <span *ngIf="mark.id==selectedId">fsddasda {{mark.id}} {{mark.subjects.english}}</span>
   
 </ng-container>
  {{selectedId}}
  `,
  styles: []
})
export class StudenMarksCompComponent implements OnInit {
  stuMarksArray=[];
  selectedId;
  constructor(private route:ActivatedRoute,private studentMarks: StudentDataServService) { }

  ngOnInit() {
    this.stuMarksArray=this.studentMarks.getStudentMarks();
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      this.selectedId = id;
    });
   // console.log("selected id"+this.selectedId);
  }
  isSelected(markId){
    console.log(markId===this.selectedId+" checking ");
    return markId===this.selectedId;
  }
  //isSelected(markId);
}
