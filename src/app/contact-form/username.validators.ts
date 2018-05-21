import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidators {
    static CannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { "CannotContainSpace": true };

        return null;
    }
    static shouldbeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value as string == "Srinivasan") {
                    console.log("Srinivasan")
                    resolve({ "shouldbeUnique": true });
                } else {
                    resolve(null);
                }
            },5000)


        })





    }
}