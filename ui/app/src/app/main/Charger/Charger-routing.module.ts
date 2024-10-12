import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargerHomeComponent } from './home/Charger-home.component';
import { ChargerNewComponent } from './new/Charger-new.component';
import { ChargerDetailComponent } from './detail/Charger-detail.component';

const routes: Routes = [
  {path: '', component: ChargerHomeComponent},
  { path: 'new', component: ChargerNewComponent },
  { path: ':id', component: ChargerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Charger-detail-permissions'
      }
    }
  }
];

export const CHARGER_MODULE_DECLARATIONS = [
    ChargerHomeComponent,
    ChargerNewComponent,
    ChargerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargerRoutingModule { }