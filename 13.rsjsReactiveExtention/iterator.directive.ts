import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange } from "@angular/core";

import { fromEvent, of, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: "[myFor]"
})
export class IteratorDirective {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {
    const el = document.getElementById('clickMe');
    const mouseClick = fromEvent(el, 'click');
    /*mouseClick.subscribe((evt: MouseEvent) => {
      this.updateContent();
    });*/
    let observer = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    mouseClick.subscribe(observer);
    observer.next(1);
    observer.next(2);
    observer.complete();

    const myObservable = of(1, 2, 3);
    myObservable.subscribe(observer);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(myObservable);
    squaredNums.subscribe(x => console.log(x));

    const biggerThanOne = filter((val: number) => val > 1);
    const bigNums = biggerThanOne(myObservable);
    bigNums.subscribe(x => console.log(x));
    //concat(), and flatMap()

    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    const squareOdd = squareOddVals(myObservable);
    squareOdd.subscribe(x => console.log(x));
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