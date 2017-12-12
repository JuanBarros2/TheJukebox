import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  private user: User;

  constructor(
    private router: Router, 
    private http: HttpClient) { }

  isAuthenticate(): boolean {
    return this.user != null;
  }

  registerUser(user: User){
    this.user = user;
  }

  login(user: User){
    this.user = user;
    const loginUrl = 'login';
    this.http.post<User>(loginUrl, user)
      .pipe(catchError(this.handleError(loginUrl, [])));
    this.router.navigate(['/artistas']);
  }

  logout(){
    this.user = null;
    this.router.navigate(['/login']);
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
  