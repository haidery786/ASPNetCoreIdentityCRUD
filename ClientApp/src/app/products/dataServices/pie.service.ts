import { Injectable } from '@angular/core';
import{ Pie } from '../Models/pie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError  } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PieService{

  private piesUrl = 'api/PieData';  // URL to web api

  constructor(private http:HttpClient) { }

   ngOnInit() {
    this.getPies();
  }

  /** GET pies from the server */
  getPies (): Observable<Pie[]> {

    let authToken = localStorage.getItem('auth_token');  
   
    httpOptions.headers =
    httpOptions.headers.set('Authorization', `Bearer ${authToken}`);

   // debugger;
    return this.http.get<Pie[]>(this.piesUrl, httpOptions)
    .pipe(
      catchError(this.handleError('getPies',[]))
    );
  }

  /** GET pie by id. Will 404 if id not found */
  getPie(id: number): Observable<Pie> {
    const url = `${this.piesUrl}/${id}`;
    return this.http.get<Pie>(url).pipe(
      catchError(this.handleError<Pie>(`getPie id=${id}`))
    );
  }

  /** PUT: update pie on the server */

  updatePie (pie: Pie): Observable<Pie> {
    httpOptions.headers =
      httpOptions.headers.set('Content-Type', 'application/json');

    //  debugger;
    return this.http.put<Pie>(this.piesUrl+'/'+pie.id, pie, httpOptions)
      .pipe(
        catchError(this.handleError('updatePie', pie))
      );
  }

  /** DELETE: delete the pie from the server */
deletePie (pie: Pie | number): Observable<Pie> {
  const id = typeof pie === 'number' ? pie : pie.id;
  const url = `${this.piesUrl}/${id}`;
  debugger;
  return this.http.delete<Pie>(url, httpOptions).pipe(
    catchError(this.handleError<Pie>('deletePie'))
  );
}

  /** POST: add a new pie to the server */
  addPie(pie: Pie): Observable<Pie> {
    return this.http.post<Pie>(this.piesUrl, pie, httpOptions).pipe(
      catchError(this.handleError<Pie>('addPie'))
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
