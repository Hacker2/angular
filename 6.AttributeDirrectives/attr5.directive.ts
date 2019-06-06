import { Directive, ElementRef, Input, SimpleChange, Output, EventEmitter } from "@angular/core";

import { Product } from "./product";

@Directive({
  selector: "[my-attr]",
})
export class MyAttrDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener("click", e => {
      this.click.emit('yellow');
    });
  }

  @Input("my-attr")
  myAttr: string;

  @Output("my-name")
  click = new EventEmitter<string>();

  ngOnInit() {
    console.log('init');
    this.element.nativeElement.style.color = this.myAttr;
  }

  ngOnChanges(changes: {[property: string]: SimpleChange }) {
    console.log(changes);
    this.element.nativeElement.style.color = changes['myAttr'].currentValue;
  }
}