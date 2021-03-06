import { Pipe, Injectable, Inject } from "@angular/core";
import { DiscountService, DISK_SERVICE } from "./discount.service";

@Pipe({
 name: "discount",
 pure: false ,
})
export class MyDiscountPipe {
  //constructor(private discount: DiscountService) { }
  //constructor(@Inject("disc") private discount: DiscountService) { }
  constructor(@Inject(DISK_SERVICE) private discount: DiscountService) { }
  //constructor(@Inject("disc") private discount: DiscountService[]) { }
  transform(price: number): number {
    return this.discount.applyDiscount(price);
    //return this.discount[0].applyDiscount(price);
  }
}