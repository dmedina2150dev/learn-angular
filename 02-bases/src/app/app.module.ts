import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DbzModule } from './dbz/dbz.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,

    // DBZ - Program
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
