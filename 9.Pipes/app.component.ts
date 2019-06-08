import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  price = 50.00;
  arr: number[] = [1,2,3];
  addNumber() {
    this.arr.push(this.arr[this.arr.length - 1] + 1);
  }
  perc = 0.2;
  date: Date = new Date();
  nm: string = 'Kent'
  jsn = {name: 'Kent', age: 22}
}