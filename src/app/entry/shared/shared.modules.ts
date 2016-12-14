import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmalerValidatorDirective} from "./Smaler.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [SmalerValidatorDirective,],
  exports: [SmalerValidatorDirective,
    CommonModule]
})
export class SharedModule {
}
