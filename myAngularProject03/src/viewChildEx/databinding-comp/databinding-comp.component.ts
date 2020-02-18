import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-databinding-comp',
  template: `
   
    <!--interpolation-->
    <h2>{{2+2}}</h2><h2>{{name}}</h2>
    <h2>{{"welcome "+ name}}</h2>
   <h2>{{greetUser()}}</h2> 
<!--    <input type="text" disabled="{{isSElected}}" />-->
    <!--property binding-->
    <input [id]="propertyBinding" name="inputId1"  value="subhi"/>
    <input id="{{propertyBinding}}" name="inputId2" value="subhi"/>
   <input [disabled]="isSElected" name="inputId3" value="subhi"/>
    <input bind-disabled="isSElected" name="inputId4" value="subhi"/>
    <button (click)="fun()">click</button>
      
  `,
  styles: []
})
export class DatabindingCompComponent implements OnInit {
name="subhiii";sid;scid;
isSElected=false;

public propertyBinding="gfgfhg";
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
  this.isSElected=true;
  return this.isSElected;
  }

}
