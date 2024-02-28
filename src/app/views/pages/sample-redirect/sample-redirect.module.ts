import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SampleRedirectComponent } from './sample-redirect.component';

const routes: Routes = [
  {
    path: '',
    component: SampleRedirectComponent,
  },
];

@NgModule({
  declarations: [SampleRedirectComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
