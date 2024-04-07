import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iMovies } from '../models/i-movies';
import { BehaviorSubject, Observable, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

type favoritesData = {
  id: number,
  userId: number,
  movieIds: number[]
}
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesUrl: string = environment.moviesUrl

  favoritesUrl: string = environment.favoritesUrl

  moviesArr: iMovies[] = []

  moviesSubject = new BehaviorSubject<iMovies[]>([])

  $movies = this.moviesSubject.asObservable()


  moviesLikedArr: iMovies[] =[]

  moviesLikedSubject = new BehaviorSubject<iMovies[]>([])

  $moviesLiked = this.moviesLikedSubject.asObservable()

  userId!: number;
  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.getAllMovie().subscribe(data => {
      this.moviesSubject.next(data)
      this.moviesArr = data
    })

    const user = this.authSvc.$user.subscribe(user => {
      if (user) {
        this.userId = user.id
      }
    })

    this.getFavorites(this.userId).subscribe(data => {
      this.moviesLikedSubject.next(data)
      this.moviesLikedArr = data
    })
  }


  getAllMovie(): Observable<iMovies[]> {
    return this.http.get<iMovies[]>(this.moviesUrl)
  }


  getMovie(id: number): Observable<iMovies> {
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

  editMovie(editMovie: Partial<iMovies>) {
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

  addToLiked(movieId: number) {
    return this.http.get<favoritesData>(`${this.favoritesUrl}/${this.userId}`).pipe(
      switchMap(data => {
        if (data) {
          if (!data.movieIds.includes(movieId)) {
            const updatedMovieIds = [...data.movieIds, movieId];
            return this.http.put(`${this.favoritesUrl}/${data.id}`, { userId: this.userId, movieIds: updatedMovieIds })
            .pipe(map(() => {
              this.moviesLikedArr = this.moviesArr.filter(movie => data.movieIds.includes(movie.id))
              this.moviesLikedSubject.next(this.moviesLikedArr)
            }))
          }
          return of(null)
        }
        return this.http.post<favoritesData>(this.favoritesUrl, { userId: this.userId, movieIds: [movieId] })
        .pipe(map((data) => {
          this.moviesLikedArr = this.moviesArr.filter(movie => data.movieIds.includes(movie.id))
          this.moviesLikedSubject.next(this.moviesLikedArr)
        }))
      })
    );
  }

  removeFromLiked(movieId: number) {
    return this.http.get<favoritesData>(`${this.favoritesUrl}/${this.userId}`).pipe(
      switchMap(data => {
        const updatedMovieIds = data.movieIds.filter(id => id !== movieId)
        return this.http.put(`${this.favoritesUrl}/${data.id}`, { userId: this.userId, movieIds: updatedMovieIds })
          .pipe(map(() => {
            this.moviesLikedArr = this.moviesArr.filter(movie => data.movieIds.includes(movie.id))
            this.moviesLikedSubject.next(this.moviesLikedArr)
          }))
      })
    );
  }


  getFavorites(userId: number) {
    return this.http.get<favoritesData[]>(`${this.favoritesUrl}?userId=${userId}`)
      .pipe(
        map(data => {
          this.moviesLikedArr = this.moviesArr.filter(movie => data[0].movieIds.includes(movie.id))
          this.moviesLikedSubject.next(this.moviesLikedArr)
          return this.moviesLikedArr
        })
      );
  }
}
