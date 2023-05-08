import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private TOKEN: string = 'BQAYOWCcrHpOYhFpN5T5moZVWdzyg78QxNAfsv--5PziJHY7634Z7ZN9v-fTFpPD9mmB0-wehCZVH-Ngszy248p16KvHN4w35BN56p2hffrwrP6AgXNr';

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

  getArtist(artistToSearch: string) {
    return this.getQuery(`search?q=${artistToSearch}&type=artist&limit=5&offset=0`).pipe(map((resp: any) => resp.artists.items));
  }
}