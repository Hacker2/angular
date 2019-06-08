import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyDiscountDisplayComponent } from "./discountDisplay.component";
import { MyDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MyDiscountDisplayComponent,
    MyDiscountEditorComponent,
    PaDiscountPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DiscountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
