import { Component } from '@angular/core';
import { iPost } from "../../models/posts"
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-could-like',
  templateUrl: './could-like.component.html',
  styleUrl: './could-like.component.scss'
})
export class CouldLikeComponent {
  postArr:iPost[] = [];

  constructor(private postsSvc:PostsService){}

  ngOnInit():void{
    this.postsSvc.getRandomPosts(4).then(res => this.postArr = res)
  }
}
