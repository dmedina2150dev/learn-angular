import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor( private _http: HttpClient ) { }

    //* Refactorized
    private getCountriesRequest( url: string ): Observable<Country[]> {
        return this._http.get<Country[]>( url )
            .pipe(
                catchError( error => of([]) ),
                delay(1000)
            );
    }


    searchCountryByAlphaCode( code: string ): Observable<Country | null> {
        return this._http.get<Country[]>(`${ this.apiUrl }/alpha/${ code }`)
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null ),
                catchError( error => of(null) )
            );
    }

    serachCapital( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/capital/${ term }`;
        return this.getCountriesRequest( url );
    }

    searchCountry( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/name/${ term }`;
        return this.getCountriesRequest( url );
    }

    searchByRegion( region: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/region/${ region }`;
        return this.getCountriesRequest( url );
    }
}
