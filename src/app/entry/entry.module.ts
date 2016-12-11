import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EntryComponent} from "./entry.component";
import {EntryFormComponent} from "./entry-form/entry-form.component";
import {routing} from "./entry.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [EntryComponent, EntryFormComponent]
})
export class EntryModule {
}
