import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { HightlightedPostsComponent } from './posts/hightlighted-posts/hightlighted-posts.component';
import { CouldLikeComponent } from './posts/could-like/could-like.component';
import { Pagina404Component } from './pages/pagina-404/pagina-404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    HightlightedPostsComponent,
    CouldLikeComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
