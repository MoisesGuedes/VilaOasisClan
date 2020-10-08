import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifier = new EventEmitter<Object>();

  notify(message: string, messageTipe:string = 'default') {

    let messageObj = {
      message,
      messageTipe
    }

    messageObj.message = message;
    messageObj.messageTipe = messageTipe;
    this.notifier.emit(messageObj);
  }

}
