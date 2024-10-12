import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHARGER_MODULE_DECLARATIONS, ChargerRoutingModule} from  './Charger-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChargerRoutingModule
  ],
  declarations: CHARGER_MODULE_DECLARATIONS,
  exports: CHARGER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChargerModule { }