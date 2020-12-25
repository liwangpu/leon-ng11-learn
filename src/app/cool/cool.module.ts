import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
// import { FooModule } from 'foo';
import { GreetModule } from 'baz';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        GreetModule
    ]
})
export class CoolModule { }
