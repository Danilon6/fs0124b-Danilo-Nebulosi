import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '',
  component: AccountComponent,
  title: 'Il mio account'
  },
  {
    path:'favorites',
    component: FavoritesComponent,
    title:'I tuoi preferiti'
  },
  {
    path:'details',
    component: DetailsComponent,
    title:`Dettagli sull'account`
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
