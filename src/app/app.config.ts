import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthService } from './auth/services/auth.service';
import { AuthInterceptor } from './auth/guards/auth.interceptor';
import { provideToastr } from 'ngx-toastr';
import { LoadingInterceptor } from './auth/guards/loading.interceptor';
import { ErrorsInterceptor } from './auth/guards/error.interceptor';

/* export const appConfig:ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNoopAnimations(),
    AuthService,
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useValue: AuthInterceptor, multi: true },
    /* provideHttpClient(
      withInterceptors([AuthInterceptor])
    ) * /
  ]
}; */
export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideNoopAnimations(), 
      provideToastr(),
      provideHttpClient(withInterceptorsFromDi()),
      { provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
      { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
      { provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true},
    ]
};
/* export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNoopAnimations()]
}; */
