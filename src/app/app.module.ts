import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { HttpClientModule }    from '@angular/common/http';

FusionChartsModule.fcRoot(FusionCharts, Charts)
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import { MultipleOrderComponent } from './multiple-order/multiple-order.component';
import { ReportsComponent } from './reports/reports.component';
import { SingleOrderServicesService } from './single-order-services.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SingleOrderComponent,
    MultipleOrderComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FusionChartsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [SingleOrderServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
