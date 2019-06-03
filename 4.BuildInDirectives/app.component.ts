import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  getTest(): string {
    return 'test';
  }
  getStyle(): string {
    return {color: 'green'};
  }
  getTrue(): boolean {
    return true;
  }
  getFalse(): boolean {
    return false;
  }
  getNumber(): number {
    return 2;
  }
  getArray(): string[] {
    return ['one','two','three'];
  }
  getFloor(n: number): number {
    return Math.floor(n);
  }
}
