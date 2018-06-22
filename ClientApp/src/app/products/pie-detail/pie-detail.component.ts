import { Component, OnInit, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Router, ActivatedRoute, Params} from '@angular/router';
import{ Pie } from '../Models/pie';
import {PieService} from '../dataServices/pie.service';


@Component({
  selector: 'app-pie-detail',
  templateUrl: './pie-detail.component.html',
  styleUrls: ['./pie-detail.component.css']
})

export class PieDetailComponent implements OnInit {

  public pie: Pie;

  constructor(private pieService : PieService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){

    this.activatedRoute.params.subscribe((params: Params)=> {
      let Id = params['id'];
      this.getPie(Id);

    })

  }

  getPie(id: number): void {
    this.pieService.getPie(id)
        .subscribe(pie => this.pie = pie);

        
  }
    
}


