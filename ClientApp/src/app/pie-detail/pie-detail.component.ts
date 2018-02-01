import { Component, OnInit, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-pie-detail',
  templateUrl: './pie-detail.component.html',
  styleUrls: ['./pie-detail.component.css']
})

export class PieDetailComponent  {

  public pie: Pie;
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string , private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((params: Params) => {
      let Id = params['id'];
      console.log(Id);   
      http.get<Pie>(baseUrl + 'api/PieData/GetPieDetail'+Id).subscribe(result => {
        this.pie = result;
        //console.log(baseUrl + 'api/PieData/GetAllPies');
      }, error => console.error(error));

    });
  }
  
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
