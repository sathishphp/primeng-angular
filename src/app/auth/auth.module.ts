import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AuthService } from './services/auth.service';
import { CoreModule } from '../core/core.module';

const modules= [
  LoginComponent,
  ForgotPasswordComponent,
  ChangePasswordComponent,
];
@NgModule({
  declarations: [...modules],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    CoreModule,
    AuthRoutingModule
  ],
  exports:[...modules],
  providers:[AuthService]
})
export class AuthModule { }
