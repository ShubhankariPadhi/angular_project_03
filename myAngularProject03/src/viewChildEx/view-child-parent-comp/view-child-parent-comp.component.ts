import { Component, OnInit,EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ViewChildChildCompComponent} from "../view-child-child-comp/view-child-child-comp.component";

@Component({
  selector: 'app-view-child-parent-comp',
  template: `
    
    
    Message: {{ message }}
    <app-view-child-child-comp></app-view-child-child-comp>
  `,
  styles: []
})
export class ViewChildParentCompComponent implements OnInit {
  @ViewChild(ViewChildChildCompComponent,{static: true}) child;

  constructor() { }

  message:string;

  /*ngAfterViewInit() {
    this.message = this.child.message
  }*/
  ngOnInit() {
    this.message = this.child.message
  }

}
