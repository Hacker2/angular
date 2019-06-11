import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-showparams',
  templateUrl: './showparams.component.html'
})
export class ShowparamsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    console.log(activeRoute);
    console.log(activeRoute.url._value[0].path);
    console.log(activeRoute.url._value[1].path);
    console.log(activeRoute.snapshot.url[0].path);
    console.log(activeRoute.snapshot.url[1].path);

    console.log(activeRoute.routeConfig.path);
    console.log(activeRoute.queryParams._value.test);

    console.log(activeRoute.params._value.id);
    console.log(activeRoute.snapshot.params["id"]);
    console.log(activeRoute.snapshot.params["mode"]);
    console.log(activeRoute.snapshot.params["name"]);
    console.log(activeRoute.snapshot.paramMap.get('id'));

    //router.navigateByUrl("/");
    //router.navigate(["/"]);
    router.events
    .pipe(filter(e => e instanceof NavigationEnd))
    .subscribe(e => console.log(e));

    activeRoute.params.subscribe(params => {
    console.log('param is');
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
