import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Publisher, Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styles: [
    ]
})
export class NewPageComponent implements OnInit {

    public publichers = [
        { id: 'DC Comics', desc: 'DC - Comics' },
        { id: 'Marvel Comics', desc: 'Marvel - Comics' },
    ];

    public heroForm = new FormGroup({
        id: new FormControl(''),
        superhero: new FormControl('', { nonNullable: true }),
        publisher: new FormControl<Publisher>( Publisher.DCComics ),
        alter_ego: new FormControl(''),
        first_appearance: new FormControl(''),
        characters: new FormControl(''),
        alt_img: new FormControl(''),
    });

    constructor(
        private heroesService: HeroesService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private snackbar: MatSnackBar
    ) {}

    get currentHero(): Hero {
        const hero = this.heroForm.value as Hero;

        return hero;
    }

    ngOnInit(): void {

        if( !this._router.url.includes('edit') ) return;

        this._activatedRoute.params
            .pipe(
               switchMap( ({ id }) => this.heroesService.getHeroById( id ) ),
            ).subscribe( hero => {
                if( !hero ) return this._router.navigateByUrl('/');

                this.heroForm.reset( hero );

                return;
            });

    }

    onSubmit(): void {
        // console.log({
        //     formIsValid: this.heroForm.valid,
        //     value: this.heroForm.value,
        //     valuesValidOrNotValid: this.heroForm.getRawValue()
        // });

        if( this.heroForm.invalid ) return;

        if( this.currentHero.id ) {
            this.heroesService.updateHero( this.currentHero )
                .subscribe( hero => {
                    // TODO: Mostrar snackbar
                    this.showSnackbar(`${ hero.superhero } updated`);
                });

            return;
        }

        this.heroesService.addHero( this.currentHero )
        .subscribe( hero => {
            // TODO: Mostrar snackbar, y navegar a /heroes/edit/hero.id
            this.showSnackbar(`${ hero.superhero } created`);
            this._router.navigate(['/heroes/edit', hero.id]);
        });
    }

    showSnackbar( message: string ): void {
        this.snackbar.open( message, 'done', {
            duration: 2500,
        })
    }

}
