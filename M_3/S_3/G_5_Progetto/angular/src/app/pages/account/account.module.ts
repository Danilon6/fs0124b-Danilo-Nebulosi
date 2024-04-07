import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    AccountComponent,
    DetailsComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
