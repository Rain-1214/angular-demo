import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

export const forBiddenNameValidator = (nameRef: RegExp): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    const forBiddenNameFlag = nameRef.test(control.value);
    return forBiddenNameFlag ? { 'forbiddenName': { value: control.value } } : null;
  };
};

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForBiddenDirective,
      multi: true
    }
  ]
})
export class ForBiddenDirective implements Validator {

  @Input() appForbiddenName: string;

  validate(control: AbstractControl): { [key: string ]: any } {
    return this.appForbiddenName ? forBiddenNameValidator(new RegExp(this.appForbiddenName, 'i'))(control)
                              : null;
  }
}
