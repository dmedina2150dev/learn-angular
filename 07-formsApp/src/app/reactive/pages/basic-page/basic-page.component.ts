import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './basic-page.component.html',
    styles: [
    ]
})
export class BasicPageComponent {

    // * Una forma de crear formularios reactivos
    public myForm: FormGroup = new FormGroup({
        // Todo: El primer argumento es el valor
        // Todo: El segundo argumento validaciones sincronas
        // Todo: El tercero argumento validaciones asincronas
        name: new FormControl('', [ Validators.required, Validators.minLength(3) ], []),
        price: new FormControl(0, [ Validators.required, Validators.min(0) ], []),
        inStorage: new FormControl(0, [ Validators.required, Validators.min(0) ], []),
    });

    // * Otra forma de crear formularios reactivos
    // public myForm2: FormGroup = this._fb.group({
    //     // Todo: El primer argumento es el valor
    //     // Todo: El segundo argumento validaciones sincronas
    //     // Todo: El tercero argumento validaciones asincronas
    //     name: ['', [], []],
    //     price: [0, [], []],
    //     inStorage: [0, [], []],
    // });

    constructor(
        private _fb: FormBuilder,
    ){}

    onSave(): void {
        if ( this.myForm.invalid ) return;
        console.log(this.myForm.value);
    }
}
