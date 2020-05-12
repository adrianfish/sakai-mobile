import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.page.html',
  styleUrls: ['./toollist.page.scss'],
})
export class ToollistPage implements OnInit {

  private course;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.course = this.dataService.getCourseMap().get(this.dataService.getCourseId());
  }

}
