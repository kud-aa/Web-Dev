import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbums().subscribe(albums => {
      this.album = albums.find(album => album.id === id);
    });
  }

  editAlbum() {
    this.isEditing = true;
  }

  saveAlbum() {
    // Implement update operation
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  gotoPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
