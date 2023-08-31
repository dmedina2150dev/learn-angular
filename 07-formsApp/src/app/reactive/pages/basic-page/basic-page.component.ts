import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
        name: new FormControl('', [], []),
        price: new FormControl(0, [], []),
        inStorage: new FormControl(0, [], []),
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
        console.log(this.myForm.value);
    }
}
