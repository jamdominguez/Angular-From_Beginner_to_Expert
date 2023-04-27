import { Component } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }
}
