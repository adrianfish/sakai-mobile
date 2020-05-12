import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToollistPageRoutingModule } from './toollist-routing.module';

import { ToollistPage } from './toollist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToollistPageRoutingModule
  ],
  declarations: [ToollistPage]
})
export class ToollistPageModule {}
