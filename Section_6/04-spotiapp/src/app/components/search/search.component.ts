import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = []
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = false;
  }

  getArtist = (text: string) => {
    if(text.trim() != '') {
      this.loading = true;
      this.spotify.getArtists(text).subscribe((resp: any) => {        
        this.artists = resp;
        // console.log(this.artists);
        this.loading = false;
      });
    }
  }
}
