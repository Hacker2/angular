import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange } from "@angular/core";

@Directive({
  selector: "[myFor]"
})
export class IteratorDirective {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {}

  @Input("myFor")
  dataSource: any;

  ngOnInit() {
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      //this.container.createEmbeddedView(this.template, new MyIteratorContext(this.dataSource[i]));
      this.container.createEmbeddedView(this.template, new MyIteratorContext(this.dataSource[i], i, i === 0));
    }
  }
}

/*class MyIteratorContext {
  constructor(public $implicit: any) {}
}*/

class MyIteratorContext {
  constructor(public $implicit: any, public index: number, public first: boolean) {}
}