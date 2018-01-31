import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Photos } from './models/photo';
import { PhotosService } from './share/services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: Array<Photos>;

  constructor(private _photosService: PhotosService) {
    this._photosService
      .findAllPhotos()
      .subscribe(photos => {
        this.photos = photos.slice(0, 10) || new Array<Photos>();
      });
  }
}
