import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { iMovies } from '../../../models/i-movies';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.scss'
})
export class EditMovieComponent {

  movie!: iMovies

  moviesArr: iMovies[] = []

  genresString: string = ""

  constructor(
    private moviesSvc: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.moviesSvc.$movies.subscribe(moviesArr => {
      this.moviesArr = moviesArr
      console.log(moviesArr);
    })

    this.route.params.subscribe((params: any) => {
      const id = params.id

      this.moviesSvc.getMovie(id).subscribe(movie => {
        this.movie = movie
      })

    })
  }

  submitForm(newMovie:NgForm){
    const genresWithoutSpaces = this.genresString.replace(/\s/g, ',');
    const genresArray = genresWithoutSpaces.split(',').map(genre => genre.trim());
    const filteredGenresArray = genresArray.filter(genre => genre !== '');
    this.movie.genres = filteredGenresArray;
    this.moviesSvc.editMovie(this.movie)
      .subscribe(() => {
        newMovie.resetForm()
      })
  }
}
