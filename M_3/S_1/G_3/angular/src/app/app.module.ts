import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainComponents/navbar/navbar.component';
import { HighlightedPostsComponent } from './posts/highlighted-posts/highlighted-posts.component';
import { CouldLikeComponent } from './posts/could-like/could-like.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighlightedPostsComponent,
    CouldLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
