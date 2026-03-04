import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap, tap } from "rxjs";
import { SpotifyUserResponse } from "../../models/spotify/response-user.mode";
import { UserStore } from "../store/user.store";
import { SpotifyTokenResponse } from "../../models/spotify/response-token.model";
import { LoadingService } from "./loading/loading.service";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private clientId = environment.client_id;
    private redirectUrl = 'https://unctuous-synaptically-emeline.ngrok-free.dev/home';

    private authorizationEndpoint = "https://accounts.spotify.com/authorize";

    private scope = 'user-read-private user-read-email user-library-read user-top-read';
    constructor(private readonly _http: HttpClient) { }


    async rectToSpotifyAuthorize() {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const randomValues = crypto.getRandomValues(new Uint8Array(64));
        const randomString = randomValues.reduce((acc, x) => acc + possible[x % possible.length], "");

        const code_verifier = randomString;
        const data = new TextEncoder().encode(code_verifier);
        const hashed = await crypto.subtle.digest('SHA-256', data);

        const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');

        window.localStorage.setItem('code_verifier', code_verifier);

        const authUrl = new URL(this.authorizationEndpoint)
        const params = {
            response_type: 'code',
            client_id: this.clientId,
            scope: this.scope,
            code_challenge_method: 'S256',
            code_challenge: code_challenge_base64,
            redirect_uri: this.redirectUrl, 
        };

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }

    requestToken() {
        const url = "https://accounts.spotify.com/api/token";
        const code = new URLSearchParams(window.location.search).get('code');
        const body = new URLSearchParams({
            client_id: this.clientId,
            grant_type: 'authorization_code',
            code: code || '',
            redirect_uri: this.redirectUrl,
            code_verifier: this.getCodeVerifier() || '',
        });

        return this._http.post<SpotifyTokenResponse>(url, body.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }

    getInforUser(token: string): Observable<SpotifyUserResponse> {
        const url = "https://api.spotify.com/v1/me";
        return this._http.get<SpotifyUserResponse>(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }


    saveToken(token: string): void {
        localStorage.setItem('auth_token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('auth_token');
    }

    getCodeVerifier(): string | null {
        return localStorage.getItem('code_verifier');
    }

    logout(): void {
        localStorage.removeItem('auth_token');
    }
}
