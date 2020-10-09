import { LoginService } from '../views/security/login/login.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { IconsModule } from './icons/icons.module';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationsService } from './messages/notifications.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../views/security/auth.interceptor';

@NgModule({
  declarations: [InputComponent, SnackbarComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    InputComponent,
    IconsModule,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        NotificationsService,
        LoginService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    }
  }
}
