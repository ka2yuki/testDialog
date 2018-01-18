import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'dialog', pathMatch: 'full' },
  { path: 'dialog', component: DialogOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
