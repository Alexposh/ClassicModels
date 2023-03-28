import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  signUp(email: string, password: string) {
    let bodyPost = {
      email: email,
      password: password
    };
    return this.httpClient.post('http://localhost:9500/rest/users/register', bodyPost)
  }


  logIn(email: string, password: string): any {

    const params2 = {
      email: email,
      password: password,
      grant_type: 'password',
      client_id: 'my-client'
    };

    let headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa("my-client: t")
      });
    const options = {
      headers: headers,
      params: params2
    }



    return this.httpClient.post('http://localhost:9500/oauth/token', params2, options);
   
  }

}
