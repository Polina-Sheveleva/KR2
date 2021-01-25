import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginstring:string = '';
  password:string = ''
  jsonAdmin : any;
  jsonUser : any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
   onLogin(log: any,pass: any ){

    if (log === "admin"){
      this.jsonAdmin = localStorage.getItem("admin")
      let admin = JSON.parse(this.jsonAdmin)
      if (admin["password"]===pass) 
      
     {this.loginService.setLogin(log)} 
      else {alert("Пароль не верен")}
    }else {
      this.jsonUser = localStorage.getItem("user")
      let user = JSON.parse(this.jsonUser)
      if (log===user["login"])  
      { if (pass === user["password"]){
        alert("Пользователь подключён");
       
      } else {alert("Пароль не верен")}
    }  
      else {alert("Логин не верен")}

      
  }

  }
  onLogout() {this.loginService.Logout()}
}
