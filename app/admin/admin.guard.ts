import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService } from '../login/login.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate{

    constructor(private loginService: LoginService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         if (this.loginService.isUserAdmin()){
            return true;    
         } else {
            alert ("Сюда может заходить только администратор")
            return false;
         }
    
}
}