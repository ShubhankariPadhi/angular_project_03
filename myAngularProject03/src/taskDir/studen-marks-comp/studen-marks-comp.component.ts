import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentDataServService} from "../student-data-serv.service";

@Component({
  selector: 'app-studen-marks-comp',
template: `
<br>
 <ng-container *ngFor="let mark of stuMarksArray ">
   <span *ngIf="isSelected(mark.id)">
   <table >
     <tr><td></td><td colspan="5">Subjects</td></tr>
     <tr><td>id </td>
     <td> english </td><td>math </td>
     <td> physics </td><td>chemistry </td> <td> IT </td> </tr>
   <tr><td>{{mark.id}} </td> <td> {{mark.subjects.english}}</td><td> {{mark.subjects.math}}</td>
     <td>{{mark.subjects.physics}}</td><td>{{mark.subjects.chemistry}}</td><td>{{mark.subjects.IT}}</td>
   </tr> </table></span>
 </ng-container>
  
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
    console.log(markId==this.selectedId," checking ");
    return markId==this.selectedId;
  }

}
