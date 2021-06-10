import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxTutorialRoutingModule } from './ngrx-tutorial-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StateStoreModule } from '../state-store';
import { UserComponent } from './components/user/user.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    declarations: [
        HomeComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        NgrxTutorialRoutingModule,
        NzButtonModule,
        StateStoreModule
    ]
})
export class NgrxTutorialModule { }
