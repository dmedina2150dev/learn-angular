import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

    public isUpperCase: boolean = false;

    ngOnInit(): void { }

    toogleUpperCase(): void {
        this.isUpperCase = !this.isUpperCase;
    }
}
