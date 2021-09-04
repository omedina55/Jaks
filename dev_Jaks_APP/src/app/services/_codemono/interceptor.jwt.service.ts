import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/_codemono/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorJwt implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add auth header with jwt if user is logged in and request is to the api url
      const currentUser = this.authenticationService.currentUserValue;
      const isLoggedIn = currentUser && currentUser.token;
      //console.log('Current User: ' + currentUser);
      //console.log('isLoggedIn: ' + isLoggedIn);
      //console.log('Current User Token:' + currentUser.token);
      const isApiUrl = request.url.startsWith(environment.URL_SER_NODE);
      if (isLoggedIn && isApiUrl) {
          request = request.clone({
              setHeaders: {
                'Authorization': `${currentUser.token}`
              }
          });
      }
      return next.handle(request);
  }

}

