import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private inj: Injector){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.inj.get(AuthService);
    const token = auth.getToken();
    if(token){
      request = request.clone({
      setHeaders: {
        Authorization: token
      }});
    }
    
    return next.handle(request);
  }
}