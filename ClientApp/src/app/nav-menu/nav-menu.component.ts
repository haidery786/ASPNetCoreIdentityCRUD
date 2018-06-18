import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import{UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  isExpanded = false;
  status:boolean;
  subscription:Subscription;

  constructor(private userService:UserService){
  }

  logout(){
    this.userService.logout();
  }

  ngOnInit(){
    this.subscription =this.userService.authNavStatus$.subscribe(status => this.status=status );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
