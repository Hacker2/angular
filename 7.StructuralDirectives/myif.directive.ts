import { Directive, SimpleChange, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
  selector: "[myIf]"
})
export class MyIfDirective {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) { }

  @Input("myIf")
  expressionResult: boolean;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if (changes["expressionResult"].currentValue) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.template);
    }
  }
}