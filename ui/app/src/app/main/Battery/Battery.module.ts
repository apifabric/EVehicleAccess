import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BATTERY_MODULE_DECLARATIONS, BatteryRoutingModule} from  './Battery-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BatteryRoutingModule
  ],
  declarations: BATTERY_MODULE_DECLARATIONS,
  exports: BATTERY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BatteryModule { }