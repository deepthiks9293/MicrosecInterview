import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './new-tab.component';
import { SmartTableComponent, SmartTable1Component, SmartTable2Component } from './grid/grid.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [{
    path: 'grid',
    component: SmartTableComponent,
    children: [{
      path: '',
      redirectTo: 'smart-table1',
      pathMatch: 'full',
    }, {
      path: 'smart-table1',
      component: SmartTable1Component,
    }, {
      path: 'smart-table2',
      component: SmartTable2Component,
    }],
  }],}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTabRoutingModule { }

export const routedComponents = [
  AppComponent,
  SmartTableComponent,
  SmartTable1Component,
  SmartTable2Component
];
