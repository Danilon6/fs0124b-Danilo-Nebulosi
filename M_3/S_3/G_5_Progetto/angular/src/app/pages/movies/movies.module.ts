import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoviesComponent,
    EditMovieComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
