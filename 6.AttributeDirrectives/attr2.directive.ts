import { Directive, ElementRef, Attribute } from "@angular/core";
@Directive({
  selector: "[my-attr]",
})
export class MyAttrDirective {
  //constructor(element: ElementRef, @Attribute("color") color: string) {
  constructor(element: ElementRef, @Attribute("my-attr") color: string) {
    element.nativeElement.style.color = color;
  }
}