import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Charger-new',
  templateUrl: './Charger-new.component.html',
  styleUrls: ['./Charger-new.component.scss']
})
export class ChargerNewComponent {
  @ViewChild("ChargerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}