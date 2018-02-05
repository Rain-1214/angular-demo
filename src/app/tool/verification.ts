import { ValidatorFn, AbstractControl } from '@angular/forms';


export class Verification {

    private static emailReg = /^[\w\-]+[\w\-\.]*@[\w\-]+(\.[\w\-]+)+$/;

    private static validCharReg = /^[\w\-]+$/;

    static emailTest(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const flag = this.emailReg.test(control.value);
            return flag ? null : { 'emailTest' : true };
        };
    }

    static validCharacteFn(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const falg = this.validCharReg.test(control.value);
            return falg ? null : { 'invalidValid': true };
        };
    }

    customFunction(errorName: string, Reg: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const falg = Reg.test(control.value);
            return falg ? { errorName: true } : null;
        };
    }

}

