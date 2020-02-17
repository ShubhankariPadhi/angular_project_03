import {Component, Input, InputDecorator, OnInit} from '@angular/core';
import {StudentDataForCompService} from "../student-data-for-comp.service";

@Component({
  selector: 'app-student-mark-child',
  template: `
    <ng-container *ngFor="let mark of studentMarkArray ">
<!--   <span *ngIf="isSelected(mark.id)">{{markId}}-->
   <span *ngIf="markId==mark.id">
     
   <table >
     <tr><td colspan="6">Marks</td></tr>
     <tr><td>id </td>
     <td> english </td><td>math </td>
     <td> physics </td><td>chemistry </td> <td> IT </td> </tr>
   <tr><td>{{mark.id}} </td> <td> {{mark.subjects.english}}</td><td> {{mark.subjects.math}}</td>
     <td>{{mark.subjects.physics}}</td><td>{{mark.subjects.chemistry}}</td><td>{{mark.subjects.IT}}</td>
   </tr> </table></span>
    </ng-container> 
    
    display markId{{markId}}
  `,
  styles: [
        `
      table,tr,td{
        text-align: center;
        border-collapse: collapse;
        border: 2px solid black;
      }
    `
  ]
})
export class StudentMarkChildComponent implements OnInit {
  @Input() markId;
public studentMarkArray=[];
public getStudentMarkId;
  constructor(private studentMarks:StudentDataForCompService) {
    this.studentMarkArray=studentMarks.getStudentMarks();
  }

  ngOnInit() {
  }

}
