import { Component, OnInit } from '@angular/core';
import {StudentDataForCompService} from "../student-data-for-comp.service";

@Component({
  selector: 'app-parent-student',
  template: `
    <ng-container >

      <table >
        <tr><td colspan="6">Student list</td></tr>
        <tr  *ngFor="let student of studentArray" ><td>
          {{student.id}}</td><td>{{student.name}}</td><td>{{student.address.area}}</td><td>{{student.address.zipcode}}
        <td> <button (click)="view(student.id)">view</button></td><td><button (click)="edit(student.id)">edit</button></td>
        </tr></table></ng-container>
    <br>
    
    <app-student-mark-child [markId]="studentId1"></app-student-mark-child>
    <br>
    <app-student-edit-child [markId]="studentId2"></app-student-edit-child>
  `,
  styles: [
    `      
      table, tr, td {
        text-align: center;
        border-collapse: collapse;
        border: 2px solid black;
      }
    `
  ]
})
export class ParentStudentComponent implements OnInit {
  public studentArray = [];
  public studentId1;
  public studentId2;

  constructor(private studentListData: StudentDataForCompService) {
    this.studentArray = studentListData.getStudentData();
  }

  ngOnInit() {

  }


  view(sid) {
    this.studentId1 = sid;
  }
  edit(sid){
    this.studentId2 = sid;
  }
}
