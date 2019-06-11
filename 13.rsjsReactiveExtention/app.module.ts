import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IteratorDirective } from './iterator.directive';

@NgModule({
  declarations: [
    AppComponent,
    IteratorDirective,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
