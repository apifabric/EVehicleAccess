import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INSURANCEPOLICY_MODULE_DECLARATIONS, InsurancePolicyRoutingModule} from  './InsurancePolicy-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InsurancePolicyRoutingModule
  ],
  declarations: INSURANCEPOLICY_MODULE_DECLARATIONS,
  exports: INSURANCEPOLICY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InsurancePolicyModule { }