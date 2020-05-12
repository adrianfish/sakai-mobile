import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToollistPage } from './toollist.page';

const routes: Routes = [
  {
    path: '',
    component: ToollistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToollistPageRoutingModule {}
