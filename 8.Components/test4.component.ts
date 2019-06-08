import { Component } from "@angular/core";

@Component({
 selector: "test4",
 template: "<div>hello {{s}}</div>"
})
export class Test4Component {
  s: string = 'world';
}