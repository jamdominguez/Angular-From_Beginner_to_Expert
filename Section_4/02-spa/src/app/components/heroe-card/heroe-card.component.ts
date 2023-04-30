import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent {

  @Input() hero: any = {};
  @Input() id: number = 0;
  index : number = 0;

  constructor(private router: Router) { }

  goToHeroeDetail = () => {
    this.router.navigate(['/heroe', this.id]);
  }

}
