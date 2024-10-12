import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './InsurancePolicy-card.component.html',
  styleUrls: ['./InsurancePolicy-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.InsurancePolicy-card]': 'true'
  }
})

export class InsurancePolicyCardComponent {


}