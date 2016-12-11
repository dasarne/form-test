import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EntryComponent} from "./entry.component";
import {EntryFormComponent} from "./entry-form/entry-form.component";
import {routing} from "./entry.routing";
import {FormsModule} from "@angular/forms";
import {DebugPanelComponent} from "./debug-panel/debug-panel.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    routing
  ],
  declarations: [EntryComponent, EntryFormComponent, DebugPanelComponent]
})
export class EntryModule {
}
