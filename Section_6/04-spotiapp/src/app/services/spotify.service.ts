import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private TOKEN: string = 'BQBB542h5iwiMmhXypA3ZWQoPpHngKzZb6RdvTiIJrvLPP6ylxEuv_kjt2z3RvFwYy8YZf9RwkPAhNS-PPEGGeVhb6ucw0W3c0Q0O189pnI25UrGbwG9';

  constructor(private http: HttpClient) {

  }

  getNewReleases() {
    const url = 'https://api.spotify.com/v1/browse/new-releases';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    });

    return this.http.get(url, { headers });
  }

  getArtist(artistToSearch: string) {
    const url = `https://api.spotify.com/v1/search?q=${artistToSearch}&type=artist&limit=5&offset=0`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    });

    return this.http.get(url, { headers });
  }
}