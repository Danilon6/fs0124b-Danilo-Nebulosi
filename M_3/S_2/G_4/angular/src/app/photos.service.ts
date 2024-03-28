import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPhotos } from './models/i-photos';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl: string = "http://localhost:3000/photos";


  photosArr:iPhotos[] = []

  photosSubject = new BehaviorSubject<iPhotos[]>([])

  $photo = this.photosSubject.asObservable()


  photosLikedArr:iPhotos[] = []

  photoLikedSubject = new BehaviorSubject<iPhotos[]>([])

  $photoLiked = this.photoLikedSubject.asObservable()


  constructor(private http: HttpClient) {
    this.getAllPhotos().subscribe(photos => {
      this.photosSubject.next(photos)
      this.photosArr = photos
    })
  }

  getAllPhotos(): Observable<iPhotos[]> {
    return this.http.get<iPhotos[]>(this.apiUrl)
  }


  add(photoLiked: iPhotos) {
    const currentPhotos = this.photoLikedSubject.value
    const updatedPhotos = [...currentPhotos, photoLiked];
    this.photoLikedSubject.next(updatedPhotos)
  }

  remove(id:number){
    return this.http.delete<iPhotos>(this.apiUrl + '/' + id)
    .pipe(tap(() => {
      this.photosArr = this.photosArr.filter(p => p.id != id)
      this.photosSubject.next(this.photosArr)
      this.photosLikedArr = this.photosLikedArr.filter(p => p.id != id)
      this.photoLikedSubject.next(this.photosLikedArr)
    }))
  }

  removeFromLiked(id:number){
    let currentLikedPhotos = this.photoLikedSubject.value
    currentLikedPhotos = currentLikedPhotos.filter(p => p.id != id)
    this.photoLikedSubject.next(currentLikedPhotos)
  }
}
