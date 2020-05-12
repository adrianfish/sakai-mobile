import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private courseId = ""; 
  private courses = [];
  private courseMap: Map<String, any>;

  constructor() { }

  getCourseId() {
    return this.courseId;
  }

  setCourseId(courseId) {
    this.courseId = courseId;
  }

  setCourses(courses) {

    this.courses = courses;
    this.courseMap = new Map(courses.map(c => [c.id, c]));
  }

  getCourseMap() {
    return this.courseMap;
  }
}
