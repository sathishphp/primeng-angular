import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../_services/master.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit,OnDestroy {
  companyForm!: FormGroup;
  submitted = false;
  private unsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private fb: FormBuilder, 
    private _toastr: ToastrService,
    private _masterService:MasterService, 
    private router:Router
  ) { }
  
  ngOnInit(): void {
    this.companyFormValidation();
  }
  
  get f() {
    return this.companyForm.controls;
  }

  companyFormValidation() {
    this.companyForm = this.fb.group({
      company_code: ['', [Validators.required]],
      company_name_eng: ['', [Validators.required]],
      address: ['', []],
      city: ['', []],
      pin_code: ['', []],
      email: ['', [Validators.required,Validators.email]],
    });
  }
  saveCompany() {
    this.submitted = true;
    if(this.companyForm.invalid){
      return;
    }
  this._masterService.saveCompany(this.companyForm.value).subscribe((res:any)=>{
      if(res && res.length > 0){
        this._toastr.success("Company Details Saved Successfully.",'Success');
        this.gotoList();
      }
      if(res.status === 400){
        this._toastr.error(res.message,'Error');
      }
    },(err)=>{
      this._toastr.error(err.message,'Error');
    });
  }

  gotoList(){
    this.router.navigate(['/master/company-list']);
  }

  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
