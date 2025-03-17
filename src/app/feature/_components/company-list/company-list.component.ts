import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MasterService } from '../../_services/master.service';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { Company } from '../../models';
import { PDatatableModule } from "../../../shared/p-datatable/p-datatable.module";
import { IpTableSetting, PTableActionTriggerEnum, PTableColHeaderKeys, PTableColumnTypeEnum } from '../../../shared/p-datatable/p-table';
import { DEFAULT_VALUES } from '../../../constants';
import { PDatatableComponent } from '../../../shared/p-datatable/p-datatable.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [PrimengModule, PDatatableModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
  providers:[ConfirmationService]
})
export class CompanyListComponent implements OnInit, OnDestroy {
  @ViewChild('dataTable') dataTable!: PDatatableComponent;
  private unsubscribe: Subject<void> = new Subject<void>();
  companyVO!: Company[];
  paging: { page?: number; size?: number; totalRecords?: number; searchText?: string; pageNumber?: number } = {};
  tableId = "company-list";
  sortField = "company_id";
  setting!: IpTableSetting;
  columnKeys: PTableColHeaderKeys[] = [
    {
      header: 'Company Code',
      field: 'company_code',
      type: 'default',
      width: '10%',
      sortable: true
    },
    {
      header: 'Company Name',
      field: 'company_name_eng',
      type: 'default',
      width: '10%',
      sortable: true
    },
    {
      header: 'Address',
      field: 'address',
      type: 'default',
      width: '20%',
      sortable: true
    },
    {
      header: 'City',
      field: 'city',
      type: 'default',
      width: '10%',
      sortable: true
    },
    {
      header: 'Email',
      field: 'email',
      type: 'default',
      width: '10%',
      sortable: true
    },
    {
      header: 'Actions',
      field: 'Actions',
      type: 'actionButton',
      sortable: false,
      width: '10%',
      icon: '',
      selectOptions: [
        { action: 'flag', label: 'Flag', icon: 'pi pi-check', },
        { action: 'edit', label: 'Edit', icon: 'pi pi-pen-to-square' },
        { action: 'delete', label: 'Delete', icon: 'pi pi-trash' }
      ]
    }
  ];
  constructor(
    private _masterService: MasterService,
    private _toastr: ToastrService,
    private _confirmationService: ConfirmationService,
  ) {

  }
  ngOnInit(): void {
    this.paging.page = DEFAULT_VALUES.PAGE_NUMBER;
    this.paging.size = DEFAULT_VALUES.PAGE_SIZE;
    this.loadCompanyList();
  }

  loadCompanyList() {
    this._masterService
      .getCompanyList()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result: any) => {
        this.paging.totalRecords = result.data.length || [];
        this.companyVO = result.data;
      }, (err) => {
        console.log(err);
      });
  }

  ngOnDestroy(): void {
    this.paging.page = DEFAULT_VALUES.PAGE_NUMBER;
    this.paging.size = DEFAULT_VALUES.PAGE_SIZE;
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  performBtnAction(event: any) {
    console.log(event.action, event.row);
    switch (event.action) {
      case 'Edit':

        break;
      case 'Flag':
        this.updateStatus(event.row);
        break;
      case 'Delete':
        this.confirmPopup(event, event.row);
        break;
    }
  }

  updateStatus(rows: any) {
    const flag = { flag: (rows.flag === 1) ? 0 : 1 };
    this._masterService.updateCompanyStatus(rows.company_id, flag).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
      if (res?.affectedRows > 0) {
        this._toastr.success("Status has been updated Successfully", 'Success');
        this.loadCompanyList();
      }
    })
  }

  confirmPopup(event: any, row: any){
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      accept: () => {
        this.deleteCompany(event,row);
      },
      reject: () => {
        //this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  deleteCompany(event: any, row: any) {
    this._masterService.removeCompany(row.company_id).pipe(takeUntil(this.unsubscribe)).subscribe((res)=>{
      console.log(res);
      this._toastr.success("Company details has been removed Successfully", 'Success');
    })
  }
}
