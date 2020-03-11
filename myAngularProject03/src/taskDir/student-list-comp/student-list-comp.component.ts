import { Component, OnInit } from '@angular/core';
import {StudentDataServService} from "../student-data-serv.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
 selector: 'app-student-list-comp',
  template: `
   <br>
 

      <!--<table > 
        <tr  *ngFor="let student of stuDataArray" ><td>
          {{student.id}}</td><td>{{student.name}}</td><td>{{student.address.area}}</td><td>{{student.address.zipcode}}
        </td><td> <button (click)="view(student.id)">view</button></td><td><button (click)="edit(student.id)">edit</button></td>
       </tr></table>-->

   <div class="container col-md-12 col-sm-12 col-12" >
     
     <table  class="table">
       <tr><td colspan="6">Student list</td></tr>
       <tr  *ngFor="let student of stuDataArray" ><td>
         {{student.id}}</td><td>{{student.name}}</td><td>{{student.address.area}}</td><td>{{student.address.zipcode}}
       </td><td> <button id="viewbtn" (click)="view(student.id,stuMarks)">view</button></td><td><button id="editbtn" (click)="edit(student.id)">edit</button></td>
       </tr></table></div>
   <router-outlet></router-outlet>
  <!-- <ng-container *ngIf=(selectedId!=null)>-->
   <app-studen-marks-comp  [ary]="stuMarks" [getSelectedId]="selectedId" ></app-studen-marks-comp>
   <!--</ng-container>-->
  `,
  styles: [`
  table,tr,td{
    border: 2px solid black;
    text-align: center;
    border-collapse: collapse;
    
  }

  #viewbtn{
      background-color: lightseagreen;
    }
  #editbtn{
    background-color: lightpink;
  }
    
  `]
})
export class StudentListCompComponent implements OnInit {

  matchingStuIdData =[];
stuDataArray=[
  {"id":1, "name":"subha","address":{"area": 'srnagar',"zipcode":500016}},
  {"id":2,"name":"latus","address":{"area": 'srnagar',"zipcode":500016}},
  {"id":3, "name":"akhil","address":{"area": 'balkampet',"zipcode":500016}},
  {"id":4,"name":"gufs","address":{"area": 'yusufguda',"zipcode":500019}},
  {"id":5, "name":"bhranti","address":{"area": 'koti',"zipcode":500002}},
  {"id":6,"name":"anil","address":{"area": 'srnagar',"zipcode":500016}},
];

stuMarks=[
  {"id":1,"subjects":{"english": 79,"math":88,"physics":95,"chemistry":92,"IT":97}},
  {"id":2,"subjects":{"english": 85,"math":77,"physics":87,"chemistry":87,"IT":95}},
  {"id":3,"subjects":{"english": 83,"math":86,"physics":83,"chemistry":93,"IT":96}},
  {"id":4,"subjects":{"english": 77,"math":84,"physics":87,"chemistry":92,"IT":94}},
  {"id":5,"subjects":{"english": 76,"math":83,"physics":86,"chemistry":93,"IT":93}},
  {"id":6,"subjects":{"english": 86,"math":77,"physics":87,"chemistry":93,"IT":95}},
];
  selectedId;
  constructor(private router:Router,private route:ActivatedRoute ){ }

  ngOnInit() {
    //this.stuDataArray=this.studentData.getStudentData();
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      //this.getUrlId = id;
    });
  }
/* parent child relationship case-1*/

view(sid,marks) {
  console.log(sid);
this.selectedId=sid;


  this.router.navigate(['studentlist/studentmarks',sid]);
}
/*edit(sid){
  this.router.navigate(['studentlist/studentEdit',sid]);


}*/
/*unrelated components case-2*/
  /*view(id){
    this.router.navigate(['studentmarks',id]);
  }*/
  edit(sid) {
    this.router.navigate(['studentEdit',sid]);


  }
}
