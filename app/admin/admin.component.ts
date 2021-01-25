import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginstring:string = '';
  password:string = ''
  constructor() { }

  ngOnInit(): void {
  }
  onReg(log: any,pass: any ){
    let user = {
      "login": log,
      "password": pass
    }
    let jsonUser = JSON.stringify(user)
    localStorage.setItem("user", jsonUser)
  }

}
