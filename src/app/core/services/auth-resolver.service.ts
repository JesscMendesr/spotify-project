import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap, map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUser } from '../../models/spotify/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthResolverService implements Resolve<any> {
    constructor(private authService: AuthService, private userService: UserService) { }
    resolve(): Observable<AppUser> {
        const token = this.authService.getToken();

        if (!token) {
            throw new Error('No token');
        }

        return this.userService.getInforUser(token).pipe(
            map((userInfo) => ({
                id: userInfo.id,
                name: userInfo.display_name,
                email: userInfo.email,
                avatarUrl: userInfo.images.length > 0 ? userInfo.images[0].url : undefined,
                plan: userInfo.product
            } as AppUser)),
            catchError((error) => {
                console.error('Error fetching user info:', error);
                throw error;
            })
        );
    }
}

