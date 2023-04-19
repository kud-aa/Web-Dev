import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.albumsUrl);
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.photosUrl}?albumId=${albumId}`);
  }

  createAlbum(album: any): Observable<any> {
    return this.http.post<any>(this.albumsUrl, album);
  }

  updateAlbum(album: any): Observable<any> {
    return this.http.put<any>(`${this.albumsUrl}/${album.id}`, album);
  }

  deleteAlbum(album: any): Observable<any> {
    return this.http.delete<any>(`${this.albumsUrl}/${album.id}`);
  }
}
