import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styles: [
    ]
})
export class LoginPageComponent {

    constructor(
        private authService: AuthService,
        private _router: Router,
    ) {}

    onLogin(): void {
        this.authService.login('fernando@gmail.com', '123456')
            .subscribe( user => {
                console.log(user)
                this._router.navigate(['/']);
            });
    }
}
