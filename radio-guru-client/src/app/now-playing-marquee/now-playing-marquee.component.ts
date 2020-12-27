import { Component, Input } from '@angular/core';

import { Song } from '../models/song.model';

@Component({
  selector: 'app-marquee',
  templateUrl: './now-playing-marquee.component.html',
  styleUrls: ['./now-playing-marquee.component.scss']
})
export class MarqueeComponent {
  public song!: Song;

  @Input() set nowPlaying(value: Song | string) {
    if (value instanceof Song) {
      this.song = value as Song;
      return;
    }
  }

  public duplicate: Array<number> = new Array<number>(2);
}
