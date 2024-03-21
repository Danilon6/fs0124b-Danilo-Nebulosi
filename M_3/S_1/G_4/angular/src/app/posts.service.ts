import { Injectable } from '@angular/core';
import { iPost, iRoot } from './models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getAllPosts():Promise<iPost[]>{

    return fetch('../assets/db.json')
    .then(articoli => articoli.json())
    .then((articoli:iRoot) => articoli.posts)

  }

  getFirstPost():Promise<iPost>{
    return this.getAllPosts()
    .then(posts => posts[0])
  }

  getRandomPosts(n:number):Promise<iPost[]>{
    return this.getAllPosts()
    .then(posts => {
      const randomPostsArr:iPost[] = [];
      for (let i = 0; i < n; i++) {
        const randomIndex =  Math.floor(Math.random() * posts.length);
        randomPostsArr.push(posts[randomIndex])
      }
      return randomPostsArr
    })
  }

  getActivePost():Promise<iPost[]>{
    return this.getAllPosts()
    .then(posts => posts.filter(posts => posts.active))
  }

  getInactivePost():Promise<iPost[]>{
    return this.getAllPosts()
    .then(posts => posts.filter(posts => !posts.active))
  }
}
