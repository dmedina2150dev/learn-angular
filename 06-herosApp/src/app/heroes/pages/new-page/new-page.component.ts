import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Publisher, Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

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
        publisher: new FormControl<Publisher>(Publisher.DCComics),
        alter_ego: new FormControl(''),
        first_appearance: new FormControl(''),
        characters: new FormControl(''),
        alt_img: new FormControl(''),
    });

    constructor(
        private heroesService: HeroesService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private snackbar: MatSnackBar,
        private dialog: MatDialog
    ) { }

    get currentHero(): Hero {
        const hero = this.heroForm.value as Hero;

        return hero;
    }

    ngOnInit(): void {

        if (!this._router.url.includes('edit')) return;

        this._activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.heroesService.getHeroById(id)),
            ).subscribe(hero => {
                if (!hero) return this._router.navigateByUrl('/');

                this.heroForm.reset(hero);

                return;
            });

    }

    onSubmit(): void {
        // console.log({
        //     formIsValid: this.heroForm.valid,
        //     value: this.heroForm.value,
        //     valuesValidOrNotValid: this.heroForm.getRawValue()
        // });

        if (this.heroForm.invalid) return;

        if (this.currentHero.id) {
            this.heroesService.updateHero(this.currentHero)
                .subscribe(hero => {
                    // TODO: Mostrar snackbar
                    this.showSnackbar(`${hero.superhero} updated`);
                });

            return;
        }

        this.heroesService.addHero(this.currentHero)
            .subscribe(hero => {
                // TODO: Mostrar snackbar, y navegar a /heroes/edit/hero.id
                this.showSnackbar(`${hero.superhero} created`);
                this._router.navigate(['/heroes/edit', hero.id]);
            });
    }

    onDeleteHero(): void {
        if (!this.currentHero.id) throw new Error('Hero id is required');

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: this.heroForm.value,
        });

        dialogRef.afterClosed()
            .pipe(
                filter((result: boolean) => result),
                // tap(result => console.log({ result })),
                switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)),
                // tap(wasDeleted => console.log({ wasDeleted })),
                filter((wasDeleted: boolean) => wasDeleted),
            )
            .subscribe(result => {
                if (result) {
                    this.showSnackbar(`${this.currentHero.superhero} Eliminated`);
                    this._router.navigate(['/']);
                }

            });
        // dialogRef.afterClosed().subscribe(result => {
        //     // console.log('The dialog was closed');
        //     // console.log({ result });

        //     if( !result ) return;
        //     // console.log("deleting")

        //     this.heroesService.deleteHeroById( this.currentHero.id )
        //         .subscribe( wasDeleted => {
        //                if (result) {
        //                  this.showSnackbar(`${this.currentHero.superhero} Eliminated`);
        //                  this._router.navigate(['/']);
        //                }
        //         });
        // });
    }

    showSnackbar(message: string): void {
        this.snackbar.open(message, 'done', {
            duration: 2500,
        })
    }

}
