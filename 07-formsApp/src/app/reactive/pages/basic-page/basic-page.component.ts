import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
    name: 'RX5090',
    price: 20000,
    inStorage: 3
}

@Component({
    templateUrl: './basic-page.component.html',
    styles: [
    ]
})
export class BasicPageComponent implements OnInit {

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

    ngOnInit(): void {
        // this.myForm.reset( rtx5090 );
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

    onSave(): void {
        if ( this.myForm.invalid ) {
            this.myForm.markAllAsTouched();
            return;
        };
        console.log(this.myForm.value);

        //TODO: Al reset podemos mandarle un objeto con las propiedades que tiene el formulario
        this.myForm.reset({ price: 0, inStorage: 0 });
    }
}
