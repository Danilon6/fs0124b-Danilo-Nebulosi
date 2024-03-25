import { Component } from '@angular/core';
import { iPost } from "../../models/posts"
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-hightlighted-posts',
  templateUrl: './hightlighted-posts.component.html',
  styleUrl: './hightlighted-posts.component.scss'
})
export class HightlightedPostsComponent {
  postArr:iPost[] = [] ;

  constructor(private postsSvc:PostsService){}

  ngOnInit():void{
    this.postsSvc.getFirstPost().then(res => this.postArr.push(res))
  }
}
