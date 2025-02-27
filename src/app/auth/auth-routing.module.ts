import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path:'', component: LoginComponent, pathMatch:"full"},
  { path:'forgot-password',component:ForgotPasswordComponent,pathMatch:'full'},
  { path:'login',component:LoginComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
