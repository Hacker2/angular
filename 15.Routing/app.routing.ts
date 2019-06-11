import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowparamsComponent } from './showparams/showparams.component';

const routes: Routes = [
{ path: "main", component: MainComponent },
{ path: "test", component: TestComponent },
{ path: "test2", component: Test2Component },
{ path: "showparams/create", component: ShowparamsComponent },
{ path: "showparams/edit", component: ShowparamsComponent },
{ path: "showparams/edit/:id", component: ShowparamsComponent },
{ path: "showparams/edit/:id/:mode", component: ShowparamsComponent },
{ path: "showparams", component: TestComponent, children: [
        { path: "id", component: ShowparamsComponent },
        { path: "mode", component: ShowparamsComponent },
      ] },
{ path: "", redirectTo: "main", pathMatch: "full" },
{ path: "**", component: NotfoundComponent },
]
export const routing = RouterModule.forRoot(routes);