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
      let token = localStorage.getItem('token');
      this.token = token;
    }

  isAuthenticate(): boolean {
    return this.token != null;
  }

  registerUser(user: User): Observable<any>{
    console.log(JSON.stringify(user));
    return this.http.post(this.api.getUrlBase() + "account/register", JSON.stringify(user), this.api.getOptions())
                    .pipe(catchError(this.handleError));
  }

  login(user: User): Observable<any>{
    return this.http.post(this.api.getUrlBase() + 'auth/login', JSON.stringify(user), this.api.getOptions())
                    .map((res:Response) => {
                    let token = res['Authorization'];
                    if (token) {
                        this.token = token;
                        localStorage.setItem('token', token);
                    } 
                    return res;})
                    .pipe(catchError(this.handleError));
  }

  logout(){
    this.token = null;
    localStorage.removeItem('token');
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

  getAuthentication(options) {
    options.headers.append('Authorization', this.token );
    return options;
  }
}
  