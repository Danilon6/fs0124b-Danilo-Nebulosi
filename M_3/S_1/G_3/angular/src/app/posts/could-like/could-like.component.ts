import { Component } from '@angular/core';
import { iRoot } from "../../modules/articles"
import { iPost } from "../../modules/articles"

@Component({
  selector: 'app-could-like',
  templateUrl: './could-like.component.html',
  styleUrl: './could-like.component.scss'
})
export class CouldLikeComponent {
  postArr:iPost[] = [];


  ngOnInit():void{

    fetch('../assets/db.json')
    .then(articoli => articoli.json())
    .then((articoli:iRoot) => this.postArr = articoli.posts)
  }

  postCasuale(){
    const randomIndex =  Math.floor(Math.random() * this.postArr.length);
    return this.postArr[randomIndex]
  }

}
