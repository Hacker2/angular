import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAttrDirective } from "./attr6.directive";
import { MyInpAttrDirective } from "./attr8.directive";

@NgModule({
  declarations: [
    AppComponent,
    MyAttrDirective,
    MyInpAttrDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
