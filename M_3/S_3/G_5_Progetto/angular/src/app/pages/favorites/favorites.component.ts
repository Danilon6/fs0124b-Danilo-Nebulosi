import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovies } from '../../models/i-movies';
import { AuthService } from '../../auth/auth.service';

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
    this.moviesSvc.$moviesLiked.subscribe(data =>{
      this.likedArr = data
      console.log(data);

    })
  }

  remove(id:number){
    this.moviesSvc.removeMovie(id).subscribe()
  }

  removeFromLiked(movieId:number){
    this.moviesSvc.removeFromLiked(movieId).subscribe(data =>{
      this.likedArr = data
    })
  }
}
