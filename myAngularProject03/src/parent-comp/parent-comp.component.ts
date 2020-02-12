import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildcompComponent} from "./childcomp/childcomp.component";

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  //@ViewChild('child')child: ChildcompComponent;// depreciated
  @ViewChild(ChildcompComponent,{static:true}) child;// but getting error

  constructor() { }

  message:string;

 /* ngAfterViewInit() {
    this.message = this.child.message
  }
*/
  ngOnInit() {
    this.message = this.child.message
  }

}
