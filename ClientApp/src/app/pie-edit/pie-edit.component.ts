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

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  pie1 = { id: 1, name: "Apple Pie", 
            shortDescription: "Our famous apple pies!", 
            longDescription: "Icing carrot cake jelly-o cheesecake. Sweet roll m…nish lemon drops. Brownie cupcake dragée gummies.", 
            price: 12.95,
            imageThumbnailUrl:"https://gillcleerenpluralsight.blob.core.windows.net/files/applepiesmall.jpg",
            imageUrl: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg" ,
            isInStock:false , isPieOfTheWeek:true

          }

          
  constructor(http: HttpClient ,private activatedRoute: ActivatedRoute, private pieService: PieService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params)=> {
      let Id = params['id'];
      this.getPie(Id);
    });

  }

  getPie(id:number) : void {
    this.pieService.getPie(id).subscribe(result => {
      this.pie = result;
      console.log(this.pie);
    }, error => console.error(error));
  }

}
