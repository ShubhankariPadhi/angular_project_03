import { Component, OnInit,EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ViewChildChildCompComponent} from "../view-child-child-comp/view-child-child-comp.component";

@Component({
  selector: 'app-view-child-parent-comp',
  template: `
    
    
    ChildMessage: {{getChildMessage}}
    <app-view-child-child-comp [getfromParent]="parentmessage" (messageEvent)="receiveMessage()"></app-view-child-child-comp>
  `,
  styles: []
})
export class ViewChildParentCompComponent implements OnInit {
@ViewChild(ViewChildChildCompComponent,{static :true}) childInstance;
  getChildMessage:string;

parentmessage="this is sharing  parent data to child using @Input";


  constructor() { }



  /*ngAfterViewInit() {
    this.message = this.child.message
  }*/
  ngOnInit() {
   this.getChildMessage=this.childInstance.message;
  }
  receiveMessage(){

  }
}
