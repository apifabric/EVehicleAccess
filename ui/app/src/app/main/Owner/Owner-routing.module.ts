import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './home/Owner-home.component';
import { OwnerNewComponent } from './new/Owner-new.component';
import { OwnerDetailComponent } from './detail/Owner-detail.component';

const routes: Routes = [
  {path: '', component: OwnerHomeComponent},
  { path: 'new', component: OwnerNewComponent },
  { path: ':id', component: OwnerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Owner-detail-permissions'
      }
    }
  },{
    path: ':owner_id/VehicleOwnership', loadChildren: () => import('../VehicleOwnership/VehicleOwnership.module').then(m => m.VehicleOwnershipModule),
    data: {
        oPermission: {
            permissionId: 'VehicleOwnership-detail-permissions'
        }
    }
}
];

export const OWNER_MODULE_DECLARATIONS = [
    OwnerHomeComponent,
    OwnerNewComponent,
    OwnerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }