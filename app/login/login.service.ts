import {Injectable} from '@angular/core';

 
@Injectable()
export class LoginService{
  
    private loginname: string=  "";
    isLogged:boolean=false;

      
    getLogin(): string {
        return this.loginname;
    }
    setLogin(name: string){
        alert("Пользователь" + name +"подключён");
        this.isLogged = true;
        this.loginname = name;

    }
    Logout(){
        alert("Пользователь отключился");
        this.isLogged = false;
        this.loginname = "";
    }
    isUserLogged(): boolean {
     return this.isLogged 
    }

    isUserAdmin(): boolean {
     return this.loginname==="admin" 
    }

}