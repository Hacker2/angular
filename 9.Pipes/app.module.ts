import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPipe } from "./custom.pipe";
import { Custom2Pipe } from "./custom2.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    Custom2Pipe,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
