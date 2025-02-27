import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components';
import { PrimengModule } from './primeng/primeng.module';

const modules = [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
];
@NgModule({
  declarations: [...modules],
  imports: [
    CommonModule,
    PrimengModule,
    SharedRoutingModule
  ],
  exports:[...modules]

})
export class SharedModule { }
