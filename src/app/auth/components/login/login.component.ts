import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  requestData$!: Observable<any>;
  users:Employee[] = [];
  data: any[] = [];
  selectedUser: any | undefined;
  submitted = false;
  isLoading: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router:Router
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
    this.authService.getEmployeesList().subscribe((res:any)=>{
      this.users = res.data || [];
    })
  }

  login() {
    this.submitted = true;
    console.log(this.loginForm);
    const {username,password} = this.loginForm.value;
    if(!username && !password){
      return;
    }

    this.authService.login(username.employee_code,password).subscribe((res)=>{
      if(res.data.length > 0){
        this.router.navigate(['/dashboard']);
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
