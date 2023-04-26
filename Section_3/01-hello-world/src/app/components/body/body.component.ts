import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    cardInfo: any = {
        message: 'Un gran poder conyeba una gran responsabilidad',
        author: 'Ben Parker'
    };

    showCardInfo = true;

    characters = [
        'Spiderman',
        'Venom',
        'Dr. Octopus'
    ];
}