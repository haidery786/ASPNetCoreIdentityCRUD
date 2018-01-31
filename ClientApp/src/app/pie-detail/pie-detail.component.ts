import { Component, OnInit, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-pie-detail',
  templateUrl: './pie-detail.component.html',
  styleUrls: ['./pie-detail.component.css']
})

export class PieDetailComponent implements OnInit {

  public pie: Pie;

  constructor(@Inject('BASE_URL') baseUrl: string ,private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        let Id = params['id'];

         this.http.get<Pie>('api/PieData/GetPieDetail/'+Id).subscribe(result => {
         this.pie = result;

         console.log(Id);
      });
  }
  
    
  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //   http.get<Pie>(baseUrl + 'api/PieData/GetPieDetail/${id}').subscribe(result => {
  //     this.pie = result;
      
  //   }, error => console.error(error));
  // }

}

interface Pie {
  Id: number;
  Name : string; 
  ShortDescription: string; 
  LongDescription: string; 
  Price: number; 
  ImageUrl: string; 
  ImageThumbnailUrl: string; 
  IsPieOfTheWeek: boolean; 
  IsInStock: boolean;
 
}
