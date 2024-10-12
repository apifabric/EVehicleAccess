import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHARGINGSESSION_MODULE_DECLARATIONS, ChargingSessionRoutingModule} from  './ChargingSession-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChargingSessionRoutingModule
  ],
  declarations: CHARGINGSESSION_MODULE_DECLARATIONS,
  exports: CHARGINGSESSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChargingSessionModule { }