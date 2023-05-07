import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private TOKEN: string = 'BQAKc5ENlvElgH6oVmHdqIt9OoNrZX0G4T6GpZWifkLv2gyezusSGYdus1SPpE1FE4QqBKMWRSKN4Og1ANVs9ASuWB1yfe1ARo2ikix-1QrtLE0ofvC1';
  
  constructor(private http: HttpClient) { }
  
  getNewReleases = () => {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });    
  }
}