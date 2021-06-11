import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxTutorialRoutingModule } from './ngrx-tutorial-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StateStoreModule } from '../state-store';
import { UserComponent } from './components/user/user.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SumComponent } from './components/sum/sum.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from "@angular/forms";
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
    declarations: [
        HomeComponent,
        UserComponent,
        SumComponent
    ],
    imports: [
        CommonModule,
        NgrxTutorialRoutingModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzInputModule,
        NzInputNumberModule,
        StateStoreModule
    ]
})
export class NgrxTutorialModule { }
