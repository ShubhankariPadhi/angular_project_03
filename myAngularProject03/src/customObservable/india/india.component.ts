import { PopulationService } from './../population.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
population:number=1.33;
subscription;

  constructor(private ps:PopulationService) {

   }

  ngOnInit() {
  
  this.subscription = this.ps.myObservable.subscribe(
    (n) =>
    {
    this.population = n;
    console.log("hjghj"+n);
    },
    (error) =>
    {
    console.log(error);
    },
    () =>
    {
    console.log("Completed");
    });
    }
    ngOnDestroy()
    {
    this.subscription.unsubscribe();
    }
  }