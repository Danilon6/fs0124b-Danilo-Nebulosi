import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMoviesComponent } from './edit-movies.component';

const routes: Routes = [{ path: '', component: EditMoviesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMoviesRoutingModule { }
