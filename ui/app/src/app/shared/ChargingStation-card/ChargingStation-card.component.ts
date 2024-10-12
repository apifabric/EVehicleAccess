import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ChargingStation-card.component.html',
  styleUrls: ['./ChargingStation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ChargingStation-card]': 'true'
  }
})

export class ChargingStationCardComponent {


}