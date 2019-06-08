import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
 selector: "test5",
 template: "<div (click)='prntInputValue()'>print me {{inputValue}}</div>"
})
export class Test5Component {
  @Input('inputValue')
  inputValue: string;

  @Output('outputValue')
  outputValue = new EventEmitter<Product>();

  prntInputValue() {
    console.log(this.inputValue);
    this.outputValue.emit('new value');
  }
}