import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovies } from '../../models/i-movies';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  likedArr:iMovies[] =[]
  constructor(private moviesSvc:MoviesService){}

  ngOnInit(){
    this.moviesSvc.getFavorites(1).subscribe(data =>{
      this.likedArr = data
    })
  }
}
