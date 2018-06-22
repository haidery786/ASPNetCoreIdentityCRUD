import { Injectable, Inject } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {UserService} from './shared/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate { 
constructor (private userservice:UserService, private router:Router)
{}

canActivate(){
    if(!this.userservice.isLoggedIn()){
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}