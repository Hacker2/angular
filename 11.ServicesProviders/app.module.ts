import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyDiscountDisplayComponent } from "./discountDisplay.component";
import { MyDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService, DoubleDiscountService } from "./discount.service";
import { MyDiscountPipe } from "./discount.pipe";

//let disc = new DoubleDiscountService();

@NgModule({
  declarations: [
    AppComponent,
    MyDiscountDisplayComponent,
    MyDiscountEditorComponent,
    MyDiscountPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //providers: [DiscountService],
  //providers: [{provide: DiscountService, useClass: DiscountService}],
  //providers: [{provide: 'disc', useClass: DiscountService}],
  //providers: [{provide: 'disc', useClass: DoubleDiscountService}],
  //providers: [{provide: 'disc', useClass: DiscountService, multi: true},
  //{provide: 'disc', useClass: DoubleDiscountService, multi: true}],
  //providers: [{provide: 'disc', useValue: disc}],
  /*providers: [{provide: 'disc', useFactory: () => {
             let disc = new DoubleDiscountService();
             disc.discount = 30;
             return disc;
  }}],*/
  providers: [{provide: 'test', useClass: DiscountService},
              {provide: 'disc', useExisting: 'test'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
