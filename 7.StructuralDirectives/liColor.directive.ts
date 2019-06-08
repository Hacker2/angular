import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "li"
})
export class LiColor {

  constructor(private element: ElementRef) {}

  setColor(color: string) {
    this.element.nativeElement.style.color = color;
  }
}