import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataServService {
  getStudentData(){
    return [
      {"id":1, "name":"subha","address":{"area": 'srnagar',"zipcode":500016}},
      {"id":2,"name":"latus","address":{"area": 'srnagar',"zipcode":500016}},
      {"id":3, "name":"akhil","address":{"area": 'balkampet',"zipcode":500016}},
      {"id":4,"name":"gufs","address":{"area": 'yusufguda',"zipcode":500019}},
      {"id":5, "name":"bhranti","address":{"area": 'koti',"zipcode":500002}},
      {"id":6,"name":"anil","address":{"area": 'srnagar',"zipcode":500016}},
    ];
  }
  getStudentMarks(){
    return [
      {"id":1,"subjects":{"english": 79,"math":88,"physics":95,"chemistry":92,"IT":97}},
      {"id":2,"subjects":{"english": 85,"math":77,"physics":87,"chemistry":87,"IT":95}},
      {"id":3,"subjects":{"english": 83,"math":86,"physics":83,"chemistry":93,"IT":96}},
      {"id":4,"subjects":{"english": 77,"math":84,"physics":87,"chemistry":92,"IT":94}},
      {"id":5,"subjects":{"english": 76,"math":83,"physics":86,"chemistry":93,"IT":93}},
      {"id":6,"subjects":{"english": 86,"math":77,"physics":87,"chemistry":93,"IT":95}},
    ];
  }
  constructor() { }
}
