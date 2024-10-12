import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceStation-card.component.html',
  styleUrls: ['./ServiceStation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceStation-card]': 'true'
  }
})

export class ServiceStationCardComponent {


}