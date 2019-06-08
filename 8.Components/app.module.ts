import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Test2Component } from './test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4.component';
import { Test5Component } from './test5.component';
import { Test6Component } from './test6.component';
import { Test7Component } from './test7.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test6Component,
    Test7Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
