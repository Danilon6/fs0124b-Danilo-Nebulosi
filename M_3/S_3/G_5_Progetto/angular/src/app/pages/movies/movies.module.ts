import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { MoviesComponent } from './movies.component';
import { AddToLikedConfirmationComponent } from './add-to-liked-confirmation/add-to-liked-confirmation.component';


@NgModule({
  declarations: [
    MoviesComponent,
    EditMovieComponent,
    AddMovieComponent,
    DetailsMovieComponent,
    AddToLikedConfirmationComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
