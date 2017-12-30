import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class ServerService {
  URL_BASE: string = "http://localhost:8080/";
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  private options = { headers: this.headers };

  getUrlBase(): string{
    return this.URL_BASE;
  }

  getOptions(){
    return this.options;
  }
  
  handleError (error: any) {
    console.log(error);
    let errMsg = (error.error && error.error.message) ? error.error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

}
