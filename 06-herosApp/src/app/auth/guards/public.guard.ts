import { Observable, map, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";

const checkAuthStatus = (): Observable<boolean> => {
    const authService = inject(AuthService);
    const _router = inject(Router);

    console.log("PASO POR EL CHECK PUBLICS")

    return authService.checkAuthentication()
        .pipe(
            tap(isAuthenticated => console.log({ 'Authenticated': isAuthenticated })),
            tap((isAuthenticated) => {
                if (isAuthenticated) {
                    _router.navigate(['/'])
                }
            }),
            map( isAuthenticated => !isAuthenticated ),
        );
}

export const canActivatePublicGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // console.log('CanActivate');
    // console.log({ route, state });

    return checkAuthStatus();
    // return false;
}

export const canMatchPublicGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    // console.log('CanMatch');
    // console.log({ route, segments });

    return checkAuthStatus();
    // return false;
};
