export class Song {
  timestamp!: Date;
  title!: string;
  artist: string | undefined;
  album: string | undefined;
  albumArt: string | undefined;

  public constructor(init?: Partial<Song>) {
    Object.assign(this, init);
  }
}
