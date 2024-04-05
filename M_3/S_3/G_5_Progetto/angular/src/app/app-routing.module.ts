import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/guest.guard';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title:'Home'
  },
  {
    path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule),
    title:'movies',
    canActivate: [AuthGuard]
    },
  {
    path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule),
    title: 'favorites',
    canActivate: [AuthGuard]
    },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    title: 'auth',
    canActivate: [GuestGuard],
    canActivateChild: [GuestGuard],
    },
  { path: 'add-movies', loadChildren: () => import('./pages/add-movies/add-movies.module').then(m => m.AddMoviesModule) },
  { path: 'edit-movies', loadChildren: () => import('./pages/edit-movies/edit-movies.module').then(m => m.EditMoviesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
