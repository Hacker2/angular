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
  showComponent(): boolean {
    return false;
  }
  getArray(): number[] {
    return [1,2,3];
  }
}