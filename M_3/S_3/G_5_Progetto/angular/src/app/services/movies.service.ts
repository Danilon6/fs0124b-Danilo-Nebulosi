import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovies } from '../models/i-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl:string = environment.moviesUrl


  constructor(private http:HttpClient) {}


  addFilm(newFilm:Partial<iMovies>){

  }
}
