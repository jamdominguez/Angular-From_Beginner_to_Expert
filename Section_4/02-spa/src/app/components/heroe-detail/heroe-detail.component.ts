import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html'
})
export class HeroeDetailComponent {

  heroe: Heroe = {};

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = heroesService.getHeroe(params['id']);
    });
  }
}
