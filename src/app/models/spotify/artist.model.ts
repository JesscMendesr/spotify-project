export interface SpotifyArtist {
    id: string;
    name: string;
    type: SpotifyEntityType;
    uri: string;
    href: string;
    external_urls: SpotifyExternalUrls;
    images: SpotifyImage[];
}


export interface SpotifyExternalUrls {
    spotify: string;
}

export interface SpotifyImage {
    height: number;
    width: number;
    url: string;
}


type SpotifyEntityType = 'artist' | 'track' | 'album';
