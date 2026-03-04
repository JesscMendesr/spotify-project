import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AlbumsService } from './core/services/albums.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { SHARED_MODULES } from './shared.module';
import { ThemeService } from './core/services/theme.service';
import { LoadingComponent } from "./shared/components/loading/loading.component";
import { LoadingService } from './core/services/loading/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...SHARED_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
loading$: Observable<boolean>;

  constructor(public theme: ThemeService, public loadingService: LoadingService, private authService: AuthService, private router: Router) {
    this.loading$ = this.loadingService.loading$;
  }


toggleTheme(isDark?: boolean) {
  const html = document.documentElement;

  if (isDark !== undefined) {
    html.classList.toggle('dark', isDark);
  } else {
    html.classList.toggle('dark');
  }
}

}
