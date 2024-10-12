import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteryHomeComponent } from './home/Battery-home.component';
import { BatteryNewComponent } from './new/Battery-new.component';
import { BatteryDetailComponent } from './detail/Battery-detail.component';

const routes: Routes = [
  {path: '', component: BatteryHomeComponent},
  { path: 'new', component: BatteryNewComponent },
  { path: ':id', component: BatteryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Battery-detail-permissions'
      }
    }
  },{
    path: ':battery_id/Vehicle', loadChildren: () => import('../Vehicle/Vehicle.module').then(m => m.VehicleModule),
    data: {
        oPermission: {
            permissionId: 'Vehicle-detail-permissions'
        }
    }
}
];

export const BATTERY_MODULE_DECLARATIONS = [
    BatteryHomeComponent,
    BatteryNewComponent,
    BatteryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatteryRoutingModule { }