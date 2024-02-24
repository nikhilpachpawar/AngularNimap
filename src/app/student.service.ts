import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  saveStudent(student: Student) {
    return this.http.post('http://localhost:3000/Student', student);
  }
  getStudent() {
    return this.http.get('http://localhost:3000/Student');
  }

  deleateDetails(id: string) {
    return this.http.delete('http://localhost:3000/Student/' + id);
  }
}
