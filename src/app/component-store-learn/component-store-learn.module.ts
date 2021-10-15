import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStoreLearnRoutingModule } from './component-store-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentStoreLearnRoutingModule,
    NzButtonModule
  ]
})
export class ComponentStoreLearnModule { }
