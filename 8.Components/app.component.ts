import { Component, ViewChild, ViewChildren } from '@angular/core';

import { Test5Component } from './test5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]
})
export class AppComponent {
  outputValue: string = 'temp value';
  getInputValue() {
    return 'this is input value';
  }
  changeValue(newValue) {
    this.outputValue = newValue;
    console.log(this.viewChild);
    console.log(this.viewChildren.length);
  }

  @ViewChild(Test5Component, {static: false})
  viewChild: Test5Component;

  @ViewChildren(Test5Component, {static: false})
  viewChildren: QueryList<Test5Component>;
}