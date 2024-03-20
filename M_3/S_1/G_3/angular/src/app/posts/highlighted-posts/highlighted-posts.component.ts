import { Component } from '@angular/core';
import { iRoot } from "../../modules/articles"
import { iPost } from "../../modules/articles"

@Component({
  selector: 'app-highlighted-posts',
  templateUrl: './highlighted-posts.component.html',
  styleUrl: './highlighted-posts.component.scss'
})
export class HighlightedPostsComponent {
  postArr:iPost[] = [];

  ngOnInit():void{

    fetch('../assets/db.json')
    .then(articoli => articoli.json())
    .then((articoli:iRoot) =>this.postArr = articoli.posts)

  }
}
