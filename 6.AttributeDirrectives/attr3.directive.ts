import { Directive, ElementRef, Input } from "@angular/core";
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

  ngOnChanges() {
    console.log('changes');
  }
  ngDoCheck() {
    console.log('check');
  }
  ngAfterContentInit() {
    console.log('content init');
  }
  ngAfterContentChecked() {
    console.log('content check');
  }
  ngOnDestroy() {
    console.log('destroy');
  }
}