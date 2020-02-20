import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
 /* selector: 'app-edit-comp',*/
  template: `
    <p> you have selected id {{selectedId}}</p>
  `,
  styles: []
})
export class EditCompComponent implements OnInit {
  selectedId;
  constructor(private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      this.selectedId = id;
    });
  }

}
