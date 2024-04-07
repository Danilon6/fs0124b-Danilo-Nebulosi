import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { iMovies } from '../../../models/i-movies';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs';
import { iUser } from '../../../models/i-user';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  likedArr:iMovies[] =[]

  user!:iUser

  constructor(private moviesSvc:MoviesService, private authSvc:AuthService){

    this.authSvc.$user.subscribe(user =>{
      if (user) {
        this.user = user
      }
    })

  }

  ngOnInit(){

    this.moviesSvc.$moviesLiked.subscribe(likedArr =>{
      this.likedArr = likedArr
    })

  }

  remove(id:number){
    this.moviesSvc.removeMovie(id).subscribe()
  }

  removeFromLiked(movieId:number){
    this.moviesSvc.removeFromLiked(movieId).subscribe()
  }

}
