import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/guest.guard';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title:'Home',
    canActivate: [GuestGuard],
  },
  {
    path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule),
    title:'Tutti i nostri film',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    title: 'Auth',
    canActivate: [GuestGuard],
    canActivateChild: [GuestGuard],
    },
  {
    path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
    title: 'I nostri utenti',
    canActivate: [AuthGuard]
  },
  {
    path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    title: 'Il mio account',
    canActivate: [AuthGuard],
    canActivateChild: [GuestGuard]
  },
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
