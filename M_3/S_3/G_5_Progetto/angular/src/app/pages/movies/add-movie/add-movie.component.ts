import { Component } from '@angular/core';
import { iMovies } from '../../../models/i-movies';
import { MoviesService } from '../../../services/movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent {
  genresString: string = ''

  newMovie:Partial<iMovies>={
  }

  constructor(private moviesSvc:MoviesService){}


  submitForm(newMovie:NgForm){
    const genresWithoutSpaces = this.genresString.replace(/\s/g, ',');
    const genresArray = genresWithoutSpaces.split(',').map(genre => genre.trim());
    const filteredGenresArray = genresArray.filter(genre => genre !== '');
  this.newMovie.genres = filteredGenresArray;
    this.moviesSvc.addMovie(this.newMovie)
    .subscribe(() =>{
      newMovie.resetForm()
    })
  }
}
