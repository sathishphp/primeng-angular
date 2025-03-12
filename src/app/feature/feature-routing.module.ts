import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './_components/company/company.component';
import { CompanyListComponent } from './_components/company-list/company-list.component';

const routes: Routes = [
  { path: 'company-create', component: CompanyComponent, pathMatch: "full" },
  { path: 'company-list', component: CompanyListComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
