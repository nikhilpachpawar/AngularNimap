import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder, private ss: StudentService) {}

  data: FormGroup;

  ngOnInit(): void {
    this.data = this.fb.group({
      img:[],
      firstName: [],
      lastName: [],
      email: [],
      mobile: [],
      age: [],
      state: [],
      country: [],
      address: [],
    });
  }

  onSubmit() {
    this.ss.saveStudent(this.data.value).subscribe();
    alert('Student save');
    console.log(this.data.value);
  }
}
