import { Directive, ElementRef, Input, SimpleChange } from "@angular/core";
@Directive({
  selector: "[my-attr]",
})
export class MyAttrDirective {
  constructor(private element: ElementRef) {}

  @Input("my-attr")
  myAttr: string;

  ngOnInit() {
    console.log('init');
    this.element.nativeElement.style.color = this.myAttr;
  }

  ngOnChanges(changes: {[property: string]: SimpleChange }) {
    console.log(changes);
    this.element.nativeElement.style.color = changes['myAttr'].currentValue;
  }
}