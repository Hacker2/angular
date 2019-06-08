import { Component } from '@angular/core';

//import { DiscountService } from "./discount.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  //discounter: DiscountService = new DiscountService();
  price = 50;
}