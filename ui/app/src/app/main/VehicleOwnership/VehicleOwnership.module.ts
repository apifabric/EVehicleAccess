import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VEHICLEOWNERSHIP_MODULE_DECLARATIONS, VehicleOwnershipRoutingModule} from  './VehicleOwnership-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VehicleOwnershipRoutingModule
  ],
  declarations: VEHICLEOWNERSHIP_MODULE_DECLARATIONS,
  exports: VEHICLEOWNERSHIP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehicleOwnershipModule { }