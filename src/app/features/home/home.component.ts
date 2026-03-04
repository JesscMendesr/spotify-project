import { Component } from '@angular/core';
  import { AlbumsService } from '../../core/services/albums.service';
import { ArtistsService } from '../../core/services/artists.service';
import { SpotifyArtist } from '../../models/spotify/artist.model';
import { SHARED_MODULES } from '../../shared.module';
import { AppUser } from '../../models/spotify/user.model';
import { TracksService } from '../../core/services/tracks.service';
import { SpotifyTrack } from '../../models/spotify/track.model';
import { ActivatedRoute } from '@angular/router';
import { BadgetUserComponent } from "../../shared/components/badget-user/badget-user.component";

@Component({
  selector: 'app-home',
  imports: [...SHARED_MODULES, BadgetUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  topArtists:SpotifyArtist[] = [];
  user: AppUser | undefined;
  imgUser: string | undefined;
  topTracks: SpotifyTrack[] = [];
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly tracksService: TracksService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    
    this.activatedRoute.data.subscribe((data) => {
      console.log('Data from route resolver:', data);
      this.user = data['auth'];
      this.imgUser = this.user?.avatarUrl;
    });
    this.viewTopArtists();
    this.viewTopTracks()
  }

  viewAlbums() {
    this.albumsService.getAlbums().subscribe(albums => {
      console.log(albums);
    });
  }

  viewTopArtists() {
    this.artistsService.getTopArtists().subscribe(artists => {
      this.topArtists = artists;
    });
  }

  viewTopTracks() {
    this.tracksService.getTopTracks().subscribe(tracks => {
      this.topTracks = tracks;
    });

}
}