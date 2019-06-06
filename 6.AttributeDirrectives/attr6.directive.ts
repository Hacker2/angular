import { Directive, ElementRef, Input, SimpleChange, Output, EventEmitter, HostListener, HostBinding } from "@angular/core";

import { Product } from "./product";

@Directive({
  selector: "[my-attr]",
})
export class MyAttrDirective {
  constructor(private element: ElementRef) {}

  @Input("my-attr")
  @HostBinding("title")
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

  @HostListener("click")
  triggerCustomEvent() {
    this.click.emit('black');
  }
}