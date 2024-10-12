import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelHomeComponent } from './home/Model-home.component';
import { ModelNewComponent } from './new/Model-new.component';
import { ModelDetailComponent } from './detail/Model-detail.component';

const routes: Routes = [
  {path: '', component: ModelHomeComponent},
  { path: 'new', component: ModelNewComponent },
  { path: ':id', component: ModelDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Model-detail-permissions'
      }
    }
  },{
    path: ':model_id/Vehicle', loadChildren: () => import('../Vehicle/Vehicle.module').then(m => m.VehicleModule),
    data: {
        oPermission: {
            permissionId: 'Vehicle-detail-permissions'
        }
    }
}
];

export const MODEL_MODULE_DECLARATIONS = [
    ModelHomeComponent,
    ModelNewComponent,
    ModelDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }