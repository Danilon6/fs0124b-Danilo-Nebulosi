import { Component } from '@angular/core';
import { iPhotos } from '../../models/i-photos';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

  photosLikedArr:iPhotos[] = []

  constructor(private photosSvc: PhotosService) { }

  ngOnInit() {
    this.photosSvc.$photoLiked.subscribe(photos => {

      this.photosLikedArr = photos

    })
  }

  remove(id:number){
    this.photosSvc.remove(id).subscribe()
  }

  removeFromLiked(id:number){
    this.photosSvc.removeFromLiked(id)
  }

}
