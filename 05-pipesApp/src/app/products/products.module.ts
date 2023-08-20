 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasesPageComponent } from './pages/bases-page/bases-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';


@NgModule({
  declarations: [
    BasesPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    PrimeNgModule
  ]
})
export class ProductsModule { }
