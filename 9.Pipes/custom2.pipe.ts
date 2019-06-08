import { Pipe } from "@angular/core";

@Pipe({
 name: "custom2Pipe",
 //pure: true
 pure: false
})
export class Custom2Pipe {
  transform(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
  }
}