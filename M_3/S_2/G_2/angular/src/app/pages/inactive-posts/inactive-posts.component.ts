import { Component } from '@angular/core';
import { iPost } from '../../models/posts';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  postArr:iPost[] = [];

  constructor(private postsSvc:PostsService){}

  ngOnInit():void{
    this.postArr = this.postsSvc.getInactivePost()
  }
}
