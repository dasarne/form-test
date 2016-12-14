import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EntryComponent} from "./entry.component";
import {routing} from "./entry.routing";
import {FormsModule} from "@angular/forms";
import {DebugPanelModule} from "./debug-panel/debug-panel.module";
import {EntryFormTemplateModule} from "./entry-form/entry-form.module";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    EntryFormTemplateModule,
    DebugPanelModule,
    routing
  ],
  declarations: [EntryComponent]
})
export class EntryModule {
}
