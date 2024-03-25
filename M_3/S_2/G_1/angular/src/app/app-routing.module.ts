import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { Pagina404Component } from './pages/pagina-404/pagina-404.component';

const routes: Routes = [

  {
    path:"",
    component: HomeComponent
  },
  {
    path:"active-posts",
    component: ActivePostsComponent
  },
  {
    path:"inactive-posts",
    component: InactivePostsComponent
  },
  {
    path:"**",
    component: Pagina404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
