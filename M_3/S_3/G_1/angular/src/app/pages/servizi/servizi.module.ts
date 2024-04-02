import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiziRoutingModule } from './servizi-routing.module';
import { ServiziComponent } from './servizi.component';
import { Servizio1Component } from './servizio1/servizio1.component';
import { Servizio2Component } from './servizio2/servizio2.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';


@NgModule({
  declarations: [
    ServiziComponent,
    Servizio1Component,
    Servizio2Component
  ],
  imports: [
    CommonModule,
    ServiziRoutingModule,
    SharedModule
  ]
})
export class ServiziModule { }
