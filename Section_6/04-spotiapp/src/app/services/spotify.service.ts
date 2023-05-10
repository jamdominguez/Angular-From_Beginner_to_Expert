import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private TOKEN: string = 'BQC0GPgq9atvvXjwHjtao_RMT5CFdIN_Kf1A5mZqRiw1H3eGtEblN4sqD0mfWOR1_6LEuCHY12pKWrVgYnSFyQGZ0bSsXNp8MfNSuFqAqhD6uO6cfyZM';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((resp: any) => resp.albums.items));
  }

  getArtists(artistToSearch: string) {
    return this.getQuery(`search?q=${artistToSearch}&type=artist&limit=5&offset=0`).pipe(map((resp: any) => resp.artists.items));
  }

  getArtistDetails(artistId: string) {
    return this.getQuery(`artists/${artistId}`);//.pipe(map((resp: any) => resp.artists.items));
  }

  getArtistTopTracks(artistId: string, market: string = 'ES') {
    return this.getQuery(`artists/${artistId}/top-tracks?market=${market}`).pipe(map((resp: any) => resp.tracks));
  }
}