import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GreetModule } from "baz";
// import { MyBookModule } from "baz/my-book";
import { MyLibModule } from 'my-lib';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        // GreetModule,
        // MyBookModule,
        MyLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
