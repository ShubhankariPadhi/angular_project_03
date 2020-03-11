import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentServiceService} from "../../studentRouting/student-service.service";

@Component({
  selector: 'app-department-contact',
  templateUrl: './department-contact.component.html',
  styleUrls: ['./department-contact.component.css']
})
export class DepartmentContactComponent implements OnInit {
  students = [];
  constructor(private router: Router, private route: ActivatedRoute,private studentServiceArray: StudentServiceService) { }

  ngOnInit() {
    this.students= this.studentServiceArray.getStudentData();

  }

}
