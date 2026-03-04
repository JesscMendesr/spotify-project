import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '../../shared.module';
import { AlbumsService } from '../../core/services/albums.service';
import { AuthService } from '../../core/services/auth.service';
import { Subscription, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [...SHARED_MODULES],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  title = 'spotify-project';
  albumsResponse: Subscription | undefined;

  constructor(private readonly albumsService: AlbumsService, private readonly authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.authService.requestToken(code).pipe(tap((response) => {
          this.authService.saveToken(response.access_token);
        }),).subscribe(() => {
          window.history.replaceState({}, document.title, window.location.pathname);

          this.router.navigate(['/home']);
        });
      }
    });
  }

  loginWithSpotifyClick() {
    this.authService.rectToSpotifyAuthorize();
  }
}
