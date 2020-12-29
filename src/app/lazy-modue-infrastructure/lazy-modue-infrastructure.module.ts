import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLibModule } from 'my-lib';
import { HomeComponent } from './home/home.component';
import { LazyModueInfrastructureRoutingModule } from './lazy-modue-infrastructure-routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        LazyModueInfrastructureRoutingModule,
        MyLibModule
    ]
})
export class LazyModueInfrastructureModule { }
