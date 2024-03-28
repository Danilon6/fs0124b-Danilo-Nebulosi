import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: "iTuoiPreferiti",
    component: PreferitiComponent,
    title: "I tuoi preferiti"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
