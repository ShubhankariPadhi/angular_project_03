import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Observer} from 'rxjs/Observer';


@Injectable({
  providedIn: 'root'
})
export class PopulationService {
myObservable: Observable<number>;
myObserver:Observer<number>;
  constructor() { 
    this.myObservable=Observable.create((observer:Observer<number>)=>{

      this.myObserver=observer;
     
    });
  }

 next(data){
   this.myObserver.next(data);
   if(true) this.error;
 }
 error(){
   this.myObserver.error("some error ");
 }
  complete(){
    this.myObserver.complete();
  }

}
