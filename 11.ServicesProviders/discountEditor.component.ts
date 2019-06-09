import { Component, Input, Inject, Host, SkipSelf } from "@angular/core";
import { DiscountService, DoubleDiscountService, DISK_SERVICE } from "./discount.service";

@Component({
  selector: "myDiscountEditor",
  template: `<div>

  <input [(ngModel)]="discounter.discount" type="number" />
  </div>`,
  //providers: [{provide: 'disc2', useClass: DoubleDiscountService}]
  viewProviders: [{provide: 'disc2', useClass: DoubleDiscountService}]
  //<input [(ngModel)]="discounter[0].discount" type="number" />
})
export class MyDiscountEditorComponent {
  //constructor(private discounter: DiscountService) { }
  //constructor(@Inject("disc") private discounter: DiscountService) { }
  //constructor(@Inject("disc") private discounter: DiscountService[]) { }
  //constructor(@Inject("disc2") private discounter: DiscountService) { }
  //constructor(@Inject("disc2") @Host() private discounter: DiscountService) { }
  //constructor(@Inject("disc") @SkipSelf() private discounter: DiscountService) { }
  constructor(@Inject(DISK_SERVICE) private discounter: DiscountService) { }
  //@Input("discounter")
  //discounter: DiscountService;
}