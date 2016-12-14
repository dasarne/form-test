import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.modules";
import {EntryFormComponent} from "./entry-form.component";
import {DebugPanelModule} from "../debug-panel/debug-panel.module";

@NgModule({
  imports: [SharedModule, FormsModule, DebugPanelModule],
  declarations: [EntryFormComponent],
  exports: [EntryFormComponent]
})
export class EntryFormTemplateModule {
}
