import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentDataServService} from "../student-data-serv.service";

@Component({
  selector: 'app-studen-marks-comp',
template: `
<br>
<!--{{getSelectedId}}-->
 <div class="container col-md-12 col-sm-12 col-12" *ngFor="let mark of ary ">
   <table class="table" *ngIf="isSelected(mark.id)">
     <tr><td colspan="6">Marks</td></tr>
     <tr><td>id </td>
     <td> english </td><td>math </td>
     <td> physics </td><td>chemistry </td> <td> IT </td> </tr>
   <tr><td>{{mark.id}} </td> <td> {{mark.subjects.english}}</td><td> {{mark.subjects.math}}</td>
     <td>{{mark.subjects.physics}}</td><td>{{mark.subjects.chemistry}}</td><td>{{mark.subjects.IT}}</td>
   </tr> </table>
 </div>
 
  

  `,
  styles: [
    `table,tr,td{
    border: 2px solid black;
      text-align: center;
      border-collapse: collapse;
    }
    
    `
  ]
})

export class StudenMarksCompComponent implements OnInit {
  @Input() ary;
@Input() getSelectedId;
  stuMarksArray=[];
  selectedId;


  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      this.selectedId = id;
    });
    console.log("inside con"+this.getSelectedId);
    console.log("selected id"+this.selectedId);
  }
  isSelected(markId){
    //alert(this.getSelectedId);
    console.log("inside method"+this.getSelectedId);
    console.log(this.ary[0].subjects.english);
    console.log(markId==this.getSelectedId," checking ");
    return markId==this.getSelectedId;

  }

}
