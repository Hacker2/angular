import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import { Test2Component } from './test2/test2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowparamsComponent } from './showparams/showparams.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    Test2Component,
    NotfoundComponent,
    ShowparamsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
