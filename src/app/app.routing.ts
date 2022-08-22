import { Routes, RouterModule } from '@angular/router';

//import { cmComponent } from './crew_management';


const routes: Routes = [
    //{ path: 'crew_management', component: cmComponent },

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);