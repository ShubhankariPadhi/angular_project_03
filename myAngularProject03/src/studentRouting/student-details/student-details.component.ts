import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,ParamMap} from "@angular/router";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
public studentId;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
     /* let id = (params.get('id'));
      this.studentId = id;*/
    });
    console.log(this.studentId);

  }

  showOverview(){
    this.router.navigate(['studentoverview'], { relativeTo: this.route });
  }

  showContact(){
    this.router.navigate(['studentcon'], { relativeTo: this.route });
  }
}
