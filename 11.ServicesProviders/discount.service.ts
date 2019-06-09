import { Injectable } from "@angular/core";
import { InjectionToken } from "@angular/core";

export const DISK_SERVICE = new InjectionToken("discServ");

@Injectable()
export class DiscountService {

  protected discountValue: number = 10;

  public get discount(): number {
    return this.discountValue;
  }

  public set discount(newValue: number) {
    this.discountValue = newValue || 0;
  }

  public applyDiscount(price: number) {
    return Math.max(price - this.discountValue, 5);
  }
}

@Injectable()
export class DoubleDiscountService extends DiscountService {
  constructor() {
    super()
    this.discountValue = 20;
  }
}