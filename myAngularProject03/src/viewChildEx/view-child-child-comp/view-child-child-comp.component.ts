import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-child-comp',
  template: `
    <p>
      view-child-child-comp works!
    </p>
  `,
  styles: []
})
export class ViewChildChildCompComponent implements OnInit {
message="kjklj";
  constructor() { }

  ngOnInit() {
  }

}
