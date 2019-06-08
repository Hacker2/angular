import { Pipe } from "@angular/core";

@Pipe({
 name: "customPipe"
})
export class CustomPipe {
  /*transform(value: number, cur: string): string {
    return cur == 'USD' ? value + '$' : `${value} ${cur}`;
  }*/
  transform(value: number): number {
    return value + value;
  }
}