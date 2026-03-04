import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AppUser } from "../../models/spotify/user.model";

@Injectable({ providedIn: 'root' })
export class UserStore {

    private readonly userSubject = new BehaviorSubject<AppUser | null>(null);
    readonly user$ = this.userSubject.asObservable();

    setUser(user: AppUser): void {
        console.log('Setting user in store:', user);
        this.userSubject.next(user);
    }

    clear(): void {
        this.userSubject.next(null);
    }

}