import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    activatedRoute.params.subscribe((params) => {
      const artistId = params['id'];
      this.getDetails(artistId);
      this.getTopTracks(artistId);
    });
  }

  getDetails = (artistId: string) => {
    this.loading = true;
    this.spotifyService.getArtistDetails(artistId).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks = (artistId: string) => {
    this.loading = true;
    this.spotifyService.getArtistTopTracks(artistId).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
      this.loading = false;
    });
  }

  getTrakSpotifyUrl = (trackId: string) => {
    console.log(trackId);
    return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
  }
}