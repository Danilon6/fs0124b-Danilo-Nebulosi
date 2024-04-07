import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovies } from '../../models/i-movies';
import { Dialog } from '@angular/cdk/dialog';

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

  addToLiked(movieId:number){
    this.moviesSvc.addToLiked(movieId).subscribe()
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open<string>(appMovies, {
  //     width: '250px',
  //     data: {"Hai aggiunto il film ai preferiti"},
  //   });

  //   dialogRef.closed.subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
}
