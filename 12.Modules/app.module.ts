import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyModule } from './mymodule/my.module';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

import { AppComponent } from './app.component';
import { App2Component } from './app2.component';


@NgModule({
  declarations: [
    AppComponent,
    App2Component,
  ],
  imports: [
    BrowserModule,
    MyModule,
    CustomerDashboardModule
  ],
  bootstrap: [AppComponent, App2Component]
})
export class AppModule { }
