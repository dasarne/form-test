import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.modules";
import {DebugPanelComponent} from "./debug-panel.component";

@NgModule({
  imports: [SharedModule, FormsModule],
  declarations: [DebugPanelComponent],
  exports: [DebugPanelComponent]
})
export class DebugPanelModule {
}
