import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';
import{ Pie } from '../Models/pie';
import {PieService} from '../dataServices/pie.service';


@Component({
  selector: 'app-pie-add',
  templateUrl: './pie-add.component.html',
  styleUrls: ['./pie-add.component.css']
})


export class PieAddComponent implements OnInit {

  //public pie: Pie;

  added:boolean = false;

   pie = <Pie> {};

 
  imageUrls = ['https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg', 
            'https://gillcleerenpluralsight.blob.core.windows.net/files/blueberrycheesecake.jpg',
            'https://gillcleerenpluralsight.blob.core.windows.net/files/cheesecake.jpg', 
            'https://gillcleerenpluralsight.blob.core.windows.net/files/cherrypie.jpg'];

   constructor(http: HttpClient ,private activatedRoute: ActivatedRoute, private pieService: PieService) { 
    
    

   }

  ngOnInit() {

  }

  add(pie:Pie): void {   
    //debugger;
    //console.log(pie);
    this.pieService.addPie(pie).subscribe(result => {
      this.added = true;
    }, error => console.error(error));
  }

}
