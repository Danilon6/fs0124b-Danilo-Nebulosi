import { Component } from '@angular/core';
import { iMovies } from '../../../models/i-movies';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.scss'
})
export class DetailsMovieComponent {

  movie!: iMovies

  constructor(
    private moviesSvc: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      const id = params.id

      this.moviesSvc.getMovie(id).subscribe(movie => {
        this.movie = movie
      })

    })
  }
}
