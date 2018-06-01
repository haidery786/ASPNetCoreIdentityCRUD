import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private auhenticationService: AuthenticationService) { }

  ngOnInit() { }

  loginUser() {
    
    this.auhenticationService.login(this.username, this.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['home']);
        }
      });
  }
}

