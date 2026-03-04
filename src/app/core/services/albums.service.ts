/// <reference types="vite/client" />
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    constructor(private readonly _http: HttpClient) { }

    getAlbums() {
        return this._http.get('https://api.spotify.com/v1/me/top/artists');
    }

}