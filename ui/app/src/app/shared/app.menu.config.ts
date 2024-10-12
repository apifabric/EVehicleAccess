import { MenuRootItem } from 'ontimize-web-ngx';

import { BatteryCardComponent } from './Battery-card/Battery-card.component';

import { ChargerCardComponent } from './Charger-card/Charger-card.component';

import { ChargingSessionCardComponent } from './ChargingSession-card/ChargingSession-card.component';

import { ChargingStationCardComponent } from './ChargingStation-card/ChargingStation-card.component';

import { InsurancePolicyCardComponent } from './InsurancePolicy-card/InsurancePolicy-card.component';

import { ManufacturerCardComponent } from './Manufacturer-card/Manufacturer-card.component';

import { ModelCardComponent } from './Model-card/Model-card.component';

import { OwnerCardComponent } from './Owner-card/Owner-card.component';

import { ServiceRecordCardComponent } from './ServiceRecord-card/ServiceRecord-card.component';

import { ServiceStationCardComponent } from './ServiceStation-card/ServiceStation-card.component';

import { VehicleCardComponent } from './Vehicle-card/Vehicle-card.component';

import { VehicleOwnershipCardComponent } from './VehicleOwnership-card/VehicleOwnership-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Battery', name: 'BATTERY', icon: 'view_list', route: '/main/Battery' }
    
        ,{ id: 'Charger', name: 'CHARGER', icon: 'view_list', route: '/main/Charger' }
    
        ,{ id: 'ChargingSession', name: 'CHARGINGSESSION', icon: 'view_list', route: '/main/ChargingSession' }
    
        ,{ id: 'ChargingStation', name: 'CHARGINGSTATION', icon: 'view_list', route: '/main/ChargingStation' }
    
        ,{ id: 'InsurancePolicy', name: 'INSURANCEPOLICY', icon: 'view_list', route: '/main/InsurancePolicy' }
    
        ,{ id: 'Manufacturer', name: 'MANUFACTURER', icon: 'view_list', route: '/main/Manufacturer' }
    
        ,{ id: 'Model', name: 'MODEL', icon: 'view_list', route: '/main/Model' }
    
        ,{ id: 'Owner', name: 'OWNER', icon: 'view_list', route: '/main/Owner' }
    
        ,{ id: 'ServiceRecord', name: 'SERVICERECORD', icon: 'view_list', route: '/main/ServiceRecord' }
    
        ,{ id: 'ServiceStation', name: 'SERVICESTATION', icon: 'view_list', route: '/main/ServiceStation' }
    
        ,{ id: 'Vehicle', name: 'VEHICLE', icon: 'view_list', route: '/main/Vehicle' }
    
        ,{ id: 'VehicleOwnership', name: 'VEHICLEOWNERSHIP', icon: 'view_list', route: '/main/VehicleOwnership' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BatteryCardComponent

    ,ChargerCardComponent

    ,ChargingSessionCardComponent

    ,ChargingStationCardComponent

    ,InsurancePolicyCardComponent

    ,ManufacturerCardComponent

    ,ModelCardComponent

    ,OwnerCardComponent

    ,ServiceRecordCardComponent

    ,ServiceStationCardComponent

    ,VehicleCardComponent

    ,VehicleOwnershipCardComponent

];