import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

    // i18n Selected
    public name: string = 'Fernando';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla'
    }

    changeClient(): void {
        this.name = "Dajan";
        this.gender = "female";
    }

    // i18nPlural

    public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Dajan', 'Darwin'];

    public clientsMap = {
        '=0': 'no tenemos ningún cliente esperando.',
        '=1': 'tenemos un cliente esperando.',
        '=2': 'tenemos 2 clientes esperando.',
        'other': 'tenemos # clientes esperando.',
    }

    deleteClient(): void {
        this.clients.shift();
    }
}
