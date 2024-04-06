import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovies } from '../../models/i-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  constructor(private moviesSvc:MoviesService){}

  moviesArr:iMovies[] = []

  clicked:boolean = false

  ngOnInit(){
    this.moviesSvc.$movies.subscribe( moviesArr => {
      this.moviesArr = moviesArr
    })
  }

  remove(id:number){
    this.moviesSvc.removeMovie(id).subscribe()
  }

  addToLiked(movie:iMovies){

  }
}
