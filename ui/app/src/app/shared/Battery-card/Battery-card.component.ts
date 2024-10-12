import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Battery-card.component.html',
  styleUrls: ['./Battery-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Battery-card]': 'true'
  }
})

export class BatteryCardComponent {


}