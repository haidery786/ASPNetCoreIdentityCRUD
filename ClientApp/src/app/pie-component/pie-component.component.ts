import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pie-data',
  templateUrl: './pie-component.component.html',
  styleUrls: ['./pie-component.component.css']
})
export class PieComponentComponent {

  public pies:  Pie[];

  public forecasts: WeatherForecast[];

   constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
   http.get<Pie[]>('api/SampleData/AllPies').subscribe(result => {
     this.pies = result;
   }, error => console.error(error));
 }

    //   constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //   http.get<Pie[]>(baseUrl + 'api/PieData/GetAllPies').subscribe(result => {
    //     this.pies = result;
    //   }, error => console.error(error));
    // }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
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




