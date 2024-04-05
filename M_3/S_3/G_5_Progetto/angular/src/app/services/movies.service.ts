import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovies } from '../models/i-movies';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl:string = environment.moviesUrl

  moviesArr:iMovies[] = []

  moviesSubject = new BehaviorSubject<iMovies[]>([])

  $movies = this.moviesSubject.asObservable()

  constructor(private http:HttpClient) {}


  getMovie(id?:number){
    if (id) {
      return this.moviesArr.find(m => m.id == id)
    }

    return this.http.get<iMovies[]>(this.moviesUrl)
  }


  addMovie(newMovie:Partial<iMovies>){
    return this.http.post<iMovies>(this.moviesUrl, newMovie)
    .pipe(tap((movie) => {
      this.moviesArr.push(movie)
      this.moviesSubject.next(this.moviesArr)
    }))
  }

  removeMovie(id:number){
    return this.http.delete<iMovies>(this.moviesUrl+''+id)
    .pipe(tap(() =>{
      this.moviesArr = this.moviesArr.filter(m => m.id != id)
      this.moviesSubject.next(this.moviesArr)
    }))
  }
}
