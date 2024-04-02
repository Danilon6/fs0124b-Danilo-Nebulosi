import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiziComponent } from './servizi.component';
import { Servizio1Component } from './servizio1/servizio1.component';
import { Servizio2Component } from './servizio2/servizio2.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: ServiziComponent
  },
  {
    path: 'servizio1', component: Servizio1Component
  },
  {
    path: 'servizio2', component: Servizio2Component,
    canActivate: [AuthGuard]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiziRoutingModule { }
