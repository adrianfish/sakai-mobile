import { Component, OnInit } from '@angular/core';
import { SakaiService } from '../services/sakai.service';
import { DataService } from '../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.page.html',
  styleUrls: ['./courselist.page.scss'],
})
export class CourselistPage implements OnInit {

  courses: any = [{},{},{}];

  constructor(public sakaiService: SakaiService, public dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.sakaiService.getMyCourses().then(courses => {
      this.courses = courses.map(c => ({id: c.id, title: c.title, description: c.description, subject: c.props.Subject}));
      this.dataService.setCourses(this.courses);
    });
  }

  viewCourse(event: any) {

    this.dataService.setCourseId(event.target.dataset.courseId);
    this.router.navigate(["/toollist"]);
  }

}
