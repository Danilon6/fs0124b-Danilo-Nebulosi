import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ITuoiPreferitiComponent } from './pages/i-tuoi-preferiti/i-tuoi-preferiti.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: "iTuoiPreferiti",
    component: ITuoiPreferitiComponent,
    title: "I Tuoi Preferiti"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
