import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ToDoDoneComponent } from './pages/to-do-done/to-do-done.component';
import { ToDoUndoneComponent } from './pages/to-do-undone/to-do-undone.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToDoDoneComponent,
    ToDoUndoneComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
