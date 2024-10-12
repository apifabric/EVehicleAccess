import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Battery', loadChildren: () => import('./Battery/Battery.module').then(m => m.BatteryModule) },
    
        { path: 'Charger', loadChildren: () => import('./Charger/Charger.module').then(m => m.ChargerModule) },
    
        { path: 'ChargingSession', loadChildren: () => import('./ChargingSession/ChargingSession.module').then(m => m.ChargingSessionModule) },
    
        { path: 'ChargingStation', loadChildren: () => import('./ChargingStation/ChargingStation.module').then(m => m.ChargingStationModule) },
    
        { path: 'InsurancePolicy', loadChildren: () => import('./InsurancePolicy/InsurancePolicy.module').then(m => m.InsurancePolicyModule) },
    
        { path: 'Manufacturer', loadChildren: () => import('./Manufacturer/Manufacturer.module').then(m => m.ManufacturerModule) },
    
        { path: 'Model', loadChildren: () => import('./Model/Model.module').then(m => m.ModelModule) },
    
        { path: 'Owner', loadChildren: () => import('./Owner/Owner.module').then(m => m.OwnerModule) },
    
        { path: 'ServiceRecord', loadChildren: () => import('./ServiceRecord/ServiceRecord.module').then(m => m.ServiceRecordModule) },
    
        { path: 'ServiceStation', loadChildren: () => import('./ServiceStation/ServiceStation.module').then(m => m.ServiceStationModule) },
    
        { path: 'Vehicle', loadChildren: () => import('./Vehicle/Vehicle.module').then(m => m.VehicleModule) },
    
        { path: 'VehicleOwnership', loadChildren: () => import('./VehicleOwnership/VehicleOwnership.module').then(m => m.VehicleOwnershipModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }