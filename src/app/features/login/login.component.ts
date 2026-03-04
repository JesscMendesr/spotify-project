import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '../../shared.module';
import { AlbumsService } from '../../core/services/albums.service';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [...SHARED_MODULES],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  title = 'spotify-project';
  albumsResponse: Subscription | undefined;

  constructor(private readonly albumsService: AlbumsService, private readonly authService: AuthService) { }

  ngOnInit() {
  }

  loginWithSpotifyClick() {
    this.authService.rectToSpotifyAuthorize();
  }
}
