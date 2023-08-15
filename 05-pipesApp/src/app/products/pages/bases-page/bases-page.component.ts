import { Component } from '@angular/core';

@Component({
  selector: 'app-bases-page',
  templateUrl: './bases-page.component.html',
  styleUrls: ['./bases-page.component.css']
})
export class BasesPageComponent {

    public nameLower: string = 'Dajan';
    public nameUpper: string = 'DAJAN';
    public fullName: string = 'DaJaN MEdinA';

    public customDate: Date = new Date();
}
