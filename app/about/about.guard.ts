import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {LoginService } from '../login/login.service';

@Injectable()
    export class AboutGuard implements CanActivate{

        constructor(private loginService: LoginService) { }

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
            if (this.loginService.isUserLogged()){
                return true;    
             } else {
                alert ("Сюда может заходить только зарегистрированный Пользователь")
                return false;
             }
}
}