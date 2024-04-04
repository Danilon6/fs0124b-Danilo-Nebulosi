import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUser } from '../models/i-user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ILoginData } from '../models/i-login-data';

type accessData = {
  accessToken: string,
  user: iUser
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<iUser | null>(null)

  $user = this.authSubject.asObservable()
  $isLoggedIn = this.$user.pipe(tap(user => !!user))

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.getUserAfterRefresh
  }

  registerUrl: string = 'http://localhost:3000/register'
  loginUrl: string = 'http://localhost:3000/login'

  register(newUser: Partial<iUser>): Observable<accessData> {
    return this.http.post<accessData>(this.registerUrl, newUser)
  }

  login(loginData: ILoginData): Observable<accessData> {
    return this.http.post<accessData>(this.loginUrl, loginData)
      .pipe(tap(data => {
        this.authSubject.next(data.user)
        localStorage.setItem('accessData', JSON.stringify(data))
      }))
  }


  logout() {
    this.authSubject.next(null)
    localStorage.removeItem('accessData')
    this.router.navigate(['']) //riporto l'utente alla home
  }

  autoLogout(jwt: string) {

    const expirationDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date
    const exiprationMs = expirationDate.getTime() - new Date().getTime()

    setTimeout(() => {
      this.logout()
    }, exiprationMs)
  }

  getUserAfterRefresh(){
    const user = localStorage.getItem('accessData')
    if (!user) return

    const accessData:accessData = JSON.parse(user)
    this.authSubject.next(accessData.user)
    this.autoLogout(accessData.accessToken)
  }
}
