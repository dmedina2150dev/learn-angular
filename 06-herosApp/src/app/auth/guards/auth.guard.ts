import { Injectable, inject, Pipe } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    // CanActivate, CanMatch, // TODO: Clases Deprecated
    CanActivateFn,
    CanMatchFn,
    Route, UrlSegment,
    // UrlTree, // TODO: Este metodo no se ha utilizado en el curso
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

// TODO Actualmente se debe utilizar programacion funcional

const checkAuthStatus = (): Observable<boolean> => {
    const authService = inject(AuthService);
    const _router = inject(Router);

    console.log("PASO POR EL CHECK")

    return authService.checkAuthentication()
        .pipe(
            tap(isAuthenticated => console.log({ 'Authenticated': isAuthenticated })),
            tap((isAuthenticated) => {
                if (!isAuthenticated) {
                    _router.navigate(['./auth/login'])
                }
            }),
        );
}

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log('CanActivate');
    console.log({ route, state });

    return checkAuthStatus();
    // return false;
}

export const canMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    console.log('CanMatch');
    console.log({ route, segments });

    return checkAuthStatus();
    // return false;
};



// TODO: Todo lo que esta abajo de este comentario esta deprecado a la fecha de realizacion del curso
//! 28/08/2023

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanMatch, CanActivate {

//     constructor() { }

//     canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
//         console.log('canMatch');
//         console.log({ route, segments });
//         return true;
//     }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
//         console.log('canActivate')
//         console.log({ route, state });
//         return true;
//     }

// }
