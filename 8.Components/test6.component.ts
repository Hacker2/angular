import { Component } from "@angular/core";

@Component({
 selector: "test6",
 template: `<input type="checkbox" [(ngModel)]="showContent" />
           <ng-content *ngIf="showContent"></ng-content>`
})
export class Test6Component {
  showContent: boolean = true;
}