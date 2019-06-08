import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
  selector: "myDiscountEditor",
  template: `<div>
  <input [(ngModel)]="discounter.discount" type="number" />
  </div>`
})
export class MyDiscountEditorComponent {
  constructor(private discounter: DiscountService) { }
  //@Input("discounter")
  //discounter: DiscountService;
}