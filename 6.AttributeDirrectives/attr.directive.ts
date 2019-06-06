import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: "[my-attr]",
})
export class MyAttrDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'red';
  }
}