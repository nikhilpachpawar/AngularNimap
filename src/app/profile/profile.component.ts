import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  constructor(private ss: StudentService) {}
  students: Array<Student>;
  ngOnInit(): void {
    this.ss.getStudent().subscribe((u: Student[]) => {
      this.students = u;
    });
  }

  onDelete(id: string) {
    console.log(id);
    this.ss.deleateDetails(id).subscribe();
    window.location.reload();
  }
}
