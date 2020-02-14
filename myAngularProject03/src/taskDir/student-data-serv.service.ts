import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataServService {
  getStudentData(){
    return [
      {"id":1, "name":"subha","address":{"area": 'srnagar',"zipcode":500016}},
      {"id":2,"name":"latus","address":{"area": 'srnagar',"zipcode":500016}},
    ];
  }
  getStudentMarks(){
    return [
      {"id":1,"subjects":{"english": 79,"math":88}},
      {"id":2,"subjects":{"english": 85,"math":87}},
    ];
  }
  constructor() { }
}
