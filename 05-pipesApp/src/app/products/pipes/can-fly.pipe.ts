import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

    transform(value: boolean): 'Si Vuela' | 'No Vuela' {
        return (value) ? 'Si Vuela' : 'No Vuela';
    }

}
