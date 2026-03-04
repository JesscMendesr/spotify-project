import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
const redirect = sessionStorage.getItem('redirect');
sessionStorage.removeItem('redirect');

if (redirect && redirect !== location.href) {
  history.replaceState(null, '', redirect);
}
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
