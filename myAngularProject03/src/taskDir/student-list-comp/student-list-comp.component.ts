import { Component, OnInit } from '@angular/core';
import {StudentDataServService} from "../student-data-serv.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-student-list-comp',
  template: `
    <p>
      student-list-comp works!
    </p>
    <ng-container *ngFor="let student of stuDataArray">
      <table>
        <tr><td>
          {{student.id}}</td><td>{{student.name}}</td><td>{{student.address.area}}{{student.address.zipcode}}
        </td><td> <button (click)="view(student.id)">view</button></td><td><button (click)="edit(student.id)">edit</button></td>
       </tr></table></ng-container>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class StudentListCompComponent implements OnInit {
stuDataArray=[];
  selectedId;
  constructor(private studentData: StudentDataServService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.stuDataArray=this.studentData.getStudentData();

  }

view(id){
 // this.router.navigate(['studentlist','studentmarks',{id}]);

 this.router.navigate(['studentlist','studentmarks',{id}],{relativeTo:this.route});
}
edit(id){
  this.router.navigate(['studentlist','studentEdit',{id}],{relativeTo:this.route});

}
}
