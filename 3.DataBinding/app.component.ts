import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  getClasses(): string {
    return 'test'
  }
  getClasses2(): string {
    return {name: null}
  }
  getTrue(): boolean {
    return true;
  }
  getFalse(): boolean {
    return false;
  }
  getClassMap(): Object {
   return {test:true,trye:false};
  }
  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string= "30";
  getStyles() {
    return {fontSize: "30px","margin.px": 100, color: "green"};
  }
}
