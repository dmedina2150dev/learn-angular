import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './dynamic-page.component.html',
    styles: [
    ]
})
export class DynamicPageComponent {

    // * La otra forma de hacer el form array
    // public myForm2: FormGroup = new FormGroup({
    //     favoritesGames: new FormArray([]),
    // })

    public myForm: FormGroup = this._fb.group({
        name: ['', [ Validators.required, Validators.minLength(3)]],
        favoriteGames: this._fb.array([
            ['Metal Gear', Validators.required ],
            ['Death Stranding', Validators.required ],
        ]),

    });

    constructor( private _fb: FormBuilder ) {

    }

    get favoriteGamesControls() {
        return this.myForm.get('favoriteGames') as FormArray;
    }

    isValidField( field: string ): boolean | null {
        return this.myForm.controls[ field ].errors
            && this.myForm.controls[ field  ].touched;
    }

    getFieldError( field: string ): string | null{
        // if ( !this.myForm.controls[ field ] && !this.myForm.controls[ field ].errors ) return null;
        if ( !this.myForm.controls[ field ] ) return null;

        // const errors = this.myForm.controls[ field ].errors;
        const errors = this.myForm.controls[ field ].errors || {};

        for( const key of Object.keys( errors )) {
            // console.log(key)
            switch( key ) {
                case 'required':
                    return 'Este campo es requerido';
                case 'minlength':
                    return `Mínimo debe tener ${ errors['minlength'].requiredLength } caracteres`;
            }
        }

        return null;
    }

    isValidFieldInArray( formArray: FormArray, index: number ) {

        return formArray.controls[ index ].errors
            && formArray.controls[ index  ].touched;
    }

    onSubmit(): void {

        if ( this.myForm.invalid ) {
            this.myForm.markAllAsTouched();
            return;
        }

        console.log(this.myForm.value);
        this.myForm.reset();
    }
}
