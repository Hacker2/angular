import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange } from "@angular/core";

import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: "[myFor]"
})
export class IteratorDirective {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {
    const el = document.getElementById('clickMe');
    const mouseClick = fromEvent(el, 'click');
    const squareValues = map((val: number) => val * val);
    const lessThanTen = filter((val: number) => val > 10);
    const squaredNums = squareValues(mouseClick);
    const filtered = lessThanTen(squaredNums);
    filtered.subscribe((evt: MouseEvent) => {
    //squaredNums.subscribe((evt: MouseEvent) => {
    //mouseClick.subscribe((evt: MouseEvent) => {
      this.updateContent();
    });
    //subscription.filter(x => x < 10)
  }

  @Input("myFor")
  dataSource: any;

  ngOnInit() {
    this.updateContent();
  }

  /*ngDoCheck() {
    console.log('do change');
    this.updateContent();
  }*/

  private updateContent() {
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      this.container.createEmbeddedView(this.template, new MyIteratorContext(this.dataSource[i], i));
    }
  }
}

class MyIteratorContext {
  constructor(public $implicit: any, public index: number) {}
}