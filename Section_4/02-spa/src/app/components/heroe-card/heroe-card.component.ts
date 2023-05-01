import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent {

  @Input() hero: Heroe = {};
  @Input() id: number = 0;

  @Output() heroDetail: EventEmitter<number>;

  constructor() {
    this.heroDetail = new EventEmitter();
  }

  goToHeroeDetail = () => {
    this.heroDetail.emit(this.id);
  }
}
