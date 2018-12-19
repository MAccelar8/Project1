import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails {
  uid: String;
  role: String;
  subject: String;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
  uid: String;
  role: String;
  subject: String;

}

export interface TokenPayload {
  uid: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {
  private token: string;
  public userid:String;
  public role:String;
  public subj:String;


  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/login');
  }
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    }
    else {
      return null;
    }
  }
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    console.log(user);
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`http://localhost:3000/${type}`, user);
    } else {
      base = this.http.get(`http://localhost:3000/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
          this.userid = data.uid;
          this.role = data.role;
          this.subj = data.subject;
          }
        return data;
      })
    );

    return request;
  }
  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  checklogin(credentials) {
    console.log(credentials);
    return this.http.post('http://localhost:3000/login', credentials);
  }
}
