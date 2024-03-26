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
  tagsArr:string[] = []
  clicked: { [key: string]: boolean } = {};
  constructor(private postsSvc:PostsService){}

  ngOnInit():void{
    this.postArr = this.postsSvc.getActivePost()
    this.tagsArr = this.postsSvc.getAllTags()
    this.tagsArr.forEach(tag => {
      this.clicked[tag] = false;
  });
  }
  toggleClicked(tag: string) {
    this.clicked[tag] = !this.clicked[tag];
    this.postArr = this.postsSvc.getFilteredPostByTags(tag)
  }

}
