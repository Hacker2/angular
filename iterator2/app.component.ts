import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  arr: number[] = [1,2,3];
  changeArray() {
   this.arr.push(this.arr[this.arr.length - 1] + 1);
  }
}