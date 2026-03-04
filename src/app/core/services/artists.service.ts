import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SpotifyResponse } from "../../models/spotify/response.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SpotifyArtist } from "../../models/spotify/artist.model";

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {
    constructor(private readonly _http: HttpClient) { }


    getTopArtists(): Observable<SpotifyArtist[]> {
        return this._http.get<SpotifyResponse<SpotifyArtist>>('https://api.spotify.com/v1/me/top/artists?limit=30&time_range=short_term').pipe(
            map((response: SpotifyResponse<SpotifyArtist>) => response.items)
        );
    }
}   