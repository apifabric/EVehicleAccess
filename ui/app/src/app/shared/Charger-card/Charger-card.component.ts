import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Charger-card.component.html',
  styleUrls: ['./Charger-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Charger-card]': 'true'
  }
})

export class ChargerCardComponent {


}