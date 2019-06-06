import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyIfDirective } from './myif.directive';
import { IteratorDirective } from './iterator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyIfDirective,
    IteratorDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
