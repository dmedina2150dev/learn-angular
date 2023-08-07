import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor( private _http: HttpClient ) { }

    serachCapital( term: string ): Observable<Country[]> {
        return this._http.get<Country[]>(`${ this.apiUrl }/capital/${ term }`)
            .pipe(
                tap( countries => console.log('Paso por el tap', countries)),
                map( countries => [] )
            );
    }

}
