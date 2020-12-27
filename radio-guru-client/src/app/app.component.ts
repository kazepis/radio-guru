import { Component } from '@angular/core';

import { Song } from './models/song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public song: Song = new Song({
    title: "Knockin' On Heaven's Door",
    artist: "Guns N' Roses",
    album: 'Use Your Illusion II',
    albumArt: undefined
  });
}
