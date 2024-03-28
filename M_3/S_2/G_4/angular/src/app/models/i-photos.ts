export interface iRoot {
  photos: iPhotos[]
}

export interface iPhotos {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
