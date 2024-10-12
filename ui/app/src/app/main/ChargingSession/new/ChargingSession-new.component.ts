import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ChargingSession-new',
  templateUrl: './ChargingSession-new.component.html',
  styleUrls: ['./ChargingSession-new.component.scss']
})
export class ChargingSessionNewComponent {
  @ViewChild("ChargingSessionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}