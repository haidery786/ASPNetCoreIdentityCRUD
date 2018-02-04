import { Injectable } from '@angular/core';
import{ Pie } from '../Models/pie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap  } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PieService{

  private piesUrl = 'api/PieData';  // URL to web api
  constructor(private http:HttpClient) { }

   ngOnInit() {
    this.getPies();
  }

  /** GET pies from the server */
  getPies (): Observable<Pie[]> {
    return this.http.get<Pie[]>(this.piesUrl)
    .pipe(
      catchError(this.handleError('getPies', []))
    );
  }

  /** GET pie by id. Will 404 if id not found */
  getPie(id: number): Observable<Pie> {
    const url = `${this.piesUrl}/${id}`;
    return this.http.get<Pie>(url).pipe(
      catchError(this.handleError<Pie>(`getPie id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
