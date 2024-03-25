import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPost } from '../models/posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {

  @Input() post!:iPost
}
