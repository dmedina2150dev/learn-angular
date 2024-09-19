import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { cantBeStrider } from 'src/app/shared/validators/validators';

@Component({
    templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

    public myForm: FormGroup = this._fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        username: ['', [Validators.required, cantBeStrider]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]],
    });

    constructor(private _fb: FormBuilder) { }

    isValidField(field: string): boolean | null {
        // return this.myForm.controls[ field ].errors
        //     && this.myForm.controls[ field  ].touched;
        // TODO: Obtener de un servicio
        return true;
    }

    onSubmit(): void {

        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }

        console.log(this.myForm.value);
    }

}
