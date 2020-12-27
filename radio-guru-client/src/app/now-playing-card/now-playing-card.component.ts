import { Component, Input } from '@angular/core';

import { Song } from '../models/song.model';

@Component({
  selector: 'app-now-playing-card',
  templateUrl: './now-playing-card.component.html',
  styleUrls: ['./now-playing-card.component.scss']
})
export class NowPlayingCardComponent {
  public song!: Song;
  public overlayUrl!: string;

  @Input() set nowPlaying(value: Song | string) {
    if (value instanceof Song) {
      this.song = value as Song;
      this.overlayUrl = `url('${this.song.albumArt}')`;
      return;
    }
  }
}
