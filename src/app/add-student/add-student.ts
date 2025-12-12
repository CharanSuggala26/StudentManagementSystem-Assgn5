import { Component } from '@angular/core';
import { StudentService } from '../Services/student-service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-add-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css'],
})
export class AddStudent {
  name = '';
  className = '';
  gender = '';
  hasHobby = false;
  hobby = '';
  favoriteSubject = '';

  classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9'];
  subjects = ['Math', 'Science', 'English', 'Data Structures', 'History'];

  submitting = false;

  constructor(private studentService: StudentService, private router: Router) {}

  onHasHobbyChange() {
    if (!this.hasHobby) {
      this.hobby = '';
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const payload = {
      name: this.name,
      className: this.className,
      gender: this.gender,
      hobby: this.hasHobby ? (this.hobby || 'No hobby') : 'No hobby',
      favoriteSubject: this.favoriteSubject || '',
    };

    this.studentService.addStudent(payload);

    this.submitting = false;
    this.router.navigate(['/students']);
  }

  onCancel() {
    this.router.navigate(['/students']);
  }
}