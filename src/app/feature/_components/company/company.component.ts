import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../_services/master.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subject, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit, OnDestroy {
  companyForm!: FormGroup;
  submitted = false;
  id!: string;
  isAddMode!: boolean;
  private unsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private _toastr: ToastrService,
    private _masterService: MasterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.companyFormValidation();
    if (!this.isAddMode) {
      this._masterService.getCompanyListById(this.id)
        .pipe(first())
        .subscribe((x: any) => {
          this.companyForm.patchValue(x.data);
        });
    }
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
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.companyForm.invalid) {
      return;
    }
    if (this.isAddMode) {
      this.saveCompany();
    } else {
      this.updateCompany();
    }
  }

  saveCompany(){
    this._masterService.saveCompany(this.companyForm.value).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
      if (res && res.length > 0) {
        this._toastr.success("Company Details Saved Successfully.", 'Success');
        this.gotoList();
      }
      if (res.status === 400) {
        this._toastr.error(res.message, 'Error');
      }
    }, (err) => {
      this._toastr.error(err.message, 'Error');
    });
  }
 
  updateCompany(){
    this._masterService.updateCompany(this.id,this.companyForm.value).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
      if(res && res.changedRows > 0){
        this._toastr.success("Company Details Updated Successfully.", 'Success');
        this.gotoList();     
      }
      if(res && res.changedRows === 0){
        this._toastr.info("No changes made.", 'info');
        this.gotoList();     
      }
    });
  }

  gotoList() {
    this.router.navigate(['/master/company-list']);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
