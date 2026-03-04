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
},{
    path: 'authorization',
    component: AuthorizationComponent
}, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent
}
]
