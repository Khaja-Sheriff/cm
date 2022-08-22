import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { cmComponent } from './crew_management';

const routes: Routes = [
  { path: 'crew_management', component: cmComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
