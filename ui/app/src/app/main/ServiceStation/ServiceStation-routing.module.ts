import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceStationHomeComponent } from './home/ServiceStation-home.component';
import { ServiceStationNewComponent } from './new/ServiceStation-new.component';
import { ServiceStationDetailComponent } from './detail/ServiceStation-detail.component';

const routes: Routes = [
  {path: '', component: ServiceStationHomeComponent},
  { path: 'new', component: ServiceStationNewComponent },
  { path: ':id', component: ServiceStationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceStation-detail-permissions'
      }
    }
  },{
    path: ':service_station_id/ServiceRecord', loadChildren: () => import('../ServiceRecord/ServiceRecord.module').then(m => m.ServiceRecordModule),
    data: {
        oPermission: {
            permissionId: 'ServiceRecord-detail-permissions'
        }
    }
}
];

export const SERVICESTATION_MODULE_DECLARATIONS = [
    ServiceStationHomeComponent,
    ServiceStationNewComponent,
    ServiceStationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceStationRoutingModule { }