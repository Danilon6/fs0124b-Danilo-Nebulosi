import { AddToLikedConfirmationComponent } from './add-to-liked-confirmation/add-to-liked-confirmation.component';
import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovies } from '../../models/i-movies';
import {Dialog} from '@angular/cdk/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  constructor(private moviesSvc:MoviesService,
    public dialog: Dialog
  ){}

  moviesArr:iMovies[] = []

  ngOnInit(){
    this.moviesSvc.$movies.subscribe( moviesArr => {
      this.moviesArr = moviesArr
    })
  }

  remove(id:number){
    this.moviesSvc.removeMovie(id).subscribe()
  }

  addToLiked(movieId:number){
    this.moviesSvc.addToLiked(movieId).subscribe(() =>{
      this.openDialog()
    })
  }

  openDialog() {
    this.dialog.open(AddToLikedConfirmationComponent, {
      minWidth: '350px'
    })
  }
}
