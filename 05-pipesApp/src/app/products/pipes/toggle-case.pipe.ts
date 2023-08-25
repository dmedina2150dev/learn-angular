import { Pipe, PipeTransform } from "@angular/core";

// Intencion de este Pipe
// ronaldo | toogleCase = 'RONALDO'
// RONALDO | toogleCase = 'ronaldo'

@Pipe({
    name: 'toggleCase'
})
// TODO: Para que sea un pipe es requerido que se implemente el PipeTransform
export class ToggleCasePipe implements PipeTransform {

    transform(value: string): string {
        return value.toUpperCase();
    }

}
