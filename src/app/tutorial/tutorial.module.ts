import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        TutorialRoutingModule
    ]
})
export class TutorialModule { }
