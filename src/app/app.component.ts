import { Component } from '@angular/core';
import { IMovies } from './movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  search = '';
  movies: IMovies[] = [
    {
      'name': 'Black Panther',
      'language': 'ENGLISH',
      'rate': 4.5,
      'type': 'Action Adventure Fantasy',
      'imageUrl': './assets/image/bp.jpg'
    },
    {
      'name': 'Death Wish',
      'language': 'ENGLISH',
      'type': 'Action Crime Thriller',
      'rate': 3.2,
      'imageUrl': './assets/image/dw.jpg'
    },
    {
      'name': 'Darkest Hour',
      'language': 'ENGLISH',
      'type': 'Biography Drama War',
      'rate': 4.0,
      'imageUrl': './assets/image/dh.jpg'
    },
    {
      'name': 'Coco',
      'language': 'ENGLISH',
      'type': 'Adventure Animation Family',
      'rate': 5.0,
      'imageUrl': './assets/image/coco.jpg'
    },
    {
      'name': 'Pari',
      'language': 'HINDI',
      'rate': 2.5,
      'type': 'Horror Thriller',
      'imageUrl': './assets/image/pari.jpg'
    },
    {
      'name': 'Pad Man',
      'language': 'HINDI',
      'type': 'Biography Drama',
      'rate': 4.0,
      'imageUrl': './assets/image/pad.jpg'
    },
    {
      'name': 'Aiyaary',
      'language': 'HINDI',
      'type': 'Action Drama',
      'rate': 3.5,
      'imageUrl': './assets/image/a.jpg'
    },
    {
      'name': 'Veerey Ki Wedding',
      'language': 'HINDI',
      'type': 'Comedy Romance',
      'rate': 2.0,
      'imageUrl': './assets/image/vw.jpg'
    }
  ];
}
