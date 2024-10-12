import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingSessionHomeComponent } from './home/ChargingSession-home.component';
import { ChargingSessionNewComponent } from './new/ChargingSession-new.component';
import { ChargingSessionDetailComponent } from './detail/ChargingSession-detail.component';

const routes: Routes = [
  {path: '', component: ChargingSessionHomeComponent},
  { path: 'new', component: ChargingSessionNewComponent },
  { path: ':id', component: ChargingSessionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ChargingSession-detail-permissions'
      }
    }
  }
];

export const CHARGINGSESSION_MODULE_DECLARATIONS = [
    ChargingSessionHomeComponent,
    ChargingSessionNewComponent,
    ChargingSessionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargingSessionRoutingModule { }