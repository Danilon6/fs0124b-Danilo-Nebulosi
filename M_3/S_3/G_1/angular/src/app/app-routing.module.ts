import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [

  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title: "Home"
  },

  {
    path: 'chi-siamo', loadChildren: () => import('./pages/chi-siamo/chi-siamo.module').then(m => m.ChiSiamoModule),
    title: "Chi siamo"
  },

  {
    path: 'servizi', loadChildren: () => import('./pages/servizi/servizi.module').then(m => m.ServiziModule),
    title: "Servizi"
  },

  {
    path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    title: "Pagina protetta",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
