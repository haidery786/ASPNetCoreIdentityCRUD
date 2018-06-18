import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import{ LoginVm } from '../Models/loginVm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  login = <LoginVm> {};


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() { }

  loginUser(login:LoginVm) {
    
    this.userService.login(login.username, login.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['home']);
        }
      });
  }
}

