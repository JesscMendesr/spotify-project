import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../core/services/albums.service';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authorization',
  imports: [],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements OnInit {
  title = 'spotify-project';
  albumsResponse: Subscription | undefined;

  constructor(private readonly albumsService: AlbumsService, private readonly authService: AuthService) { }

  ngOnInit() {
  }

  loginWithSpotifyClick() {
    this.authService.rectToSpotifyAuthorize();
  }
}
