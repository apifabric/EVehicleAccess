import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ChargingSession-card.component.html',
  styleUrls: ['./ChargingSession-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ChargingSession-card]': 'true'
  }
})

export class ChargingSessionCardComponent {


}