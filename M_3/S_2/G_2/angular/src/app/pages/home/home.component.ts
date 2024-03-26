import { Component, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../../posts.service';
import { iPost } from '../../models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  firstPostArr:iPost[] = [];
  randomPostArr:iPost[] = [];
  mostraForm = false
  constructor(private postsSvc:PostsService){}
  ngOnInit(){

    this.firstPostArr.push(this.postsSvc.getFirstPost())
    this.randomPostArr = this.postsSvc.getRandomPosts(4)
  }

}
