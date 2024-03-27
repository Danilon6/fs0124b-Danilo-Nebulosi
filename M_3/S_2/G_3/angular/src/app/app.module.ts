import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ITuoiPreferitiComponent } from './pages/i-tuoi-preferiti/i-tuoi-preferiti.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleProductComponent } from './mainComponents/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ITuoiPreferitiComponent,
    HeaderComponent,
    FooterComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
