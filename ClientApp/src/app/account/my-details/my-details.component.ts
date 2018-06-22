import { Component, OnInit } from '@angular/core';
import {MyDetailsService} from '../../shared/services/mydetails.service';
import {MyDetails} from '../../shared/models/mydetails';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  public myDetails: MyDetails;

  constructor(private mydetailsService: MyDetailsService) { }

  ngOnInit() {
    this.getMyDetails();
  }

  getMyDetails():void{
    this.mydetailsService.getMyDetails()
        .subscribe(mydetails => this.myDetails = mydetails)
  }

}
