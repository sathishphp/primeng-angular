import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './_components/company/company.component';
import { CompanyListComponent } from './_components/company-list/company-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'company-list', pathMatch: "full" },
  { path: 'company-create', component: CompanyComponent, pathMatch: "full" },
  { path: 'company-create', component: CompanyComponent, pathMatch: "full" },
  { path: 'company-list', component: CompanyListComponent, pathMatch: "full" },
  { path: 'company-edit/:id', component: CompanyComponent, pathMatch: 'full' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
