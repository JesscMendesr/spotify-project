import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SpotifyResponse } from "../../models/spotify/response.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SpotifyArtist } from "../../models/spotify/artist.model";
import { SpotifyTrack } from "../../models/spotify/track.model";

@Injectable({
    providedIn: 'root'
})
export class TracksService {
    constructor(private readonly _http: HttpClient) { }


    getTopTracks(): Observable<SpotifyTrack[]> {
        return this._http.get<SpotifyResponse<SpotifyTrack>>('https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=short_term').pipe(
            map((response: SpotifyResponse<SpotifyTrack>) => response.items)
        );
    }
}   