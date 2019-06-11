import { Component } from '@angular/core';
import { trigger, style, state, transition, animate, group } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger("myAnimation", [
      state("big", style({
        backgroundColor: "lightgreen",
        fontSize: "20px"
      })),
      //state("small", style({
      state("*", style({
        backgroundColor: "lightsalmon",
        fontSize: "10px"
      })),
      transition("big => small", animate("0.9s 0.5s")),
      //transition("small => big", animate("2s 1s")),
      //transition("small => big", animate("2s 1s", style({fontSize:'50px', opacity: 0.5}))),
      //transition("small => big", [animate("2s 1s", style({fontSize:'25px', opacity: 0.5})),
      //                           animate("2s 1s", style({fontSize:'50px', opacity: 0.9})),]),
      transition("small => big", [animate("2s 1s", style({fontSize:'25px', opacity: 0.5})),
                                 group([animate("1s 1s", style({backgroundColor: "lightcoral",})),
                                        animate("1s 1s", style({fontSize: "50px"})),]),
                                        //animate("1s 1s", style({fontSize: "50px", transform: "translateX(-50%)"})),]),
                                 animate("1s 1s"),]),
    ])
  ]
})
export class AppComponent {
  state = 'big';
  click() {
    this.state = this.state === 'big' ? 'small' : 'big'
  }
}