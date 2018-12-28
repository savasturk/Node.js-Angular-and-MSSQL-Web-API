import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUSERINFORMATION } from '../../../../../shared_modules/models/IUserInformation';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  urlString = 'http://127.0.0.1:8080/api/userInformation/login/';
  //urlString = 'http://127.0.0.1:8080/api/getUserInformations';

  getUserInformations
  login(username: string, password: string) {
    return this.http.get<IUSERINFORMATION>(this.urlString + username + '/' + password )
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}