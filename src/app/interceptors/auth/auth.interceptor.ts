import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    // Avoid injecting AuthService here since it depends on HttpClient
    // (would create a DI cycle). Read token directly from localStorage.
    const token = localStorage.getItem('auth_token');

    // debug
    // console.debug('authInterceptor url=', req.url, 'token=', !!token);

    if (req.url.startsWith('https://api.spotify.com/v1/') && token) {
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(authReq);
    }

    return next(req);
};
