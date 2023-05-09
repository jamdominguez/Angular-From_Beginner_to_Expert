import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  @Input() cards: any[] = [];

  constructor(private router: Router) { }

  goToArtist = (card: any) => {
    let id = '';
    if (card.type === 'artist') id = card.id;
    else if (card.type === 'album') id = card.artists[0].id;

    if (id != '') this.router.navigate(['artist', id]);
  }

}