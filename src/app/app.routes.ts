import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { LoginComponent } from './features/login/login.component';
import { AuthResolverService } from './core/services/auth-resolver.service';

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
    resolve: {
        auth: AuthResolverService
    }

}, {
    path: '',
    component: LoginComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'callback',
    component: LoginComponent
}
]
