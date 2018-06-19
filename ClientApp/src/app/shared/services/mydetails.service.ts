import {Injectable} from '@angular/core';
import {MyDetails} from '../../shared/models/mydetails';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ConfigService } from '../../shared/utils/config.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'applicaiton/json',
        'Authorization': 'my-auth-token'
    })    
}

@Injectable()

export class MyDetailsService  {

baseUrl: string = ''; 


constructor(private http: HttpClient, private configService: ConfigService) {
   
    this.baseUrl = configService.getApiURI();
}

 getMyDetails(): Observable<MyDetails>{

    
    let authToken = localStorage.getItem('auth_token');
    httpOptions.headers = httpOptions.headers.set('Authorization' ,`Bearer ${authToken}`);

    return this.http.get<MyDetails>(this.baseUrl + "/dashboard/home", httpOptions)
         .pipe(            
            catchError(this.handleError('getMyDetails', null))
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
