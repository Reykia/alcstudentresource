import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    this.studentService.getAllStudents().then((res) => {
      this.students = res;
    }, (err) => {
      console.log(err);
    });
  }

}