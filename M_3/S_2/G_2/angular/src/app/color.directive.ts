import { Directive, ElementRef, inject } from '@angular/core';
import { PostsService } from './posts.service';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  postSvc:PostsService = inject(PostsService)

  constructor(private ref:ElementRef) { }


  ngOnInit(){
    this.ref.nativeElement.style.color = this.postSvc.getRandomColor()
  }
}
