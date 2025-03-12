import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MasterService } from '../../_services/master.service';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { Company } from '../../models';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit, OnDestroy{
  private unsubscribe: Subject<void> = new Subject<void>();
  companyVO!: Company[];
  //company:Company = [];
  constructor(
    private _masterService:MasterService
  ){

  }
  ngOnInit(): void {
      this.loadCompanyList();
  }

  loadCompanyList(){
    this._masterService
        .getCompanyList()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((result:any)=>{
          this.companyVO = result.data;
        },(err)=>{
          console.log(err);
        });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
