import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private postsSvc:PostsService){}

  ngOnInit(){

    this.postsSvc.getAllPosts()
  }
}
