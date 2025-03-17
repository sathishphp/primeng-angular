import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PDatatableComponent } from './p-datatable.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [PDatatableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PrimengModule
  ],
  exports:[PDatatableComponent]
})
export class PDatatableModule { }
