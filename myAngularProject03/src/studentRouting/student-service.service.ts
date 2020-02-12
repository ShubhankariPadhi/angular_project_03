import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  getStudentData(){
    return [
      {"id":1, "name":"subha"},
      {"id":2,"name":"latus"},
    ];
  }

  constructor() { }
}
