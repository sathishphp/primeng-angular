import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  requestData$!: Observable<any>;
  users!: any[];
  selectedUser: any | undefined;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {

  }
  ngOnInit(): void {
    this.loadUsers();
    this.requestData$ = this.authService.userData$;
    this.loginFormValidation();
  }

  get f() {
    return this.loginForm.controls;
  }

  loginFormValidation() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loadUsers() {
    this.users = [
      { name: 'Intes', id: 1 },
      { name: 'Admin', code: 2 },
      { name: 'MD', code: 3 },
    ];
  }

  login() {
    this.submitted = true;
    console.log(this.loginForm.value)
    //this.authService.login()
  }
}
