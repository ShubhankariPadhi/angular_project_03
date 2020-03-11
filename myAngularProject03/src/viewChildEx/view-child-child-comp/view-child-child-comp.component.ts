import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-view-child-child-comp',
  template: `
    <p>
      view-child-child-comp works!
    </p>
    {{getfromParent}}
   this is const {{x}}
    
    <button (click)="sendMessage()">clickToSendOutputToParent</button>
  `,
  styles: []
})
export class ViewChildChildCompComponent implements OnInit {

  message="A message from child comp to parent comp using @ViewChild()";

  @Input() getfromParent:string;

@Output() messageEvent=new EventEmitter<string>();


messageForOutput="a message from child to parent comp using ";

/*  name :string = "John";

  var x = "";*/

constructor() {
  console.log(typeof name);
}

  ngOnInit() {
  }
  sendMessage(){
  this.messageEvent.emit();
  }

}
