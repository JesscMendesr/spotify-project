import { SpotifyArtist } from "./artist.model";

export interface SpotifyPaginatedResponse<T> {
    items: T[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    next: string | null;
    previous: string | null;
}

export type SpotifyResponse<T> = SpotifyPaginatedResponse<T>;
