import { LoginService } from './login/login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  accessToken:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRhYzhiOWJhLTQzY2QtNGM5OC1iNDhiLTYzYmU1NGJlY2U0MyIsImlhdCI6MTYwMjIwNzgyOCwic3ViIjoiZGV2ZWxvcGVyL2M2YzM2ODc5LWJkMDktZGQ3YS02YTEzLThlM2RmMDk5NDBlYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4OS44Mi4xMTAuMTY1Il0sInR5cGUiOiJjbGllbnQifV19.XUnRZXorZ_pDN0OJljLzHHvaDuvSIFzGPsCsrpsN9tOswOYb85CKDeg2vUIjEk5VtNOKjsxTMugnQc8mNUfgNA';

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const loginService = this.injector.get(LoginService);

    if(loginService.isLoggedIn()){
      const authRequest = request.clone(
        {setHeaders: {'authorization':`Bearer ${this.accessToken}`}});
      return next.handle(authRequest);
    }else{
      return next.handle(request);
    }
  }
}
