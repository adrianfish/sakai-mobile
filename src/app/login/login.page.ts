import { Component, OnInit } from '@angular/core';
import { SakaiService } from '../services/sakai.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public sakaiService: SakaiService) { }

  ngOnInit() {
  }

}
