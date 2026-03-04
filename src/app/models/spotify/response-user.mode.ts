export interface SpotifyUserResponse {
    country: string;
    display_name: string;
    email: string;
    explicit_content: ExplicitContent;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: UserImage[];
    product: 'free' | 'premium' | string;
    type: 'user';
    uri: string;
}

export interface ExplicitContent {
    filter_enabled: boolean;
    filter_locked: boolean;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href: string | null;
    total: number;
}

export interface UserImage {
    height: number | null;
    width: number | null;
    url: string;
}
