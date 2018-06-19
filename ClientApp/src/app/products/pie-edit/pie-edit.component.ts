import { Component, OnInit, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';
import{ Pie } from '../Models/pie';
import {PieService} from '../dataServices/pie.service';

@Component({
  selector: 'app-pie-edit',
  templateUrl: './pie-edit.component.html',
  styleUrls: ['./pie-edit.component.css']
})
export class PieEditComponent {

  public pie: Pie;

  updated:boolean = false;  
  
  imageUrls = ['https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg', 
  'https://gillcleerenpluralsight.blob.core.windows.net/files/blueberrycheesecake.jpg',
  'https://gillcleerenpluralsight.blob.core.windows.net/files/cheesecake.jpg', 
  'https://gillcleerenpluralsight.blob.core.windows.net/files/cherrypie.jpg'];

  
  constructor(http: HttpClient ,private activatedRoute: ActivatedRoute, private pieService: PieService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params)=> {
      let Id = params['id'];
      this.getPie(Id);
    });

  }

  save(): void {
   
    let pie1: Pie = <Pie>this.pie;
    this.pieService.updatePie(pie1).subscribe(result => {
      this.pie = result;
      this.updated = true;
    }, error => console.error(error));
  }

  getPie(id:number) : void {
    this.pieService.getPie(id).subscribe(result => {
      this.pie = result;
     // console.log(this.pie);
    }, error => console.error(error));
  }

  

}
