import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditMoviesRoutingModule } from './edit-movies-routing.module';
import { EditMoviesComponent } from './edit-movies.component';


@NgModule({
  declarations: [
    EditMoviesComponent
  ],
  imports: [
    CommonModule,
    EditMoviesRoutingModule
  ]
})
export class EditMoviesModule { }
