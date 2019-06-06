import { Directive, ElementRef, Input, SimpleChange, Output, EventEmitter, HostListener, HostBinding } from "@angular/core";

import { Product } from "./product";

@Directive({
  selector: "[myModel]",
  exportAs: "myModel"
})
export class MyInpAttrDirective {
  constructor(private element: ElementRef) {}

  name: string = "MyForm";

  @Input("myModel")
  modelProperty: string;

  @HostBinding("value")
  fieldValue: string = "";

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    console.log('onChange');
    let change = changes["modelProperty"];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes["modelProperty"].currentValue || "";
    }
  }

  @Output("myModelChange")
  update = new EventEmitter<string>();

  @HostListener("input", ["$event.target.value"])
  updateValue(newValue: string) {
    console.log('updateValue');
    this.fieldValue = newValue;
    this.update.emit(newValue);
  }
}