import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: [] },
        byCountries: { term: '', countries: [] },
        byRegion: { region: '', countries: [] },
    }

    constructor( private _http: HttpClient ) {
        this.loadFromLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadFromLocalStorage() {
        if (!localStorage.getItem('cacheStore')) return;

        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

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
        return this.getCountriesRequest( url )
            .pipe(
                tap( countries => this.cacheStore.byCapital = { term, countries } ),// El tap no influye en funcionamiento del objeto que retorna el observable
                tap(() => this.saveToLocalStorage())
            );
    }

    searchCountry( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/name/${ term }`;
        return this.getCountriesRequest( url )
            .pipe(
                tap( countries => this.cacheStore.byCountries = { term, countries } ),// El tap no influye en funcionamiento del objeto que retorna el observable
                tap(() => this.saveToLocalStorage())
            );
    }

    searchByRegion( region: Region ): Observable<Country[]> {
        const url = `${ this.apiUrl }/region/${ region }`;
        return this.getCountriesRequest( url )
            .pipe(
                tap( countries => this.cacheStore.byRegion = { region, countries } ),// El tap no influye en funcionamiento del objeto que retorna el observable
                tap(() => this.saveToLocalStorage())
            );
    }
}
