import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { Pagina404Component } from './pages/pagina-404/pagina-404.component';
import { PostItemComponent } from './post-item/post-item.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    Pagina404Component,
    PostItemComponent,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
