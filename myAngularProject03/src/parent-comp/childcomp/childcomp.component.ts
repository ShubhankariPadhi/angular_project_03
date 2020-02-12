import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {
  message = 'Hola Mundo!';

  constructor() { }

  ngOnInit() {
  }
  logMessage(val){
    console.log(val);
  }
}
