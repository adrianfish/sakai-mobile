import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SakaiService {

  public url: String = "http://localhost";
  public username: String = "";
  public password: String = "";
  public loginResponse: String = "";

  constructor() { }

  public async login() {

    fetch(`${this.url}/direct/session`, {method: "POST", body: new URLSearchParams(`_username=${this.username}&_password=${this.password}`)})
      .then(r => {
        if (!r.ok) {
          throw new Error("Failed to login");
        }
        return r.text();
      })
      .then(t => this.loginResponse = t)
      .catch (error => this.loginResponse = "Failed to login");
  }
}
