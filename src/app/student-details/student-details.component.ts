import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: any;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.getStudentDetail(this.route.snapshot.params['id']);
  }

  getStudentDetail(id) {
    this.studentService.showStudent(id).then((res) => {
      this.student = res;
      console.log(this.student);
    }, (err) => {
      console.log(err);
    });
  }

  deleteStudent(id) {
  this.studentService.deleteStudent(id).then((result) => {
    this.router.navigate(['/students']);
  }, (err) => {
    console.log(err);
  });
}

}