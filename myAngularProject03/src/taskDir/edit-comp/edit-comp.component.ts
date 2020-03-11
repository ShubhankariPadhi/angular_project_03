import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
 /* selector: 'app-edit-comp',*/
  template: `
    <div class="container col-md-12 col-sm-12 col-12">
      <table class="table table-bordered">
        <tr>
        <th> you have selected</th><td>{{selectedId}}</td></tr>
      </table>
    </div>
    
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
