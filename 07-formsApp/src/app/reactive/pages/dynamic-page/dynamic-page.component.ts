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

    onSubmit(): void {

        if ( this.myForm.invalid ) {
            this.myForm.markAllAsTouched();
            return;
        }

        console.log(this.myForm.value);
        this.myForm.reset();
    }
}
