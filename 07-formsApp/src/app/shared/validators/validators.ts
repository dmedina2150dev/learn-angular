import { FormControl } from "@angular/forms";

export const cantBeStrider = ( control: FormControl ) => {

    // Debemos regresar un objeto con el error (contiene un tipado especificado que es de validationFunctions)
    return {
        noStrider: true,
    }


    // return null;
}
