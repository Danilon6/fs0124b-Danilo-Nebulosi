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


  constructor(private moviesSvc:MoviesService, private authSvc:AuthService){

  }

  ngOnInit(){
    this.moviesSvc.$moviesLiked.subscribe( moviesLikedArr => {
      this.likedArr = moviesLikedArr
    })
    // this.moviesSvc.getFavorites(2).subscribe(data=>{
    //   this.likedArr = data
    // })
  }

  remove(id:number){
    this.moviesSvc.removeMovie(id).subscribe()
  }

  removeFromLiked(movieId:number){
    this.moviesSvc.removeFromLiked(movieId).subscribe()
  }

}
