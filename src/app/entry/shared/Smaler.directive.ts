import {Directive, Attribute} from "@angular/core";
import {Validator, NG_VALIDATORS, AbstractControl} from "@angular/forms";

@Directive({
  selector: '[isSmaler]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SmalerValidatorDirective,
    multi: true
  }]
})

export class SmalerValidatorDirective implements Validator {

  //Attribut übernehmen
  constructor(@Attribute("isSmaler") public smalerThan: string) {
  }

  /* control.value: das Eingebene (oder null wenn nichts eingegeben wurde
   * Rückgabe von validate:
   * Map mit ["isNumber":"Eingegebener Wert] für valide Eingabe oder null, wenn invalide
   */
  validate(control: AbstractControl): {[key: string]: any} {

    const currentAge = control.value; //Hole den eingegebenen Wert aus dem control
    const no = Number(currentAge) < Number(this.smalerThan); //Testen, ob der eingegebene Wert kleiner dem Attribut-Wert ist.

    return no ? null : {'isSmaler': {currentAge}};
  }

}
