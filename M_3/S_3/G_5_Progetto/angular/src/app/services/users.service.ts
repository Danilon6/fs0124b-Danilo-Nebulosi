import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iUser } from '../models/i-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl: string = environment.usersUrl

  constructor(private http:HttpClient) { }

  getUsers(): Observable<iUser[]>{
    return this.http.get<iUser[]>(this.usersUrl)
  }
}
