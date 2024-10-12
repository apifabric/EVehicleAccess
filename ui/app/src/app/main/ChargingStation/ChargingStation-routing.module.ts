import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingStationHomeComponent } from './home/ChargingStation-home.component';
import { ChargingStationNewComponent } from './new/ChargingStation-new.component';
import { ChargingStationDetailComponent } from './detail/ChargingStation-detail.component';

const routes: Routes = [
  {path: '', component: ChargingStationHomeComponent},
  { path: 'new', component: ChargingStationNewComponent },
  { path: ':id', component: ChargingStationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ChargingStation-detail-permissions'
      }
    }
  },{
    path: ':charging_station_id/ChargingSession', loadChildren: () => import('../ChargingSession/ChargingSession.module').then(m => m.ChargingSessionModule),
    data: {
        oPermission: {
            permissionId: 'ChargingSession-detail-permissions'
        }
    }
}
];

export const CHARGINGSTATION_MODULE_DECLARATIONS = [
    ChargingStationHomeComponent,
    ChargingStationNewComponent,
    ChargingStationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargingStationRoutingModule { }