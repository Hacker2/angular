import { Directive, ElementRef, ContentChild, ContentChildren, QueryList } from "@angular/core";

import { LiColor } from "./liColor.directive";

@Directive({
  selector: "ul"
})

export class UlColor {

  //@ContentChild(LiColor, {static: false})
  //contentChild: LiColor;

  @ContentChildren(LiColor)
  contentChildren: QueryList<LiColor>;

  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener("click", e => {
      //this.contentChild.setColor('green');
      this.contentChildren.forEach((child, index) => {child.setColor('green');});
    });
  }
}