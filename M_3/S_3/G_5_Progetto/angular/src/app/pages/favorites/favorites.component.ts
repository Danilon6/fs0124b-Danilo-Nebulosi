import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovies } from '../../models/i-movies';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  likedArr:iMovies[] =[]

  userId!:number

  constructor(private moviesSvc:MoviesService, private authSvc:AuthService){

    this.authSvc.$user.subscribe(user =>{
      if (user) {
        this.userId = user.id
      }
    })
  }

  ngOnInit(){

    // this.moviesSvc.getFavorites(this.userId).subscribe(data=>{
    //   this.likedArr = data
    // })

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
