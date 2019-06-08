import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
  selector: "myDiscountDisplay",
  template: `<div>
  The discount is {{discounter.discount}}
  </div>`
})
export class MyDiscountDisplayComponent {
  constructor(private discounter: DiscountService) { }
  //@Input("discounter")
  //discounter: DiscountService;
}