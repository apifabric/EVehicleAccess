import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServiceStation-new',
  templateUrl: './ServiceStation-new.component.html',
  styleUrls: ['./ServiceStation-new.component.scss']
})
export class ServiceStationNewComponent {
  @ViewChild("ServiceStationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}