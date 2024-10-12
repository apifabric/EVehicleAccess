import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Model-card.component.html',
  styleUrls: ['./Model-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Model-card]': 'true'
  }
})

export class ModelCardComponent {


}