import {Routes, RouterModule} from "@angular/router";
//Imports of components
import {EntryFormComponent} from "./entry-form/entry-form.component";
import {EntryComponent} from "./entry.component";

//Build map of routes
export const routes: Routes = [{
  path: 'entry',
  component: EntryComponent,
  children: [{
    path: '',
    component: EntryFormComponent,
  },]
}];

export const routing = RouterModule.forChild(routes);
