import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { IpTableSetting, PTableActionTriggerEnum, PTableColHeaderKeys } from './p-table';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-p-datatable',
  templateUrl: './p-datatable.component.html',
  styleUrl: './p-datatable.component.scss'
})
export class PDatatableComponent implements OnInit,OnDestroy{
  @ViewChild('dt') dataTable!: Table;
  @Input('tableId') set tableRef(id: string) {
    this.tableId = id;
  }
  tableId!:String;
  @Input('pageLength') totalRecords!: any;
  @Input() pageNumber:any = 0;
  @Input('columnKeys') set headerCols(cols: PTableColHeaderKeys[]) {
    this.columnKeys = cols;
  }
  @Input('data') set dataProps(d: any[]) {
    this.data = d;
  }
  data: any[] = [];
  columnKeys!: PTableColHeaderKeys[];
  @Output() loadRecord: EventEmitter<any> = new EventEmitter();
  @Input() rowsPerPageOptions:any = [10,25,50,100];
  @Input() rows = 10;
  @Input() sortOrder = -1;
  @Input() individualColFilter = true;
  @Input() sortField!:any;
  @Output() performGlobalAction: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
      
  }

  loadRecords(event: LazyLoadEvent) {
    if(this.dataTable && this.dataTable.lazy) {
      this.loadRecord.emit(event);
    }
  }
  
  @Input() pTableSetting!: IpTableSetting;
  @Output() onActionColumnClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}


  performAction(action:any,row:any){
    this.performGlobalAction.emit({action,row});
  }
  
  hasActionColumn() {
    return (
      !!this.pTableSetting?.actionColumns &&
      this.pTableSetting.actionColumns.length > 0
    );
  }

  onClickActionColumn(action: PTableActionTriggerEnum, row: any) {
    this.onActionColumnClicked.emit({ action: action, row: row });
    // output event emitter diye action ar row zabe . okhane action er upor modal open or onno page e zabe
  }
  ngOnDestroy(): void {
      
  }
}
