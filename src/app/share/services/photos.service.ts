import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Photos } from '../../models/photo';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {

  constructor(private _http: Http) { }

  findAllPhotos(): Observable<Array<Photos>> {
    return this._http.get('http://jsonplaceholder.typicode.com/photos')
    .map((response) => response.json() as Array<Photos>);
  }

}
