import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: '',
    component: MoviesComponent,
    title:'Movies'
  },
  { path: 'edit/:id',
    component: EditMovieComponent,
    title:'Modifica il film'
  },
  {
    path:'add',
    component: AddMovieComponent,
    title:'Aggiungi un nuovo film'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
