import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { NotificationsService } from '../notifications.service';
import { tap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        top: "-80px"
      })),
      state('visible', style({
        top: "10px"
      })),
      state('visible', style({})),
      transition('hidden => visible', animate('400ms 0s ease-in')),
      transition('visible => hidden', animate('400ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility: string = "hidden";
  messageTipe:string = 'default';
  message:string;
  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationService.notifier
      .pipe(
        tap(messageObj => {
          this.message = messageObj['message']
          this.messageTipe = messageObj['messageTipe'];
          this.snackVisibility = 'visible';
        }),
        switchMap(message => timer(5000))
      ).subscribe(timer => this.snackVisibility = 'hidden');
  }

  close() {
    this.snackVisibility = 'hidden';
  }

}
