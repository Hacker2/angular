import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  paramId = 10;
  clk() {
    console.log('test');
  }
}