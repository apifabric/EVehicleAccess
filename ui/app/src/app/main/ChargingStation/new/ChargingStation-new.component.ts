import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ChargingStation-new',
  templateUrl: './ChargingStation-new.component.html',
  styleUrls: ['./ChargingStation-new.component.scss']
})
export class ChargingStationNewComponent {
  @ViewChild("ChargingStationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}