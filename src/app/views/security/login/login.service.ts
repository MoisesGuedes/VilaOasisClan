import { NotificationsService } from './../../../shared/messages/notifications.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private notificationsService: NotificationsService) { }

  accesscode: string = '65as4fd';

  isLoggedIn(): boolean {
    return true;
  }

  handleLogin(login): Observable<any> {
    console.log(login);
    if (login.accesscode !== this.accesscode) {
      this.notificationsService.notify('Credenciais erradas', 'danger');
    } else {
      login.userTag = login.userTag.replace('#', '%23');
      return this.http.get<any>(`${API}/players/${login.userTag}`);
    }
  }

}
