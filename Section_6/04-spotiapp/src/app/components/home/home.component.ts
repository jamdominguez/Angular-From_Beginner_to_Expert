import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.errorMsg = '';
    this.spotify.getNewReleases().subscribe((resp: any) => {
      this.newReleases = resp;
      // console.log(this.newReleases);
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.error = true;
      console.log(error);
      this.errorMsg = error.error.error.message;
    });
  }
}