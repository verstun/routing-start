/**
 * Created by svetazavolokina on 17-05-12.
 */
    import {CanActivate,
            ActivatedRouteSnapshot,
            RouterStateSnapshot,
            Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
            (authentificated: boolean) => {
                if (authentificated) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                }
            }
        );

    }
}
