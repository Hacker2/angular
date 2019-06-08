import { Component, Input, Inject } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
  selector: "myDiscountDisplay",
  template: `<div>
  The discount is {{discounter.discount}}
  </div>`
  //The discount is {{discounter[0].discount}}
})
export class MyDiscountDisplayComponent {
  //constructor(private discounter: DiscountService) { }
  constructor(@Inject("disc") private discounter: DiscountService) { }
  //constructor(@Inject("disc") private discounter: DiscountService[]) { }
  //@Input("discounter")
  //discounter: DiscountService;
}