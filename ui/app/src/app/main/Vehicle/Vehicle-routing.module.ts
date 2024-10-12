import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleHomeComponent } from './home/Vehicle-home.component';
import { VehicleNewComponent } from './new/Vehicle-new.component';
import { VehicleDetailComponent } from './detail/Vehicle-detail.component';

const routes: Routes = [
  {path: '', component: VehicleHomeComponent},
  { path: 'new', component: VehicleNewComponent },
  { path: ':vin', component: VehicleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Vehicle-detail-permissions'
      }
    }
  },{
    path: ':vehicle_vin/ChargingSession', loadChildren: () => import('../ChargingSession/ChargingSession.module').then(m => m.ChargingSessionModule),
    data: {
        oPermission: {
            permissionId: 'ChargingSession-detail-permissions'
        }
    }
},{
    path: ':vin/InsurancePolicy', loadChildren: () => import('../InsurancePolicy/InsurancePolicy.module').then(m => m.InsurancePolicyModule),
    data: {
        oPermission: {
            permissionId: 'InsurancePolicy-detail-permissions'
        }
    }
},{
    path: ':vin/ServiceRecord', loadChildren: () => import('../ServiceRecord/ServiceRecord.module').then(m => m.ServiceRecordModule),
    data: {
        oPermission: {
            permissionId: 'ServiceRecord-detail-permissions'
        }
    }
},{
    path: ':vin/VehicleOwnership', loadChildren: () => import('../VehicleOwnership/VehicleOwnership.module').then(m => m.VehicleOwnershipModule),
    data: {
        oPermission: {
            permissionId: 'VehicleOwnership-detail-permissions'
        }
    }
}
];

export const VEHICLE_MODULE_DECLARATIONS = [
    VehicleHomeComponent,
    VehicleNewComponent,
    VehicleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }