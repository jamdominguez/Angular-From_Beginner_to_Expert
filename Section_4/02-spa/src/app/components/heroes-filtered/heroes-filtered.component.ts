import { Component } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-filtered',
  templateUrl: './heroes-filtered.component.html'
})
export class HeroesFilteredComponent {

  heroes: Heroe[] = [];
  name: string = '';

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe( params => {        
        this.name = params['name'];
        this.heroes = this.heroesService.searchHeroe(this.name);
      });
  }

}
