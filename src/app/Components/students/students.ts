import { Component } from '@angular/core';
import { Student } from '../../Models/Student';
import { StudentService } from '../../Services/student-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-students',
  imports: [CommonModule, RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  studList: Student[] = [];

  constructor(private studentService: StudentService) {
    this.studList = this.studentService.getStudents();
  }



}
