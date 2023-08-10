import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

    public country?: Country;

    constructor(
        private _activateRoute: ActivatedRoute,
        private _router: Router,
        private countriesService: CountriesService
    ) {

    }

    ngOnInit(): void {
        // console.log({params: params['id'] }); // TODO: Forma de obtener el valor de los parametros
        this._activateRoute.params
            .pipe(
                switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id) )
            )
            .subscribe( country => {
                // console.log({ country })
                if ( !country ) {
                    return this._router.navigateByUrl('/');
                }
                return this.country = country;

                // console.log("Tenemos un pais")
            });
    }

}
