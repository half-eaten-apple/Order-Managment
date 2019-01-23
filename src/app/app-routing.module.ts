import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SingleOrderComponent} from './single-order/single-order.component';
import {MultipleOrderComponent} from './multiple-order/multiple-order.component';
import {ReportsComponent} from './reports/reports.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  { path: 'singleOrder', component:  SingleOrderComponent},
  { path: 'multipleOrder', component: MultipleOrderComponent},
  { path: 'reports', component:  ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
