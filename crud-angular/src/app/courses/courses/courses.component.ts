import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses$: Observable <Course[]>;
  public displayedColumns = [
    'name',
    'category'
  ];

  constructor(private coursesService: CoursesService) {
    // this.courses = [] could be initialized here instead
    this.courses$ = this.coursesService.list(); // is here now due to lack of initialization on declaration
   }

  ngOnInit(): void {

  }

}
