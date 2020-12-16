import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
import { LoggerComponent } from './components/logger/logger.component';
import { AComponent } from './components/a/a.component';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { BComponent } from './components/b/b.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { TopComponent } from './components/top/top.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent, HomeComponent, LoggerComponent, AComponent, A1Component, A2Component, BComponent, B1Component, B2Component, TopComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
