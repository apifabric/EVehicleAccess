import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './VehicleOwnership-card.component.html',
  styleUrls: ['./VehicleOwnership-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.VehicleOwnership-card]': 'true'
  }
})

export class VehicleOwnershipCardComponent {


}