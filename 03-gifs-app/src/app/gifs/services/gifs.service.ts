import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {

    public gifList: Gif[] = [];

    private _tagsHistory: string[] = [];
    private apiKey: string = 'SSGwnFZNp4NUH0aKul5mA7Gm0tp0RVI1';
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

    constructor( private _http: HttpClient ) {
        this.loadLocalStorage();
        console.log('Gifs Service Ready');
    }

    get tagsHistory(): string[] {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();

        // Eliminamos el tag que ya exista en el historial
        if ( this._tagsHistory.includes(tag) ) {
            this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
        }

        this._tagsHistory.unshift(tag);
        // Limintamos el historial a las ultima 10 busquedas
        this._tagsHistory = this._tagsHistory.splice(0, 10);
        this.saveLocalStorage();
    }

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    private loadLocalStorage(): void {
        if( !localStorage.getItem('history') ) return;

        this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

        if( this._tagsHistory.length === 0 ) return;

        this.searchTag( this._tagsHistory[0] );
    }

    searchTag( tag: string ): void {
        // Evitamos que se muestren tags vacios
        if ( tag.length === 0 ) return;

        this.organizeHistory(tag);

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag);

        // 'https://api.giphy.com/v1/gifs/search?api_key=SSGwnFZNp4NUH0aKul5mA7Gm0tp0RVI1&q=valorant&limit=10'
        this._http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
            .subscribe( resp => {
                this.gifList = resp.data;
                // console.log({ GIFS: this.gifList });
            });
    }

}
