import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoadingComponent } from './_components/loading/loading.component';


@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[LoadingComponent]
})
export class CoreModule { }
