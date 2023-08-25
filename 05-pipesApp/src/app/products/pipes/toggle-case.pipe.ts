import { Pipe, PipeTransform } from "@angular/core";

// Intencion de este Pipe
// ronaldo | toogleCase = 'RONALDO'
// RONALDO | toogleCase = 'ronaldo'

@Pipe({
    name: 'toggleCase'
})
// TODO: Para que sea un pipe es requerido que se implemente el PipeTransform
export class ToggleCasePipe implements PipeTransform {

    // transform(value: string, ...args: any[]): string { // Forma traducuinal de recibir los arguments del pipe
    transform(value: string, toUpper: boolean = false): string {
        // console.log({args})
        // return value.toUpperCase();

        console.log({ value, toUpper });
        return (toUpper)
            ? value.toUpperCase()
            : value.toLowerCase();

    }

}
