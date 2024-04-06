import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovies } from '../models/i-movies';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

type favoritesData = {
  id:number,
  userId:number,
  movieIds:number[]
}
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesUrl: string = environment.moviesUrl
  favoritesUrl: string = environment.favoritesUrl

  moviesArr: iMovies[] = []

  moviesLikedArr: iMovies[] = []

  moviesSubject = new BehaviorSubject<iMovies[]>([])

  $movies = this.moviesSubject.asObservable()


  userId!:number;
  constructor(private http: HttpClient, private authSvc:AuthService) {
    this.getAllMovie().subscribe(data => {
      this.moviesSubject.next(data)
      this.moviesArr = data
    })
  }


  getAllMovie(): Observable<iMovies[]>{
    return this.http.get<iMovies[]>(this.moviesUrl)
  }


  getMovie(id: number): Observable<iMovies>{
      return this.http.get<iMovies>(this.moviesUrl + '/' + id)
}

  addMovie(newMovie: Partial<iMovies>): Observable<iMovies> {
    return this.http.post<iMovies>(this.moviesUrl, newMovie)
      .pipe(tap((movie) => {
        this.moviesArr.push(movie)
        this.moviesSubject.next(this.moviesArr)
      }))
  }

  removeMovie(id: number): Observable<iMovies> {
    return this.http.delete<iMovies>(this.moviesUrl + '/' + id)
      .pipe(tap(() => {
        this.moviesArr = this.moviesArr.filter(m => m.id != id)
        this.moviesSubject.next(this.moviesArr)
      }))
  }

  editMovie(editMovie:Partial<iMovies>){
    return this.http.post(this.moviesUrl + "/" + editMovie.id, editMovie)
    // .pipe(tap((movie) => {
    //   const index = this.moviesArr.findIndex(movie => movie.id == editMovie.id)
    //   const updatedMovie:iMovies = {
    //     id: 2,
    //     ...editMovie
    //   }
    //   const x = this.moviesArr.splice(index, 1, editMovie)
    //   this.moviesSubject.next(this.moviesArr)
    // }))
    //DA GESTIRE
  }

  addToLiked(movie:iMovies){
    const user = this.authSvc.$user.subscribe(user =>{
      if (user) {
        this.userId = user.id
      }
    })
    return this.http.post<favoritesData>(this.favoritesUrl, { "userId": this.userId, "moviesIds": [movie.id] });

  }

  getFavorites(userId: number) {
    return this.http.get<favoritesData>(this.favoritesUrl + "?userId=" + userId)
    .pipe(
      map(data => this.moviesArr.filter(movie => data.movieIds.includes(movie.id)))
    );
  }
}
