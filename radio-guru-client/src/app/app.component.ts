import { Component } from '@angular/core';

import { Song } from './models/song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public song: Song = new Song({
    timestamp: new Date(),
    title: "Knockin' On Heaven's Door",
    artist: "Guns N' Roses",
    album: 'Use Your Illusion II',
    albumArt: 'https://images.45worlds.com/f/cd/guns-n-roses-use-your-illusion-ii-13-cd.jpg'
  });

  public song2: Song = new Song({
    timestamp: new Date(),
    title: 'November Rain',
    artist: "Guns N' Roses",
    album: 'Use Your Illusion I',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/e/ea/GnR--UseYourIllusion1.jpg'
  });
}
