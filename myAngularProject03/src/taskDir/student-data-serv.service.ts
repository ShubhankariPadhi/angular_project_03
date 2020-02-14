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
      {"id":1,"subjects":{"english": 79,"math":88,"physics":95,"chemistry":92,"IT":97}},
      {"id":2,"subjects":{"english": 85,"math":84,"physics":87,"chemistry":93,"IT":94}},
    ];
  }
  constructor() { }
}
