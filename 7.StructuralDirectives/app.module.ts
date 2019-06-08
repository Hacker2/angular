import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyIfDirective } from './myif.directive';
import { IteratorDirective } from './iterator2.directive';
import { LiColor } from './liColor.directive';
import { UlColor } from './ulColor.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyIfDirective,
    IteratorDirective,
    LiColor,
    UlColor
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
