import { Injectable } from '@angular/core';
import { StudentModel } from '../Models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: StudentModel[] = [
    new StudentModel( 1,'Sai Charan', 'Class 6', 'Male', 'Playing Cricket', 'Data Structures'),
  ];

  getStudents(): StudentModel[] {
    return this.students;
  }

  addStudent(s : any) {
    const nextId = this.students.length > 0 ? Math.max(...this.students.map(s => s.Id)) + 1 : 1;
    const student = new StudentModel(
      nextId,
      s.name,
      s.className,
      s.gender,
      s.hobby,
      s.favoriteSubject
    );
    this.students.push(student);
  }
}
