import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'
import { Response } from '@angular/http';
import { ServerService } from '../server.service';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class AuthService {
  private token: string;

  constructor(
    private router: Router, 
    private http: HttpClient,
    private api: ServerService) { 
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
    }

  isAuthenticate(): boolean {
    return this.token != null;
  }

  registerUser(user: User): Observable<any>{
    return this.http.post(this.api.getUrlBase() + "account/register", JSON.stringify(user), this.api.getOptions())
                    .pipe(catchError(this.handleError));
  }

  login(user: User): Observable<any>{
    return this.http.post(this.api.getUrlBase() + 'auth/login', user)
                    .map((res:Response) => {console.log("ué, funfous");
                    let token = res.headers.has("Authentication") && res.headers.get("Authentication");
                    if (token) {
                        this.token = token;
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    } 
                    return res;})
                    .pipe(catchError(this.handleError));
  }

  logout(){
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  private handleError (error: any) {
    let errMsg = (error.error && error.error.message) ? error.error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getAuthentication() {
    let result = this.api.getOptions();
    result.headers.append('Authorization', this.token );
    return result;
  }
}
  