import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurancePolicyHomeComponent } from './home/InsurancePolicy-home.component';
import { InsurancePolicyNewComponent } from './new/InsurancePolicy-new.component';
import { InsurancePolicyDetailComponent } from './detail/InsurancePolicy-detail.component';

const routes: Routes = [
  {path: '', component: InsurancePolicyHomeComponent},
  { path: 'new', component: InsurancePolicyNewComponent },
  { path: ':id', component: InsurancePolicyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'InsurancePolicy-detail-permissions'
      }
    }
  }
];

export const INSURANCEPOLICY_MODULE_DECLARATIONS = [
    InsurancePolicyHomeComponent,
    InsurancePolicyNewComponent,
    InsurancePolicyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsurancePolicyRoutingModule { }