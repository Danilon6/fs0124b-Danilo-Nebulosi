import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiSiamoRoutingModule } from './chi-siamo-routing.module';
import { ChiSiamoComponent } from './chi-siamo.component';
import { ComponenteNonSharedComponent } from './componente-non-shared/componente-non-shared.component';


@NgModule({
  declarations: [
    ChiSiamoComponent,
    ComponenteNonSharedComponent
  ],
  imports: [
    CommonModule,
    ChiSiamoRoutingModule
  ]
})
export class ChiSiamoModule { }
