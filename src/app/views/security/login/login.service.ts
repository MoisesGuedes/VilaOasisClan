import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isLoggedIn():boolean {
    return true;
  }

  login(tag:string, accesscode:string):Observable<any> {
    return
  }

}
