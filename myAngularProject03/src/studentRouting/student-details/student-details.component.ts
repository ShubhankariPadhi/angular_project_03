import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,ParamMap} from "@angular/router";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
public studentId;
retn;
public markArray=[];
  constructor(private route: ActivatedRoute, private router: Router, private marks:StudentServiceService) {
  }
  ngOnInit() {
    this.markArray=this.marks.getStudentMarks();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = (params.get('id'));
      this.studentId = id;
    });
    console.log(this.studentId);

  }

  showOverview(){
    this.router.navigate(['studentoverview'], { relativeTo: this.route });
  }

  showContact(){
    this.router.navigate(['studentcon'], { relativeTo: this.route });
  }
  showMarks(){

    //this.router.navigate(['studentcon'], { relativeTo: this.route });

  }
  /*view(mark){
        console.log("view",this.studentId===mark.id);
this.router.navigate([mark.id],{relativeTo: this.route});

  }*/
/*
view(mark){

  console.log("mark",mark.id);
  //this.router.navigate([mark.id],{relativeTo: this.route});
  console.log(mark.id==this.studentId);
  return mark.id===this.studentId;
}*/
//  isSelected(mark){return mark.id===this.studentId}
}
