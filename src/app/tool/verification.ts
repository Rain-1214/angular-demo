import { ValidatorFn, AbstractControl } from '@angular/forms';


export class Verification {

    private static emailReg = /^[\w\-]+[\w\-\.]*@[\w\-]+(\.[\w\-]+)+$/;

    static emailTest(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const flag = this.emailReg.test(control.value);
            return flag ? null : { 'emailTest' : true };
        };
    }

    customFunction(errorName: string, Reg: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const falg = Reg.test(control.value);
            return falg ? { errorName: true } : null;
        };
    }
}

