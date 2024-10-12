import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHARGINGSTATION_MODULE_DECLARATIONS, ChargingStationRoutingModule} from  './ChargingStation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChargingStationRoutingModule
  ],
  declarations: CHARGINGSTATION_MODULE_DECLARATIONS,
  exports: CHARGINGSTATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChargingStationModule { }