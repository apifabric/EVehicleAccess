import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleOwnershipHomeComponent } from './home/VehicleOwnership-home.component';
import { VehicleOwnershipNewComponent } from './new/VehicleOwnership-new.component';
import { VehicleOwnershipDetailComponent } from './detail/VehicleOwnership-detail.component';

const routes: Routes = [
  {path: '', component: VehicleOwnershipHomeComponent},
  { path: 'new', component: VehicleOwnershipNewComponent },
  { path: ':id', component: VehicleOwnershipDetailComponent,
    data: {
      oPermission: {
        permissionId: 'VehicleOwnership-detail-permissions'
      }
    }
  }
];

export const VEHICLEOWNERSHIP_MODULE_DECLARATIONS = [
    VehicleOwnershipHomeComponent,
    VehicleOwnershipNewComponent,
    VehicleOwnershipDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleOwnershipRoutingModule { }