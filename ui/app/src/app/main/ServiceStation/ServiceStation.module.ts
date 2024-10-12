import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICESTATION_MODULE_DECLARATIONS, ServiceStationRoutingModule} from  './ServiceStation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceStationRoutingModule
  ],
  declarations: SERVICESTATION_MODULE_DECLARATIONS,
  exports: SERVICESTATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceStationModule { }