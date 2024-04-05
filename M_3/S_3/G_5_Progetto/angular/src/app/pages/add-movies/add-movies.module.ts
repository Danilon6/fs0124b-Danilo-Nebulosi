import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMoviesRoutingModule } from './add-movies-routing.module';
import { AddMoviesComponent } from './add-movies.component';


@NgModule({
  declarations: [
    AddMoviesComponent
  ],
  imports: [
    CommonModule,
    AddMoviesRoutingModule
  ]
})
export class AddMoviesModule { }
