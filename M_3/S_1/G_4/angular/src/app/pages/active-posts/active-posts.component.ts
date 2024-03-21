import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { iPost } from '../../models/posts';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
  postArr:iPost[] = [];

  constructor(private postsSvc:PostsService){}

  ngOnInit():void{
    this.postsSvc.getActivePost().then(res => this.postArr = res)
  }
}
