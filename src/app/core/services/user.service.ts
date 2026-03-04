import { Observable } from "rxjs";
import { SpotifyUserResponse } from "../../models/spotify/response-user.mode";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private _http: HttpClient) { }

        getInforUser(token: string): Observable<SpotifyUserResponse> {
            const url = "https://api.spotify.com/v1/me";
            return this._http.get<SpotifyUserResponse>(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }
    
}