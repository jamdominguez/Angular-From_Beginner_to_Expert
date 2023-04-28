import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  goToHeroeDetail = (index: number) => {
    this.router.navigate(['/heroe', index]);
  }
}
