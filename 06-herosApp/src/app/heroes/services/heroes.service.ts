import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { enviroments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl: string = enviroments.baseUrl;

    constructor(private _http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this._http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }
}