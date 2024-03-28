import { Component } from '@angular/core';
import { iPhotos } from '../../models/i-photos';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  photosArr: iPhotos[] = []


  constructor(private photosSvc: PhotosService) { }

  ngOnInit() {
    this.photosSvc.$photo.subscribe(photos => {

      this.photosArr = photos

    })
  }

  add(photo:iPhotos){
    this.photosSvc.add(photo)
  }

  remove(id:number){
    this.photosSvc.remove(id).subscribe()
  }

}
