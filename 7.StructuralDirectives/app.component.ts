import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  clr = 'green';
  changeColor() {
    this.clr = 'red';
  }
  show: boolean = false;
  changeShow() {
   this.show = !this.show;
   this.arr.push(0);
  }
  arr: number[] = [1,2,3]
  /*getArray(): number[] {
    return this.arr;
  }*/
}