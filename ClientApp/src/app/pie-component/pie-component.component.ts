import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PieService} from '../dataServices/pie.service';
import{ Pie } from '../Models/pie';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pie-data',
  templateUrl: './pie-component.component.html',
  styleUrls: ['./pie-component.component.css']
})
export class PieComponentComponent implements OnInit{

  public pies: Pie[];

  constructor(private pieService : PieService){}

  ngOnInit() {
    this.getPies();
  }
  getPies(): void {
    this.pieService.getPies()
        .subscribe(pies => this.pies = pies);
  }

  delete(pie: Pie): void {
    this.pies = this.pies.filter(p => p !== pie);
    this.pieService.deletePie(pie).subscribe();
  }

}







