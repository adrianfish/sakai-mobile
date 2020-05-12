import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SakaiService {

  public url: String = "http://localhost";
  public username: String = "";
  public password: String = "";
  public loginResponse: String = "";

  constructor(private router: Router) { }

  public async login() {

    fetch(`${this.url}/direct/session`, {method: "POST", body: new URLSearchParams(`_username=${this.username}&_password=${this.password}`), cache: "no-cache", credentials: "include"})
      .then(r => {
        if (!r.ok) {
          throw new Error("Failed to login");
        }
        this.router.navigate(["/courselist"]);
      })
      .catch (error => this.loginResponse = "Failed to login");
  }

  public async getMyCourses() {

    return await fetch(`${this.url}/direct/site.json`, { cache: "no-cache", credentials: "include" })
      .then(r => r.json())
      .then(r => r["site_collection"]);
  }
}
